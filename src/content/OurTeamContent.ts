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
  kravitz,
  bergin,
  ladyzhets,
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
      'Research Fellow in the Department of Global Health at Boston University School of Public Health and Creative Design Manager of the Vital Statistics Integrity Project',
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

export const mediaContent: MemberCardProps[] = [
  {
    title: 'Derick Kravitz',
    subtitle:
      "Project Lead and Instructor for the Columbia Journalism School's Stabile Center for Investigative Journalism",
    imgSrc: kravitz,
  },
  {
    title: 'Dillon Bergin',
    subtitle: 'Senior Journalism Fellow at MuckRock and the Brown Institute for Media Innovation',
    imgSrc: bergin,
  },
  {
    title: 'Betsy Ladyzhets',
    subtitle: 'Senior Journalism Fellow at MuckRock and the Brown Institute for Media Innovation',
    imgSrc: ladyzhets,
  },
];

export const designContent: MemberCardProps[] = [
  {
    title: 'Ian Saucy',
    subtitle: 'Software Engineering Solutions Engineer at Boston University Spark!',
    imgSrc: saucy,
  },
  {
    title: 'Erica Augustine',
    subtitle:
      'Project Manager of the Vital Statistics Integrity Project and Communications and Outreach Associate at Boston University Center for Emerging Infectious Diseases Policy & Research',
    imgSrc: augustine,
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

export const text_content =
  "This project is made possible through a collaboration between researchers at the Boston University School of Public Health and the University of Pennsylvania with support from the Boston University Center for Emerging Infectious Disease Policy & Research (CEID), BU Spark!, the Robert Wood Johnson Foundation, the W. K. Kellogg Foundation, and the National Institute on Aging. The views expressed on this website are those of the lab's investigators and do not necessarily reflect the views of the research sponsors.";
