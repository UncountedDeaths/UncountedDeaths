import React from 'react';
import { Row, Col, Layout, Button, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { InternalRoutes, ExternalRoutes } from '../routes';
import { landingPage1, landingPage2, placeholder, rachaelProfile } from '../assets/assets.index';
import styles from '../styles/LandingPage.module.less';
import * as Content from '../content/LandingPageContent';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { MemberProfile } from '../components/teamMember';
interface Props { }
export const LandingPage: React.FC<Props> = () => {
    let navigate = useNavigate();
    return (
        <Layout.Content>
            <Space direction='vertical' size={150}>
                <Row>
                    <Col >
                        <div className={styles.LandingPageFullWidthImagesContainer}>
                            <img src={landingPage1} className={styles.ImageStyle} />
                            <p className={styles.LandingPageOverlayText}>The Mortality Surveillance & Reporting Laboratory at Boston University</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                    </Col>
                    <Col span={12}>
                        <Typography>
                            <Title>{Content.what_we_do_header}</Title>
                            <Paragraph className={styles.ContentText}>{Content.what_we_do_body}</Paragraph>
                        </Typography>
                    </Col>
                    <Col span={6}>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className={styles.LandingPageFullWidthImagesContainer} src={landingPage2} />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Typography>
                            <Title>{Content.meet_our_team_header}</Title>
                            <Paragraph className={styles.ContentText}>{Content.meet_our_team_body}</Paragraph>
                        </Typography>
                    </Col>
                    <Col span={6}></Col>

                </Row>
            </Space>
                <Row gutter={[24,24]} className={styles.TeamProfileContainer} justify='center'>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"

                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="I am a name"
                            position="This is a position"
                            photo={placeholder}
                            aria-label="Description of photo"
                        />
                    </Col>
                </Row>


        </Layout.Content>
    )
}