import React from 'react';
import styles from '../styles/teamMember.module.less';

interface Props {
  name: string;
  position: string;
  bio?: string;
  photo: string;
}

export const MemberProfile: React.FC<Props> = (props: Props) => {
  const { name, position, bio, photo } = props;
  let bio_elm;
  if (bio != null) { 
    bio_elm = <div className={styles.Bio}>{bio}</div>
  } else { 
    bio_elm = <></>
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Box}>
        <img src={photo} alt="Profile of team member" className={styles.Photo} />
        <div className={styles.Name}>{name}</div>
        <div className={styles.Position}>{position}</div>
        {bio_elm}
      </div>
    </div>
  );
};
