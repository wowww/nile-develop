import { Form, Input, Modal, Select } from 'antd';
import { FileUpload } from '@components/market/creator/apply/upload';

const MarketplaceApplyModal = () => {
  return (
    <Modal>
      <Form layout="vertical" size="middle">
        <Form.Item name="artist" label="작가명" required>
          <Input placeholder="작가명을 입력해 주세요." size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label="이메일"
          required
          // validateStatus="error"
          rules={[
            {
              // required: true, // rule을 맞춰주세요.
              message: '이메일 형식이 올바르지 않습니다.',
            },
          ]}
        >
          <Input placeholder="답변 받을 이메일을 입력해 주세요." size="large" />
        </Form.Item>
        <Form.Item name="nft-category" label="NFT Category">
          <Select
            getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
            popupClassName="select-size-sm-dropdown"
            placeholder="지원하고자 하는 NFT 분야를 선택해 주세요."
          >
            <Select.Option value="art">Art</Select.Option>
            <Select.Option value="collectibles">Collectibles</Select.Option>
            <Select.Option value="utility">Utility</Select.Option>
            <Select.Option value="music">Music</Select.Option>
            <Select.Option value="sport">Sport</Select.Option>
            <Select.Option value="photography">Phtography</Select.Option>
            <Select.Option value="Etc">etc</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="introduction" label="작가 및 NFT소개" required>
          <Input.TextArea placeholder="작가 및 NFT 소개를 입력해 주세요." showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="nft-category"
          label="관련 URL"
          rules={[
            { required: false },
          ]}
        >
          <Input placeholder="관련 URL을 기입하시면 더 빠른 검토가 가능합니다." size="large" />
        </Form.Item>
        <Form.Item name="dragger" label="Upload">
          <FileUpload accept=".jpg, .png, .pdf" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
