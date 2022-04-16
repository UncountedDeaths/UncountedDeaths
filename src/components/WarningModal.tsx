import React, { useState } from 'react';
import { Modal } from 'antd';
import { isMobile } from 'react-device-detect';
import styles from '../styles/WarningModal.module.less';

const WarningModal: React.FC = () => {
  const [isVisible, setVisible] = useState(isMobile);
  return (
    <Modal
      className={styles.Title}
      visible={isVisible}
      title="Mobile Warning"
      closable={true}
      centered={true}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <p>
        For the best experience we recommend viewing the excess death tracker on your desktop
        device. We are currently working to improve the mobile site.
      </p>
    </Modal>
  );
};

export default WarningModal;
