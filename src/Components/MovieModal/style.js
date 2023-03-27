import { Modal } from 'antd';
import styled from 'styled-components';

const Container = styled(Modal)`
 .ant-modal-title,
  .ant-modal-footer,
  .ant-modal-close {
    display: none !important;
  }
  .ant-modal-content {
    padding: 0 !important;
  }
:where(.css-dev-only-do-not-override-ph9edi).ant-modal {
  top: 20% !important;
}

`;

export { Container };
