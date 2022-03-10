import React from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Footer.module.less';
import { CircleEmail, DevPost, Github, BULogo } from '../assets/assets.index';
import { BlockList } from 'net';



interface Props { }

export const MainFooter: React.FC<Props> = () => {

  return (
    <div style={{width: "100vw%"}}>
      <img src={BULogo} style={{display: "block", marginLeft: "auto", padding: "20px"}}/>
    </div>
  );
};
