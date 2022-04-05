import React from 'react';
import ContentLayout from '../components/ContentLayout';
import FAQ from '../components/FAQ';
import { FAQ_data } from '../content/FAQContent';

const FAQPage: React.FC = () => {
  return (
    <ContentLayout title="FREQUENTLY ASKED QUESTION">
      <FAQ data={FAQ_data} />
    </ContentLayout>
  );
};

export default FAQPage;
