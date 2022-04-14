import React, { useState } from 'react';
import { Modal } from 'antd';

interface Props {
  isMobile: boolean;
}

export const WarningModal: React.FC<Props> = (props) => {
  const { isMobile } = props;
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      {isMobile ? (
        <Modal
          visible={isVisible}
          title="Mobile Warning"
          closable={true}
          centered={true}
          onCancel={() => setVisible(false)}
          footer={null}
        >
          <p>
            For the best experience we recommend viewing the excess death tracker on your desktop
            device. We currently working to improve the mobile site.
          </p>
        </Modal>
      ) : null}
    </>
  );
};
