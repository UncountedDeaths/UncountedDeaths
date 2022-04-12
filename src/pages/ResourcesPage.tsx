import React from 'react';
import ContentLayout from '../components/ContentLayout';
import CustomTitle from '../components/CustomTitle';
import FAQ from '../components/FAQ';
import { FAQ_data, text_content } from '../content/FAQContent';

const ResourcesPage: React.FC = () => {
  return (
    <ContentLayout title="RESOURCES" text={text_content}>
      <div>
        <CustomTitle title="FEMA" />
      </div>
      <div>
        <CustomTitle title="FREQUENTLY ASKED QUESTIONS" />
        <FAQ data={FAQ_data} />
      </div>
    </ContentLayout>
  );
};

export default ResourcesPage;
