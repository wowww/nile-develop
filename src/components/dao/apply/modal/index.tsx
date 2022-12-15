import cn from 'classnames';
import {Button, Form, Input, message} from 'antd';
import { useTranslation } from 'next-i18next';

import { ModalLayout } from '@components/common/modal/layout';
import { CustomSelect } from '@components/common/select';
import {useCallback, useEffect, useMemo, useState} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Global, css } from '@emotion/core';
import axios from 'axios';

interface Props {
  isModal: boolean;
  setIsModal: (isModal: boolean) => void;
}

const DaoRequest = ({ isModal, setIsModal }: Props) => {
  const { t } = useTranslation(['daoHome', 'common']);
  const [daoType, setDaoType] = useState<string>();
  const [detailReq, setDetailReq] = useState<string>();
  const [form] = Form.useForm();
  const [pending, setPending] = useState(false);

  const options = useMemo(
    () => [
      {
        value: 'BUSINESS',
        text: 'BUSINESS DAO',
      },
      {
        value: 'investment',
        text: 'INVESTMENT DAO',
      },
      {
        value: 'ART',
        text: 'ART DAO',
      },
      {
        value: 'SOCIAL',
        text: 'SOCIAL DAO',
      },
      {
        value: 'PRODUCT',
        text: 'PRODUCT DAO',
      },
      {
        value: 'ENTERTAINMENT',
        text: 'ENTERTAINMENT DAO',
      },
      {
        value: 'CONCERT',
        text: 'CONCERT DAO',
      },
      {
        value: 'FILM',
        text: 'FILM DAO',
      },
      {
        value: 'MUSIC',
        text: 'MUSIC DAO',
      },
      {
        value: 'sports',
        text: 'SPORTS DAO',
      },
      {
        value: 'ETC',
        text: 'etc (Write type in ‘Detail Requests’)',
      },
    ],
    [],
  );

  const onChangeSelect = useCallback((value: string) => {
    setDaoType(value);
  }, []);

  const onChangeDetail = useCallback((value: string) => {
    setDetailReq(value);
  }, []);

  const onFinish = useCallback((values) => {
    setPending(true);
    axios.post(`${process.env.NEXT_PUBLIC_ENV_NILE_API}/story/dao-creation`, {
      type: values.type,
      description: values.description,
    })
      .then(({data}) => {
        message.info({
          content: t('toastMessage.RequestComplete', { ns: 'common' }),
          key: 'toast',
        });
        setPending(false);
        form.resetFields();
        setIsModal(false);
      })
      .catch((e)=> {
        console.log(e);
        setPending(false);
      });
  }, [form, setIsModal, t])

  useEffect(() => {
    if (!isModal) {
      setDaoType(undefined);
    }
  }, [isModal]);

  useEffect(() => {
    console.log("Dao type ", daoType, "\nDetail Request ", detailReq);
  }, [daoType, detailReq]);

  return (
    <ModalLayout
      className="scroll dao-modal"
      size="md"
      isOpen={isModal}
      setIsOpen={setIsModal}
      footer
      footerContent={[
        <Form.Item className="!m-0">
          <StyledButton
            type="primary"
            htmlType="submit"
            onClick={() => form.submit()}
          >
            {t('DaoRequestModal.btnText')}
          </StyledButton>
        </Form.Item>,
      ]}
      title={t('DaoRequestModal.title')}
    >
      <Global
        styles={css`
          .dao-modal {
            .ant-modal-body {
              height: calc(var(--vh, 1vh) * 100 - 129px);
              ${tw`md:h-[calc(var(--vh, 1vh)*100 - 207px)]`}
            }
            
            .ant-form-item-required {
              ${tw`!font-header`}
            }
          }
        `}
      />
      <div className={cn('ask-popup-inner')}>
        <p>{t('DaoRequestModal.desc')}</p>
        <Form layout="vertical" size="middle" className="!mt-5" form={form} onFinish={onFinish}>
          <Form.Item
            name="type"
            label={t('DaoRequestModal.form.daoCategory.label')}
            required
            validateStatus="error"
            rules={[
              {
                required: true,
                message: t('DaoRequestModal.form.daoCategory.errorMessage'),
              },
            ]}
          >
            <CustomSelect
              size="middle"
              options={options}
              onChange={onChangeSelect}
              placeholder={t('DaoRequestModal.form.daoCategory.placeholder')}
            />
          </Form.Item>
          <Form.Item
            name="description"
            label={t('DaoRequestModal.form.introduction.label')}
            required
            validateStatus="error"
            rules={[
              {
                required: true,
                message: t('DaoRequestModal.form.daoCategory.errorMessage'),
              },
            ]}
          >
            <TextWrap>
              <Input.TextArea
                placeholder={t('DaoRequestModal.form.introduction.placeholder')}
                showCount
                maxLength={100}
                onChange={(e) => onChangeDetail(e.target.value)}
              />
              </TextWrap>
          </Form.Item>
        </Form>
      </div>
    </ModalLayout>
  );
};

const TextWrap = styled.div([
  css`
    textarea {
      ${tw`!h-[68px]`}
    }
  `,
])

const StyledButton = styled(Button)([
  tw`hover:bg-gray-20`,
  tw`hover:text-white`,
  tw`focus:bg-black`,
  tw`focus:border-black`,
  tw`w-[120px]`,
  tw`h-9`,
  tw`border`,
  tw`border-black`,
  tw`bg-black`,
  tw`text-white`,
  tw`text-sm`,
  tw`flex`,
  tw`rounded-[2px]`,
  tw`justify-center`,
  tw`items-center`,
  tw`md:h-10`,
  tw`md:text-base`,
  tw`xl:text-sm`,
  tw`xl:h-[38px]`,
]);

export default DaoRequest;
