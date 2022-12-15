import React, { useCallback, useState } from 'react';
import { Form, Input, message, Select } from 'antd';

import { Button } from '@components';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { ModalLayout } from '@components/common/modal/layout';
import { FileUpload } from '@components/market/creator/apply/upload';
import { Trans, useTranslation } from 'next-i18next';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { AskToJoinModalState } from '@recoil/atoms';

const { Option } = Select;

export type AskToJoinModalProps = {
  // nothing
};

export const AskToJoinModal = (props: AskToJoinModalProps) => {
  const { t } = useTranslation(['common']);
  const [form] = Form.useForm();
  const [pending, setPending] = useState(false);
  const [state, setState] = useRecoilState(AskToJoinModalState);

  const onFinish = useCallback((values) => {
    setPending(true);
    axios.post(`${process.env.NEXT_PUBLIC_ENV_NILE_API}/story/collaboration`, {
      email: values.email,
      name: values.name,
      description: values.description,
      category: values.category,
      url: values.url,
      attachment: values.file,
    })
      .then(({ data }) => {
        message.info({
          content: t('toastMessage.RequestComplete', { ns: 'common' }),
          key: 'toast',
        }).then(() => {
          // nothing
        });
        setPending(false);
        form.resetFields();
        setState((prev) => ({ ...prev, open: false }));
      })
      .catch((e) => {
        setPending(false);
        console.log(e);
      });
  }, [form, setState, t]);

  return (
    <ModalLayout
      className="scroll"
      title="Ask to join"
      size="md"
      isOpen={state.open}
      setIsOpen={(open) => setState((prev) => ({ ...prev, open }))}
      footer
      footerContent={[
        <Button
          className="hover:bg-gray-10"
          color="#FFF"
          background="#1A1A1A"
          fontSize="14px"
          width="160px"
          height="38px"
          borderRadius="4px"
          onClick={() => form.submit()}
          disabled={pending}
          type="submit"
        >{t('modalJoin.form.button', { ns: 'common' })}</Button>,
      ]}
    >
      <ModalInner>
        <p>
          {t('modalJoin.desc1', { ns: 'common' })}
          <br />
          {t('modalJoin.desc2', { ns: 'common' })}
        </p>
        <DescSub>
          <Trans
            i18nKey="modalJoin.text"
            ns="common"
            values={{
              strong1: '*',
            }}
          >
            <Highlight />
          </Trans>
        </DescSub>
        <Form layout="vertical" size="middle" autoComplete="off" form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label={t('modalJoin.item.0.title', { ns: 'common' })}
            required
            rules={[
              {
                required: true,
                message: t('modalJoin.item.0.placeholder', { ns: 'common' }),
              },
            ]}>
            <Input placeholder={t('modalJoin.item.0.placeholder')} size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label={t('modalJoin.item.1.title', { ns: 'common' })}
            required
            rules={[
              {
                required: true,
                message: t('modalJoin.item.1.message', { ns: 'common' }),
              },
            ]}
          >
            <Input placeholder={t('modalJoin.item.1.placeholder', { ns: 'common' })} size="large" />
          </Form.Item>
          <Form.Item name="category" label={t('modalJoin.item.2.title1', { ns: 'common' })}>
            <Select
              suffixIcon={<IconArrow />}
              getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
              popupClassName="select-size-sm-dropdown"
              placeholder={t('modalJoin.item.2.placeholder2', { ns: 'common' })}
            >
              <Option value="art">Art</Option>
              <Option value="collectibles">Collectibles</Option>
              <Option value="utility">Utility</Option>
              <Option value="music">Music</Option>
              <Option value="sport">Sport</Option>
              <Option value="photography">Phtography</Option>
              <Option value="Etc">etc</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label={t('modalJoin.item.3.title', { ns: 'common' })}
            required
            rules={[
              {
                required: true,
                message: t('modalJoin.item.1.message', { ns: 'common' }),
              },
            ]}>
            <Input.TextArea placeholder={t('modalJoin.item.3.placeholder', { ns: 'common' })} showCount maxLength={100} />
          </Form.Item>
          <Form.Item
            name="url"
            label={t('modalJoin.item.4.title', { ns: 'common' })}
            rules={[
              {
                type: 'url',
                message: t('modalJoin.item.4.message', { ns: 'common' }),
              },
            ]}
          >
            <Input placeholder={t('modalJoin.item.4.placeholder', { ns: 'common' })} size="large" />
          </Form.Item>
          <Form.Item name="file" label={t('modalJoin.item.5.title', { ns: 'common' })}>
            <FileUpload accept=".jpg, .png, .pdf" description={t('modalJoin.item.5.text', { ns: 'common' })} callback={(files) => {
              console.log(files);
              if (files) {
                form.setFieldValue('file', files[0]?.response?.name ?? '');
              } else {
                form.resetFields(['file']);
              }

            }} />
          </Form.Item>
        </Form>
      </ModalInner>
    </ModalLayout>
  );
};

const ModalInner = styled.div([
  tw`pb-[12px]`,
]);

const DescSub = styled.span([
  `
  display: block;
  margin: 4px 0 20px;
  color: #a6a6a6;
   `,
]);

const Highlight = styled.span([
  tw`text-[#fa5454]`,
]);
