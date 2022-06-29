import { Col, Row, Typography } from 'antd';
import React from 'react';
import FAQ from '../components/FAQ';

export interface IFAQ {
  content: string | React.FC;
  title: string;
}

export const FAQ_Death_Cert_Data: IFAQ[] = [
  {
    title: 'What is a death certificate?',
    content:
      "Death certificates are legal documents that record a person's time of death, location of death, and cause of death. There are multiple components to a death certificate, required to be completed by a medical certifier and a funeral director. The medical certifier is responsible for completing the majority of the certificate including the essential “Cause-of-Death” section. Death certificates are meant to accurately report mortality statistics and serve as a legal document in arranging funerals, ratifying wills, and taking necessary steps in bureaucratically declaring the end of a life.",
  },
  {
    title: 'How is Covid-19 listed on the death certificate?',
    content: () => (
      <>
        The cause-of-death section on a death certificate includes 2 parts. Part 1 identifies the
        direct event directly resulting in death including any underlying causes of death. Part 2
        reports other significant diseases, conditions, or injuries which may have contributed to
        the death but did not directly result in death. {''}{' '}
        <Typography.Link href="https://www.cdc.gov/nchs/data/nvss/vsrg/vsrg03-508.pdf">
          CDC guidelines
        </Typography.Link>{' '}
        {''} state that any death where Covid-19 contributed should have Covid-19 listed on the
        death certificate. In most cases where Covid-19 contributed to a death, Covid-19 is listed
        as the underlying cause of death.
      </>
    ),
  },
  {
    title: 'Who ensures death certificates are accurate?',
    content:
      'The cause of death is reported by a “medical certifier” who signs-off on the certificate to indicate their endorsement and professional opinion on the cause of death. Although this person is responsible for accurately investigating, identifying, and reporting causes of death each state defines its own guidelines and requirements for who the “medical certifier” can be. This includes a medical examiner, coroner, sheriff-coroner, or justice of the peace. More details are available in the Death Investigation System section. ',
  },
  {
    title: 'What guidelines exist nationally for death certification?',
    content: () => (
      <>
        The death investigation system in the United States is highly decentralized, meaning it is
        difficult to quickly disseminate and enforce standardized reporting guidelines during a
        public health emergency such as a pandemic. At several stages throughout the COVID-19
        pandemic, the CDC defined, published, and refined guidelines to encourage more standardized
        criteria for attributing a death to COVID-19. Most recently the Council of State and
        Territorial Epidemiologists (CTSE), in partnership with the CDC, have published refined
        guidelines to attributing a death to COVID-19. These establish that any death that occured
        within 30-day of Covid-19 symptoms or a positive test should be attributed to Covid-19.
        Further details about these guidelines are available {''}
        <Typography.Link href="https://cdn.ymaws.com/www.cste.org/resource/resmgr/pdfs/pdfs2/20211222_interim-guidance.pdf">
          here.
        </Typography.Link>
      </>
    ),
  },
];

export const FAQ_Medicolegal_Data: IFAQ[] = [
  {
    title: 'What is the medicolegal death investigation (MDI) system?',
    content: () => (
      <>
        The Medicolegal Death Investigation system or MDI is the official system responsible for
        investigating, certifying, and reporting deaths throughout the US. This function is
        essential in gathering national mortality statistics important to informing and guiding
        public policy. Further details about the death investigation system are available {''}
        <Typography.Link href="https://www.cdc.gov/phlp/publications/topic/coroner.html">
          here.
        </Typography.Link>
      </>
    ),
  },
  {
    title: 'What are the different types of death certifiers in the United States?',
    content: () => (
      <>
        <Row>
          <Col span={2}></Col>
          <Col span={22}>
            {/* TODO: Fix this and make it less hacky */}

            <FAQ data={Sub_FAQ_MDI_Systems} />
          </Col>
        </Row>
      </>
    ),
  },
  {
    title: 'What reforms are needed to the death investigation system?',
    content: () => (
      <>
        In 2009, the National Academies of Sciences, Engineering, and Medicine produced {''}
        <Typography.Link href="https://nap.nationalacademies.org/read/12589/chapter/11">
          detailed recommendations
        </Typography.Link>
        {''} about how to reform the death investigation system. Some proposed changes include
        allocating federal funding to convert coroner systems into medical examiner systems and
        train new forensic pathologists, establishing a national working group that would advance
        best practices in death certification and provide guidance during pandemics and other public
        health emergencies, and requiring that all death certifiers are accredited.
      </>
    ),
  },
];

export const Sub_FAQ_MDI_Systems: IFAQ[] = [
  {
    title: 'Medical Examiner',
    content:
      'A medical examiner is someone who has completed higher education in forensic pathology as a medical specialty and has received a board certification. A medical examiner can perform an autopsy as well as various toxicology tests to determine the precise cause of death. Medical examiners are appointed by the government, not elected.',
  },
  {
    title: 'Coroner',
    content:
      'A coroner is elected by the general population and is not required to be medically trained or board certified. They do not perform any post-mortem examinations or diagnostic tests but are in charge of identifying a body, notifying the next of kin, and arranging a death certificate.',
  },
  {
    title: 'Sheriff-Coroner',
    content:
      'A sheriff-coroner is an elected position. A sheriff-coroner is a sheriff (responsible for keeping the peace and attending courts) who also assumes the roles and responsibilities of a coroner (responsible for examining and determining the cause of all deaths). ',
  },
  {
    title: 'Justice of the Peace',
    content:
      'Primarily found in Texas, a justice of the peace is a minor judicial official who performs duties like issuing warrants or conducting marriages. In Texas (where each county is legally required to have between 1 and 8 justices of the peace), a justice of the peace is also required to assume the duties of a coroner if the county does not have a medical examiner. ',
  },
];

export const FAQ_FEMA_FAQ_Data: IFAQ[] = [
  {
    title: 'What is the FEMA funeral assistance program?',
    content: () => (
      <>
        The Federal Emergency Management Agency (FEMA) launched a funeral assistance program to
        offer financial support to individuals who have lost loved ones to Covid-19 in April 2021.
        Applicants are eligible to receive up to $9,000 per deceased applicant and up to $35,500 per
        application. As of June 2022, eligibility criteria for the program state that a death
        certificate is required showing that a death was caused by or likely the result of Covid-19.
        Further details about the program are available {''}
        <Typography.Link href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance">
          here.
        </Typography.Link>
      </>
    ),
  },
  {
    title: 'Who is eligible for financial assistance?',
    content: () => (
      <>
        Applicants must be responsible for the funeral costs of a person who died from Covid-19. As
        of June 2022, eligibility criteria for the program state that a death certificate is
        required showing that a death was caused by or likely the result of Covid-19. Further
        details about the eligibility criteria are available {''}
        <Typography.Link href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance#eligible">
          here.
        </Typography.Link>
      </>
    ),
  },
  {
    title: 'What costs does the program cover?',
    content: () => (
      <>
        The FEMA funeral assistance program covers funeral costs including funeral services,
        cremation, burial plots, and transportation. A full list of covered costs is available {''}
        <Typography.Link href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance">
          here.
        </Typography.Link>
      </>
    ),
  },
  {
    title: 'How do you apply for the program?',
    content: () => (
      <>
        To apply for funeral assistance, call FEMA at 844-684-633 on Monday through Friday from 9 am
        to 9 pm Eastern Time. FEMA estimates that the application process will take 20 minutes to
        complete. Applicants are then required to submit supporting documentation online or via fax
        or mail. Applications take up to 45 days for an eligibility decision to be made. Further
        details about the application process are available {''}
        <Typography.Link href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance#work">
          here.
        </Typography.Link>
      </>
    ),
  },
  {
    title: 'What barriers exist for receiving FEMA funeral assistance?',
    content: () => (
      <>
        As of June 2022, eligibility criteria for the program state that a death certificate is
        required showing that a death was caused by or likely the result of Covid-19. {''}
        <Typography.Link href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7015a4.htm">
          Prior research
        </Typography.Link>
        {''} on the true mortality impact of the Covid-19 pandemic has found that up to 25% of
        deaths attributable to the pandemic in the United States have not been assigned to Covid-19
        on death certificates. This suggests that many people who have incurred funeral costs
        because of the Covid-19 pandemic are unable to benefit from this program and that the
        current eligibility criteria pose a barrier for receiving FEMA funeral assistance.
      </>
    ),
  },
  {
    title: 'How do you amend an error on a death certificate?',
    content: () => (
      <>
        It is possible to have a death certificate amended if there is documentation supporting a
        cause of death that differs from what is listed. The process, however, differs for each
        state and each type of death certifier. We are currently developing a resource guide that
        will provide links and information to assist with the process of amending your death
        certificate in each state.
      </>
    ),
  },
];

export const FAQ_FEMA_SubHeader_Text =
  'If you need assistance covering the cost of a COVID-19 funeral you may be eligible to apply for up to $9,000 in assistance through FEMA.';
