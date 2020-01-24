// @flow
import { Modal } from 'antd';

type Props = {
  content: string,
  onOk: any
};
const ErrorModal = ({ content = '', onOk = () => {} } : Props) => {
  Modal.error({
    title: '에러',
    content,
    centered: true,
    onOk
  });
};

export default ErrorModal;