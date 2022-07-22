export type ContentCardProps = {
  title: string;
  author?: string;
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
      'Racial and Ethnic Disparities in Estimated Excess Mortality From External Causes in the US, March to December 2020',
    author: 'Chen R, Aschmann HE, Chen YH, Glymour MM, Bibbins-Domingo K, Stokes AC, Kiang MV',
    date: 'July, 2022',
    text: 'COVID-19 has disproportionately affected racial and ethnic minority groups in the US. However, estimating the full effects of the pandemic on health disparities should account for other causes of death, including external causes.2 We estimated racial and ethnic disparities in excess deaths from external causes (homicide, suicide, transportation, and drug overdoses) from March through December 2020.',
    link: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2791682',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/e08e5fca-9de5-4033-6252-cd349b88d900/public',
  },
  {
    title:
      'Excess natural-cause deaths in California by cause and setting: March 2020 through February 2021',
    author:
      'Chen YH, Stokes AC, Aschmann HE, Chen R, DeVost S, Kiang MV, Koliwad S, Riley AR, Glymour MM, Bibbins-Domingo K',
    date: 'July, 2022',
    text: 'Excess mortality has exceeded reported deaths from Covid-19 during the pandemic. This gap may be attributable to deaths that occurred among individuals with undiagnosed Covid-19 infections or indirect consequences of the pandemic response such as interruptions in medical care; distinguishing these possibilities has implications for public health responses.',
    link: 'https://doi.org/10.1093/pnasnexus/pgac079',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/8ee68b7a-1ed5-4d6c-7176-bc3fdf60bd00/public',
  },
  {
    title: 'Missing Americans: Early Death in the United States, 1933-2021',
    author:
      'Bor J, Stokes AC, Raifman J, Venkataramani A, Bassett MT, Himmelstein D, Woolhandler S',
    date: 'June, 2022',
    text: 'We assessed how many U.S. deaths would have been averted each year, 1933-2021, if U.S. age-specific mortality rates had equaled those of other wealthy nations. The annual number of excess deaths in the U.S. increased steadily beginning in the late 1970s, reaching 626,353 in 2019.',
    link: 'https://www.medrxiv.org/content/10.1101/2022.06.29.22277065v1',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/75cdd6c9-3a35-4dd6-c4df-fa9b1e66bc00/public',
  },
  {
    title:
      '“Pandemic of the unvaccinated”? At midlife, white people are less vaccinated but still at less risk of Covid-19 mortality in Minnesota.',
    author: 'Wrigley-Field E, Berry KM, Stokes AC, Leider JP',
    date: 'June, 2022',
    text: 'Recent research underscores the exceptionally young age distribution of Covid-19 deaths in the United States compared with international peers. This brief characterizes how high levels of Covid mortality at midlife ages (45–64) are deeply intertwined with continuing racial inequity in Covid-19 mortality.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8923115/',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/6747f01d-d5ba-4177-24a1-c9538b33a000/public',
  },
  {
    title:
      'The unequal burden of the Covid-19 pandemic: Capturing racial/ethnic disparities in US cause-specific mortality',
    author: 'Luck AN, Preston SH, Elo IT, Stokes AC',
    date: 'June, 2022',
    text: "Despite a growing body of literature focused on racial/ethnic disparities in Covid-19 mortality, few previous studies have examined the pandemic's impact on 2020 cause-specific mortality by race and ethnicity. This paper documents changes in mortality by underlying cause of death and race/ethnicity between 2019 and 2020.",
    link: 'https://doi.org/10.1016/j.ssmph.2021.101012',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/eddb11d1-e140-4437-7874-504616a6dc00/public',
  },
  {
    title:
      'Excess all-cause mortality across counties in the United States, March 2020 to December 2021',
    author:
      'Paglino E, Lundberg DJ, Cho A, Wasserman JA, Raquib R, Luck AN, Hempstead K, Bor J, Elo IT, Preston SH, Stokes AC',
    date: 'May, 2022',
    text: 'Official Covid-19 death tallies have underestimated the mortality impact of the Covid-19 pandemic in the United States. Excess mortality, which compares observed deaths to deaths expected in the absence of the pandemic, is a useful measure for assessing the total effect of the pandemic on mortality levels.',
    link: 'https://www.medrxiv.org/content/10.1101/2022.04.23.22274192v2',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/1b6438a4-0ba4-45e0-71b2-b3506b87b600/public',
  },
  {
    title:
      'Evaluation of Age Patterns of COVID-19 Mortality by Race and Ethnicity From March 2020 to October 2021 in the US',
    author: 'Elo IT, Luck A, Stokes AC, Hempstead K, Xie W, Preston SH',
    date: 'May, 2022',
    text: 'The disproportionate burden of COVID-19 mortality among older adults during the early stages of the pandemic is well documented.However, little is known about associations between subsequent developments (eg, vaccine availability) and the age pattern of mortality. In this study, we examined changes in age-specific COVID-19 mortality rates by sex and by race and ethnicity.',
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2792375',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/22a937db-55bf-42c7-7324-fe30de848900/public',
  },
  {
    title:
      'COVID-19 mortality among working-age Americans in 46 states, by industry and occupation',
    author:
      'Chen YH, Chen R, Charpignon ML, Kiang MV, Riley AR, Glymour MM, Bibbins-Domingo K, Stokes AC',
    date: 'April, 2022',
    text: 'A small body of epidemiological research suggests that working in an essential sector is a risk factor for SARS-CoV-2 infection or subsequent disease or mortality. However, there is limited evidence to date on the US, or on how the risks associated with essential work differ across demographic subgroups defined by age, sex, and race/ethnicity.',
    link: 'https://www.medrxiv.org/content/10.1101/2022.03.29.22273085v2',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/6d6b5e96-2f85-491a-6b8d-3094f53aa200/public',
  },
  {
    title:
      'COVID-19 mortality and excess mortality among working-age Californians, by occupational sector: March 2020 through November 2021',
    author:
      'Chen YH, Riley AR, Duchowny KA, Aschmann HE, Chen R, Kiang MV, Mooney A, Stokes AC, Glymour MM, Bibbins-Domingo K',
    date: 'February, 2022',
    text: 'During the first year of the pandemic, essential workers faced higher rates of SARS-CoV-2 infection and COVID-19 mortality than non-essential workers. It is unknown whether disparities in pandemic-related mortality across occupational sectors have continued to occur, amidst SARS-CoV-2 variants and vaccine availability.',
    link: 'https://www.medrxiv.org/content/10.1101/2022.02.14.22270958v1',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/083c442b-6b15-463a-4aab-8d9f07ebc300/public',
  },
  {
    title:
      'County-level estimates of excess mortality associated with COVID-19 in the United States',
    author: 'Ackley CA, Lundberg DJ, Ma L, Elo IT, Preston SH, Stokes AC',
    date: 'January, 2022',
    text: 'The COVID-19 pandemic in the U.S. has been largely monitored using death certificates containing reference to COVID-19. However, prior analyses reveal that a significant percentage of excess deaths associated with the pandemic were not directly assigned to COVID-19.',
    link: 'https://doi.org/10.1016/j.ssmph.2021.101021',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/474e5b65-b180-4528-f6bf-5d275f42ce00/public',
  },
  {
    title:
      'Association of Health Care Factors With Excess Deaths Not Assigned to COVID-19 in the US',
    author: 'Stokes AC, Lundberg DJ, Bor J, Elo IT, Hempstead K, Preston SH',
    date: 'September, 2021',
    text: 'Approximately 20% of excess deaths in the US in 2020 were not reflected in COVID-19 death counts. These excess deaths included deaths caused by COVID-19 but not assigned to it as well as indirect deaths from other causes associated with delays in health care and the social and economic consequences of the pandemic.',
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2783986',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/a15e7546-f534-4b8c-d4e9-c776b0780500/public',
  },
  {
    title:
      'Excess Deaths During the COVID-19 Pandemic: Implications for US Death Investigation Systems',
    author: 'Stokes AC, Lundberg DJ, Bor J, Bibbins-Domingo K',
    date: 'April, 2021',
    text: 'Quality death investigation is a critical piece of an effective public health system. When a person dies, a coroner, medical examiner, or health professional with knowledge of the decedent’s medical conditions fills out the death certificate. Accurate cause-of-death ascertainment has broad implications for understanding the burden of disease throughout the United States.',
    link: 'https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2021.306331',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/8e08b40d-b92b-495f-c81c-9f6f7146d000/public',
  },
  {
    title: 'COVID-19 and excess mortality in the United States: A county-level analysis',
    author: 'Stokes AC, Lundberg DJ, Elo IT, Hempstead K, Bor J, Preston SH',
    date: 'May, 2021',
    text: 'Coronavirus Disease 2019 (COVID-19) excess deaths refer to increases in mortality over what would normally have been expected in the absence of the COVID-19 pandemic. Several prior studies have calculated excess deaths in the United States but were limited to the national or state level, precluding an examination of area-level variation in excess mortality and excess deaths not assigned to COVID-19.',
    link: 'https://doi.org/10.1371/journal.pmed.1003571',
    imgSrc:
      'https://imagedelivery.net/TAwaCWi-w4YvJ7p6xuj9Jg/c7112b68-5102-45b4-90ad-f48d83556a00/public',
  },
];

export const text_content =
  'Our team has developed expertise in modeling excess mortality at the county-level during the Covid-19 pandemic to inform communities about the true risk of the pandemic and identify counties where many Covid-19 deaths have potentially gone uncounted.';
