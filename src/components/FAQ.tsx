import React from 'react';
import { Collapse, Typography } from 'antd';
import '../styles/FAQ.less';
import { FAQ_data } from '../content/FAQContent';

const FAQ: React.FC = () => {
  return (
    <div className="faq-container">
      <Collapse>
        {FAQ_data.map((f, i) => (
          <Collapse.Panel key={i} header={<Typography.Text strong>{f.title}</Typography.Text>}>
            <Typography.Text>{f.content}</Typography.Text>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
