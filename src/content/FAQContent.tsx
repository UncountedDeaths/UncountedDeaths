import { Col, Row, Typography } from 'antd';
import React from 'react';
import FAQ from '../components/FAQ';

export interface IFAQ {
  content: string | React.FC;
  title: string;
}

export const FAQ_Death_Cert_Data: IFAQ[] = [
  {
    title: 'What is a death certificate',
    content:
      "Death certificates are used nationally as legal documents recording a person's time of death, location of death, and cause of death. There are multiple components to a death certificate, required to be completed by a medical certifier and a funeral director. The medical certifier is responsible for completing the majority of the certificate including the essential “Cause-of-Death” section. Death certificates are meant to accurately report mortality statistics and serve as a legal document in arranging funerals, ratifying wills, and taking necessary steps in bureaucratically declaring the end of a life.",
  },
  {
    title: 'What is included as a cause of death and how is it listed on the death certificate?',
    content: () => (
      <>
        Death Certificates contain a “Cause-of-Death” section which consists of{' '}
        <Typography.Link href="https://www.cdc.gov/nchs/data/dvs/blue_form.pdf">
          2 parts.
        </Typography.Link>
        <ul>
          <li>
            Part 1 identifies the direct event directly resulting in death including any underlying
            causes of death.
          </li>
          <li>
            Part 2 reports other significant diseases, conditions, or injuries which may have
            contributed to the death but did not directly result in death.
          </li>
          <li>
            Example: A person or patient dies due to a "heart attack". Part 1 will list the direct
            chain of events and conditions resulting in death, this might include: "Cardiac Arrest"
            or "Cardiovascular Disease". Part 2 will list other relevant conditions that may have
            indirectly contributed to death such as "Diabetes."
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'How is COVID-19 listed as a cause of death?',
    content:
      'Throughout the COVID-19 pandemic the CDC advised certifiers to include COVID-19 as an underlying cause of death in Part 1. Unique codes were added to death certificates to identify COVID-19 as the cause rather than other respiratory infections. ',
  },
  {
    title: 'Who ensures death certificates are accurate?',
    content:
      'The cause of death is reported by a “medical certifier” who ultimately signs-off on the certificate to indicate their endorsement and professional opinion on the cause of death. Although this person is responsible for accurately investigating, identifying, and reporting causes of death each state defines its own guidelines and requirements for who the “medical certifier” can be. See more in the Medicolegal Death Investigation section.',
  },
  {
    title: 'What guidelines exist nationally for death certification?',
    content:
      'In such decentralized systems it is difficult to quickly disseminate and enforce standardized reporting guidelines. At several stages throughout the COVID-19 pandemic period guidelines were defined, published, and refined by the CDC to encourage more explicit, confident, and standardized criteria for attributing a death to COVID-19.Most recently the Council of State and Territorial Epidemiologists (CTSE), in partnership with the CDC, have published refined guidelines to attributing a death to COVID-19. Which now includes a 30-day window prior to death in which COVID-19 symptoms or laboratory results must be confirmed.',
  },
];

export const FAQ_Medicolegal_Data: IFAQ[] = [
  {
    title: 'What is the Medicolegal Death Investigation system?',
    content:
      'Medicolegal Death Investigation or MDI is the official system responsible for investigating, certifying, and reporting deaths throughout the US. This function is essential in gathering national mortality statistics important to informing and guiding public policy.',
  },
  {
    title: 'What are the different MDI systems in the United States?',
    content: () => (
      <>
        <Typography.Text>
          Medicolegal Death Investigation or MDI is the official system responsible for
          investigating, certifying, and reporting deaths throughout the US. This function is
          essential in gathering national mortality statistics important to informing and guiding
          public policy.
        </Typography.Text>
        <Row>
          <Col span={2}></Col>
          <Col span={22}>
            {/* TODO: Fix this and make it less hacky */}
            <div style={{ padding: '2rem' }} />
            <FAQ data={Sub_FAQ_MDI_Systems} />
          </Col>
        </Row>
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
    title: 'Sheriff Coroner',
    content:
      'A sheriff-coroner is an elected position. A sheriff-coroner is a sheriff (responsible for keeping the peace and attending courts) who also assumes the roles and responsibilities of a coroner (responsible for examining and determining the cause of all deaths). ',
  },
  {
    title: 'Justice of the Peace',
    content:
      'Primarily found in Texas, a justice of the peace is a minor judicial official who performs duties like issuing warrants or conducting marriages. In Texas (where each county is legally required to have between 1 and 8 justices of the peace), a justice of the peace is also required to assume the duties of a coroner if the county does not have a medical examiner. ',
  },
  {
    title: 'State versus County',
    content:
      'Refers to the degree of centralization of the MDI system in each county. A centralized system is more likely to enforce standardization and may fill in resource gaps between counties. ',
  },
];

export const FAQ_FEMA_FAQ_Data: IFAQ[] = [
  {
    title: 'Who is eligible?',
    content: () => (
      <>
        <ul>
          <li>You are a: US Citizen, Non-citizen national, or qualified non-citizen</li>
          <li>Death occurred in the US on or after Jan. 20, 2020.</li>
          <li>The death was attributed to COVID-19 </li>
          <li>ou are responsible for the funeral expenses</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What costs are eligible for coverage?',
    content: () => (
      <>
        <ul>
          <li>
            Funeral services (cremation, transfer of remains, casket/urn, burial plot,
            headstone/marker, clergy, ceremony, funeral home expense)
          </li>
          <li>Costs associated in producing death certificates</li>
          <li>Costs due to local or state ordinances</li>
          <li>Transportation for up to two to identify the person who died</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What are the requirements for applying?',
    content: () => (
      <>
        <Typography.Text>
          A copy of an official death certificate which must identify:
        </Typography.Text>
        <ul>
          <li>The death occurred in the US</li>
          <li>Occurred after January 20, 2020</li>
          <li>Was attributed to COVID-19</li>
        </ul>
        <Typography.Text>
          A signed funeral home contract, invoice, receipts, or other expense documentation which
          includes:
        </Typography.Text>
        <ul>
          <li>
            Your name (person covering the cost) indicating you are the one responsible for some or
            all of the cost.
          </li>
          <li>Date indicating the expense was incurred after January 20, 2020</li>
          <li>Name of the deceased for which funeral service is being covered.</li>
          <li>Item-by-item costs for service</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What is the application process?',
    content: () => (
      <>
        <Typography.Text>
          Please visit the FEMA website by clicking{' '}
          <Typography.Link href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance">
            here{' '}
          </Typography.Link>
          for more in-depth guidance. <br />
        </Typography.Text>
        <ul>
          <li>
            To apply you are required to call a toll-free number (844-684-6333) between 9am - 9pm
            Eastern Time. Multilingual Services are available. You are not able to apply online.
          </li>
          <li>
            Be prepared to provide a FEMA representative with:
            <ul>
              <li>Your date of birth and Social Security number</li>
              <li>The date of birth and Social Security number of deceased individual</li>
              <li>Your current mailing address and telephone number</li>
              <li>The address of where the deceased died</li>
              <li>
                If applicable, any insurance policies the deceased had which covers burial or
                funeral expenses
              </li>
              <li>
                If applicable, documentation of any additional funeral support (donations, CARES Act
                grants, state assistance, etc…)
              </li>
              <li>
                For funds to be delivered via direct deposit please be prepared to provide the
                routing and account number of a checking or savings account in your name.
              </li>
            </ul>
          </li>
          <li>
            Following the phone application the FEMA representative will provide you with an
            application number, be prepared to record this for your records
            <ul>
              <li>
                You may use this application number to create an account on:
                <Typography.Link href="www.disasterassistance.gov">
                  www.disasterassistance.gov
                </Typography.Link>
                to follow application process
              </li>
            </ul>
          </li>
          <li>
            Submit the required supporting documents (death certificate, invoices of expenses,
            receipts, funeral home contracts). There are 3 ways to submit these documents:
            <ul>
              <li>Upload directly or scanned copies via disasterassistance.gov account</li>
              <li>Via Fax to 855-261-3452</li>
              <li>Via Mail to: P.O. Box 10001, Hyattsville, MD 20782</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'What is the expected waiting time?',
    content: () => (
      <>
        <ul>
          <li>
            Once FEMA receives required documentation it takes about 45 days for an eligibility
            decision to be made.
          </li>
          <li>
            If your application is approved for COVID-19 Funeral Assistance funds will be either
            sent via a Department of Treasury Check or via direct deposit. Funds usually arrive
            within days of approval.
          </li>
          <li>You will receive a notification letter.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What are some common challenges?',
    content: () => (
      <>
        <ul>
          <li>
            The main obstacle which is a reality for over 100,000 Americans is that COVID-19 was
            never formally recognized as an underlying cause of death on their death certificate.
            <ul>
              <li>Please see the next section of how to amend death certificates.</li>
            </ul>
          </li>
          <li>
            Other{' '}
            <Typography.Link href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance/faq">
              Frequently Asked Questions from FEMA
            </Typography.Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Amending Errors on Death Certificates',
    content: () => (
      <>
        <ul>
          <li>
            It is possible to have death certificates amended! But it is highly specific to each
            state's jurisdiction and MDI system. Every state has its own regulations, guidelines,
            and procedures for amending a death certificate.
          </li>
          <ul>
            <li>
              Please refer to your state’s guidelines, requirements, and procedures in applying for
              a Death Certificate Amendment. We have done our best to provide links to these
              guidelines for most states here.
            </li>
          </ul>
        </ul>
      </>
    ),
  },
];

export const FAQ_FEMA_SubHeader_Text =
  'If you need assistance covering the cost of a COVID-19 funeral you may be eligible to apply for up to $9,000 in assistance through FEMA.';

export const text_content =
  'This website features tools for identifying both patterns of county excess mortality throughout the United States and potential under-reported COVID-19 deaths';
