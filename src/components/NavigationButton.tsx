import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/LandingPage.module.less';

interface Props {
  content: string;
  navigationPath: string;
}

const NavigationButton: React.FC<Props> = (props: Props) => {
  const { content, navigationPath }: Props = props;
  const navigate = useNavigate();
  return (
    <button className={style.navigationButton} onClick={() => navigate(navigationPath)}>
      {content}
    </button>
  );
};

export default NavigationButton;
