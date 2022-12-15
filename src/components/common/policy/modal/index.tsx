import { ModalLayout } from '@components/common/modal/layout';
import styled from '@emotion/styled';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AskToJoinModalState, CommonModalState, PolicyModalState } from '@recoil/atoms';
import { Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import tw from 'twin.macro';

export const PolicyModal = () => {
  const { locale } = useRouter();
  const [form] = Form.useForm();
  const [state, setState] = useRecoilState(PolicyModalState);
  const setCommonModal = useSetRecoilState(CommonModalState);
  const setAskToJoinModal = useSetRecoilState(AskToJoinModalState);
  const [agree, setAgree] = useState(false);

  const onFinish = useCallback(({ birth, zipcode }) => {
    if (agree) {
      setState((prev) => ({ ...prev, open: false, agree }));
      setAskToJoinModal((prev) => ({ ...prev, open: true, zipcode, birth }));
    } else {
      setCommonModal((prev) => ({ ...prev, size: 'sm', open: true, title: '이용약관 동의', message: 'NILE 이용약관 및 개인정보 보호정책에 동의하지 않으면, 서비스를 이용할 수 없습니다.' }));
    }
  }, [agree, setState, setAskToJoinModal, setCommonModal]);

  return (
    <ModalLayout
      isOpen={state.open}
      setIsOpen={(open) => setState((prev) => ({ ...prev, open }))}
      size="md"
      title="연령 확인 및 약관 동의"
      footer
      footerContent={[
        <Button
          type="submit"
          onClick={() => {
            form.submit();
          }}
        >
          동의
        </Button>,
      ]}
    >
      <ChecklistWrapper>
        <Checklist>
          <ChecklistItem>NILE은 서비스 이용 연령을 만 19세 이상으로 제한하고 있어 생년월일 확인이 필요합니다.</ChecklistItem>
          <ChecklistItem>캘리포니아 거주자의 경우, 캘리포니아 개인정보 보호정책에 따라 ZIPCODE 확인이 필요합니다.</ChecklistItem>
        </Checklist>
        <FormDescription>
          <FormDescriptionHighlight>*</FormDescriptionHighlight> 표시는 필수 입력 항목입니다.
        </FormDescription>
        <Form name="user-info" layout="vertical" onFinish={onFinish} size="middle" form={form}>
          <Form.Item
            name="birth"
            label="생년월일"
            required
            rules={[
              {
                required: true,
                message: '반드시 입력해야 합니다.',
              },
            ]}
          >
            <Input placeholder="생년월일 6자리를 입력해 주세요." size="large" maxLength={8} />
          </Form.Item>
          <Form.Item name="zipcode" label="캘리포니아 거주자인 경우">
            <Input placeholder="ZIPCODE 5자리를 입력해주세요." size="large" maxLength={5} />
          </Form.Item>
        </Form>
      </ChecklistWrapper>
      <CheckboxWrapper>
        <Checkbox checked={agree} onChange={({ target }) => setAgree(target.checked)}>
          <CheckboxText>
            나는{' '}
            <Link href={`https://www.wemix.com/${locale}/policy/terms`} target="_blank" rel="noopener noreferrer">
              이용약관
            </Link>
            에 동의하며{' '}
            <Link href={`https://www.wemix.com/${locale}/policy/privacy`} target="_blank" rel="noopener noreferrer">
              개인정보 보호정책
            </Link>
            을 읽고 동의합니다.
          </CheckboxText>
        </Checkbox>
      </CheckboxWrapper>
    </ModalLayout>
  );
};

const Button = styled.button([
  tw`px-12`,
  tw`py-2`,
  tw`bg-black`,
  tw`text-white`,
  tw`rounded-sm`,
]);

const ChecklistWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
]);

const Checklist = styled.ul([
  tw`mx-4`,
  tw`gap-2`,
  tw`list-disc`,
]);

const ChecklistItem = styled.li([
  tw`px-2`,
]);

const FormDescription = styled.div([
  tw`text-gray-60`,
  tw`my-4`,
]);

const FormDescriptionHighlight = styled.em([
  tw`text-negative`,
]);

const Link = styled.a([
  tw`text-[#9860ff]`,
  tw`underline`,
]);

const CheckboxWrapper = styled.div([
  tw`bg-gray-90`,
  tw`mt-8`,
  tw`-mx-4`,
  tw`px-4`,
  tw`py-3`,
  tw`border`,
  tw`border-gray-80`,
]);

const CheckboxText = styled.span([
  tw`text-xs`,
]);
