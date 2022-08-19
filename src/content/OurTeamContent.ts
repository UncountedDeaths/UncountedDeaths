import {
  elif,
  lundberg,
  mikas,
  nsoesie,
  rafeya,
  steele,
  stokes,
  syl,
  wubin,
  zhou,
  elo,
  preston,
  paglino,
  luck,
  bayly,
  saucy,
  augustine,
  aigerim,
  matthew,
  minkyo,
} from '../assets/assets.index';

export interface MemberCardProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}

export const content: MemberCardProps[] = [
  {
    title: 'Andrew C. Stokes, PhD',
    subtitle:
      'Assistant Professor in the Department of Global Health at Boston University School of Public Health',
    imgSrc: stokes,
  },
  {
    title: 'Dielle Lundberg, MPH',
    subtitle:
      'Research Fellow in the Department of Global Health at Boston University School of Public Health and Creative Design Manager of the Vital Statistics Lab',
    imgSrc: lundberg,
  },
  {
    title: 'Elaine Nsoesie, PhD',
    subtitle:
      'Assistant Professor in the Department of Global Health at Boston University School of Public Health and Assistant Director of Research at Boston University Center for Antiracist Research',
    imgSrc: nsoesie,
  },
  {
    title: 'Rafeya Raquib, MS',
    subtitle:
      'Research Fellow in the Department of Global Health at Boston University School of Public Health',
    imgSrc: rafeya,
  },
  {
    title: 'Wubin Xie, PhD',
    subtitle:
      'Senior Research Scientist in the Department of Global Health at Boston University School of Public Health',
    imgSrc: wubin,
  },
  {
    title: 'Zhenwei Zhou, PhD',
    subtitle:
      'Senior Research Scientist in the Department of Global Health at Boston University School of Public Health',
    imgSrc: zhou,
  },
];

export const collaboratorContent: MemberCardProps[] = [
  {
    title: 'Irma Elo, PhD',
    subtitle:
      'Professor and Chair in the Department of Sociology and Population Studies Center at the University of Pennsylvania',
    imgSrc: elo,
  },
  {
    title: 'Anneliese Luck, MPP',
    subtitle:
      'Doctoral Student in the Department of Sociology and Population Studies Center at the University of Pennsylvania',
    imgSrc: luck,
  },
  {
    title: 'Eugenio Paglino, MSc',
    subtitle:
      'Doctoral Student in the Department of Sociology and Population Studies Center at the University of Pennsylvania',
    imgSrc: paglino,
  },
  {
    title: 'Samuel H. Preston, PhD',
    subtitle:
      'Professor in the Department of Sociology and Population Studies Center at the University of Pennsylvania',
    imgSrc: preston,
  },
];

export const designContent: MemberCardProps[] = [
  {
    title: 'Ian Saucy',
    subtitle: 'Software Engineering Solutions Engineer at Boston University Spark!',
    imgSrc: saucy,
  },
  {
    title: 'Minkyo Seo',
    subtitle: 'Undergraduate Intern at Boston University Spark!',
    imgSrc: minkyo,
  },
  {
    title: 'Aigerim Dussikenova',
    subtitle: 'Graduate Intern at Boston University Spark!',
    imgSrc: aigerim,
  },
  {
    title: 'Henry Bayly',
    subtitle: 'Doctoral Student in Biostatistics at Boston University School of Public Health',
    imgSrc: bayly,
  },
  {
    title: 'Matthew Henriksen',
    subtitle: 'Undergraduate Intern at Boston University Spark!',
    imgSrc: matthew,
  },
];

export const alumniContent: MemberCardProps[] = [
  {
    title: 'Mikas Hansen, PhD',
    subtitle:
      'MS/MPH Student in Medical Sciences and Global Health at Boston University School of Public Health',
    imgSrc: mikas,
  },
  {
    title: 'Sylvia Lutze',
    subtitle: "Applied Biostatistics Master's Student at Boston University School of Public Health",
    imgSrc: syl,
  },
  {
    title: 'Elif Coskun',
    subtitle: 'MPH Student at Boston University School of Public Health',
    imgSrc: elif,
  },
  {
    title: 'Steele Myrick',
    subtitle: "Biostatistics Master's Student at Boston University School of Public Health",
    imgSrc: steele,
  },
];

export const text_content =
  'This project was made possible through a collaboration between researchers at the Boston University School of Public Health and the University of Pennsylvania with support from the Boston University Center for Emerging Infectious Disease Policy & Research (CEID), BU Spark!, the Robert Wood Johnson Foundation, and the W. K. Kellogg Foundation.';
