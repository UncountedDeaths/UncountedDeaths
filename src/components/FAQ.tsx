import React from 'react';
import { Collapse, Typography } from 'antd';
import '../styles/FAQ.less';
import { IFAQ } from '../content/FAQContent';

const FAQ: React.FC<{ data: IFAQ[] }> = (props) => {
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
        {props.data.map((f, i) => (
          <Collapse.Panel
            className={`faq-collapse-panel-${i}`}
            key={i}
            header={<Typography.Title level={5}>{f.title}</Typography.Title>}
          >
            {/* This allows us to support either plain text or some child element if something "fancier" is required. */}
            {typeof f.content === 'string' ? (
              <Typography.Text className="faq-collapse-content">{f.content}</Typography.Text>
            ) : (
              <div className="faq-collapse-content">
                <f.content />
              </div>
            )}
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
