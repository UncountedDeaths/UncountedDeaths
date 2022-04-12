export interface IFAQ {
  content: string;
  title: string;
}

export const FAQ_data: IFAQ[] = [
  {
    title: 'What is excess mortality?',
    content:
      'Excess mortality refers to differences in mortality relative to what would have been expected in the absense of the COVID-19 pandemic. These estimates provide a useful measure of the total mortality burden associated with COVID-19.',
  },
  {
    title: 'What are the assigned and unassigned death rates?',
    content:
      'When any individual dies, the reason is recorded on their death certificate. We would expect that most of the excess deaths are due to the pandemic, and so are recorded on the death certificate as a Covid death. This metric defines of the the total excess deaths, how many are officially recorded as being from Covid.',
  },
  {
    title: 'What are fitted and total death rates?',
    content:
      'Using 10 years of data, our team created an average death rate by county over this time, and extending it into 2020 and 2021 as if the pandemic never happened. These "fitted" values are shown in blue. The red shows the actual values both before the pandemic, and into 2020 and 2021.',
  },
  {
    title: 'What is proportion unassigned to COVID-19?',
    content:
      'The proportion unassigned to COVID-19 is the percent of excess deaths without COVID-19 included on their death certificates. Excess deaths not assigned to COVID-19 could represent COVID-19 deaths that were misclassified to other causes or deaths that were indirectly related to the pandemic.',
  },
  {
    title: 'What is the death investigation system?',
    content:
      'A death investigation system refers to the system used for assigning cause of death on the death certificates. In the US, this system varies from place to place, and sometimes involves a medical examiner or a coroner.',
  },
];

export const text_content =
  'This website features tools for identifying both patterns of county excess mortality throughout the United States and potential underreported COVID-19 deaths';
