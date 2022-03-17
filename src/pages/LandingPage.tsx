import React from 'react';
import { Row, Col, Layout, Button, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { InternalRoutes, ExternalRoutes } from '../routes';
import { landingPage1, landingPage2, placeholder, elif, mikas, rafeya, steele, stokes, syl, wubin } from '../assets/assets.index';
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
                            name="Elif Coskun"
                            position="Public Health Master's Student"
                            photo={elif}
                            aria-label="Elif Coskun"

                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="Mikas Hansen, PhD"
                            position="MS/MPH Student in Medical Sciences and Global Health"
                            photo={mikas}
                            aria-label="Mikas Hansen"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="Sylvia Lutze"
                            position="Applied Biostatistics Master's Student"
                            photo={syl}
                            aria-label="Sylvia Lutze"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="Steele Myrick"
                            position="Biostatistics Master's Student"
                            photo={steele}
                            aria-label="Steele Myrick"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="Rafeya Raquib"
                            position="Applied Biostatistics Master's Student"
                            photo={rafeya}
                            aria-label="Rafeya Raquib"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="Andrew Stokes, PhD"
                            position="Assistant Professor in Global Health at BU"
                            photo={stokes}
                            aria-label="Andrew Stokes"
                        />
                    </Col>
                    <Col className={styles.TeamProfileRow}>
                        <MemberProfile
                            name="Wubin Xie"
                            position="Postdoctoral Associate"
                            photo={wubin}
                            aria-label="Wubin Xie"
                        />
                    </Col>
                </Row>


        </Layout.Content>
    )
}