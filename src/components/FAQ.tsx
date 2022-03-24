import React from 'react';
import { Collapse, Typography } from 'antd';
import '../styles/FAQ.less';
import { FAQ_data } from '../content/FAQContent';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const FAQ: React.FC = () => {
  return (
    <div className="faq-container">
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? (
            <div className="icon-holder">
              <span className="faq-collapse-icon">-</span>
            </div>
          ) : (
            <div className="icon-holder">
              <span className="faq-collapse-icon">+</span>
            </div>
          )
        }
        expandIconPosition="right"
      >
        {FAQ_data.map((f, i) => (
          <Collapse.Panel
            className={`faq-collapse-panel-${i}`}
            key={i}
            header={<Typography.Title level={5}>{f.title}</Typography.Title>}
          >
            <Typography.Text className="faq-collapse-content">{f.content}</Typography.Text>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
