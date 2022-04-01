import React from 'react';
import styles from '../styles/LandingPage.module.less';
import { useNavigate } from 'react-router-dom';
import { InternalRoutes } from '../routes';

interface Props {
  content: string;
}

const ViewTrackerButton: React.FC<Props> = (props: Props) => {
  const { content }: Props = props;
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate(InternalRoutes.TRACKER.path)}>
      {content}
    </button>
  );
};

export default ViewTrackerButton;
