export type ContentCardProps = {
  title: string;
  date: string;
  text: string;
  link: string;
  imgSrc: string;
  isMobile?: boolean;
  imgAligned?: 'flex-start' | 'center';
};

export const content: ContentCardProps[] = [
  {
    title:
      'Association of Health Care Factors With Excess Deaths Not Assigned to COVID-19 in the US',
    date: 'September 13, 2021',
    text: 'Approximately 20% of excess deaths in the US in 2020 were not reflected in COVID-19 death counts.1-3 These excess deaths included deaths caused by COVID-19 but not assigned to it as well as indirect...',
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2783986',
    imgSrc:
      'https://cdn.jamanetwork.com/ama/content_public/journal/jamanetworkopen/938760/zld210183f1_1630440443.66635.png?Expires=2147483647&Signature=h2N9SRt8lQgEKlaG~0-V1EJhs1~-v6ppVDzDxF7pTy3FBuiDczdCYbbu5Np7o3fg1q7bU9-rA3fUj3qKyUmqpSXR4fAfza0qHXzOSJLCmN-nA58oGs9mmS~q0fvFMwIBxtvAY3BAXzJ33KyNlCP93yT5RIc4yb~HmwPBR0buY~Pf7YC79H39YoURaHNdL8NgyRRKon8HXg1Tvt2Otn8fDYi5IHN81cwFC~V4VAyA5zA9hlMcaAp409k9VSdoq2bb5AkUCzoQ~QxwMPjAUTHSOWIOPeLW~bApk5eTrevMRFE1rqlPfB~dhlXbL9aZkRaI~Pj3UW9cnYj1J69hqDF8vg__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA',
  },
  {
    title:
      'Excess Deaths During the COVID-19 Pandemic: Implications for US Death Investigation Systems',
    date: 'January 14, 2022',
    text: 'Quality death investigation is a critical piece of an effective public health system. 1 When a person dies, a coroner, medical examiner, or health professional with knowledge of the decedent’s medical conditions fills out the death certificate...',
    link: 'https://pubmed.ncbi.nlm.nih.gov/34314220/',
    imgSrc: 'https://cdn.ncbi.nlm.nih.gov/pubmed/persistent/pubmed-meta-image.png',
  },
  {
    title: 'COVID-19 and excess mortality in the United States: A county-level analysis',
    date: 'May 20, 2021',
    text: 'Coronavirus Disease 2019 (COVID-19) excess deaths refer to increases in mortality over what would normally have been expected in the absence of the COVID-19 pandemic. Several prior studies have calculated excess deaths in the United States...',
    link: 'https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003571',
    imgSrc: 'https://cdn.ncbi.nlm.nih.gov/pubmed/persistent/pubmed-meta-image.png',
  },
  {
    title:
      'The unequal burden of the Covid-19 pandemic: Capturing racial/ethnic disparities in US cause-specific mortality',
    date: 'March, 2022',
    text: "Despite a growing body of literature focused on racial/ethnic disparities in Covid-19 mortality, few previous studies have examined the pandemic's impact on 2020 cause-specific mortality by race and ethnicity...",
    link: 'https://www.sciencedirect.com/science/article/pii/S2352827321002871',
    imgSrc: 'https://ars.els-cdn.com/content/image/1-s2.0-S2352827321X00055-cov150h.gif',
  },
  {
    title:
      'County-level estimates of excess mortality associated with COVID-19 in the United States',
    date: 'January 1, 2022',
    text: 'The COVID-19 pandemic in the U.S. has been largely monitored using death certificates containing reference to COVID-19. However, prior analyses reveal that a significant percentage of excess deaths associated with the pandemic were not directly assigned to COVID-19...',
    link: 'https://www.sciencedirect.com/science/article/pii/S2352827321002962',
    imgSrc: 'https://ars.els-cdn.com/content/image/1-s2.0-S2352827321X00055-cov150h.gif',
  },
  {
    title:
      '“Pandemic of the unvaccinated”? At midlife, white people are less vaccinated but still at less risk of Covid-19 mortality in Minnesota',
    date: 'March 8, 2021',
    text: 'Recent research underscores the exceptionally young age distribution of Covid-19 deaths in the United States compared with international peers. We show that the high level of Covid mortality at midlife ages (45–64) is deeply intertwined with continuing racial inequality in Covid-19 mortality...',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8923115/?utm_source=Chrome&utm_medium=rss&utm_campaign=pubmed-2&utm_content=1faJNdFX7yLjGwqLern1ecvN56cHqWd4_KPNrthXtjwBb6ukQG&fc=20200716093347&ff=20220318030229&v=2.17.6',
    imgSrc: 'https://www.ncbi.nlm.nih.gov/corehtml/pmc/pmcgifs/pmc-logo-share.png?_=0',
  },
  {
    title:
      'COVID-19 mortality and excess mortality among working-age Californians, by occupational sector: March 2020 through November 2021',
    date: 'February 15, 2022',
    text: 'During the first year of the pandemic, essential workers faced higher rates of SARS-CoV-2 infection and COVID-19 mortality than non-essential workers. It is unknown whether disparities in pandemic-related mortality across occupational sectors have continued to occur, amidst SARS-CoV-2 variants and vaccine availability.',
    link: 'https://www.medrxiv.org/content/10.1101/2022.02.14.22270958v1',
    imgSrc:
      'https://www.medrxiv.org/sites/default/files/images/medrxiv_logo_homepage7-5-small-test-up.png',
  },
];

export const text_content =
  'Our team is dedicated to investigating and evaluating discrepencies in COVID-19 mortality throughout the US. We are an interdisciplinary team of public health researchers, demographers, and statisticians who are investigating';
