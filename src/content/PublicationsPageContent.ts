import { stokes } from '../assets/assets.index';

export type PubCardProps = {
  title: string;
  date: string;
  text: string;
  link: string;
  imgSrc: string;
};

export const content: PubCardProps[] = [
  {
    title: 'County-level estimates of excess mortality',
    date: 'March 28, 2022',
    text: 'Our team is dedicated to investigating and evaluating discrepencies in COVID-19 mortality.',
    link: '',
    imgSrc: stokes,
  },
  {
    title: 'COVID-19 and excess mortality in the United States: A county-level analysis',
    date: 'March 28, 2022',
    text: 'Our team is dedicated to investigating and evaluating discrepencies in COVID-19 mortality.',
    link: '',
    imgSrc: stokes,
  },
  {
    title:
      'Association of Health Care Factors With Excess Deaths Not Assigned to COVID-19 in the U.S.',
    date: 'March 28, 2022',
    text: 'Our team is dedicated to investigating and evaluating discrepencies in COVID-19 mortality.',
    link: '',
    imgSrc: stokes,
  },
];
