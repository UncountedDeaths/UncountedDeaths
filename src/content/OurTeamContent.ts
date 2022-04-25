import {
  elif,
  mikas,
  placeholder,
  rafeya,
  steele,
  stokes,
  syl,
  wubin,
} from '../assets/assets.index';

export interface MemberCardProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}

export const content: MemberCardProps[] = [
  {
    title: 'Andrew Stokes, PhD',
    subtitle: 'Assistant Professor in Global Health at BU',
    imgSrc: stokes,
  },
  {
    title: 'Steele Myrick',
    subtitle: "Biostatistics Master's Student",
    imgSrc: steele,
  },
  {
    title: 'Sylvia Lutze',
    subtitle: "Applied Biostatistics Master's Student",
    imgSrc: syl,
  },
  {
    title: 'Rafeya Raquib',
    subtitle: "Applied Biostatistics Master's Student",
    imgSrc: rafeya,
  },
  {
    title: 'Elif Coskun',
    subtitle: "Master's in Public Health Student",
    imgSrc: elif,
  },
  {
    title: 'Mikas Hansen, PhD',
    subtitle: 'MS/MPH Student in Medical Sciences and Global Health',
    imgSrc: mikas,
  },
  {
    title: 'Wubin Xie',
    subtitle:
      'Senior Research Scientist, Department of Global Health, Boston University School of Public Health',
    imgSrc: wubin,
  },
  {
    title: 'Elaine Nsoesie',
    subtitle:
      'Assistant Professor, Department of Global Health, Boston University School of Public Health',
    imgSrc: placeholder,
  },
  {
    title: 'Dielle Lundberg',
    subtitle: 'Research Fellow in Global Health',
    imgSrc: placeholder,
  },
];

export const collaboratorContent: MemberCardProps[] = [
  {
    title: 'Irma Elo',
    subtitle: 'Department of Sociology and Population Studies Center, University of Pennsylvania',
    imgSrc: placeholder,
  },
  {
    title: 'Anneliese Luck',
    subtitle: 'Department of Sociology and Population Studies Center, University of Pennsylvania',
    imgSrc: placeholder,
  },
  {
    title: 'Eugenio Paglino',
    subtitle: 'Department of Sociology and Population Studies Center, University of Pennsylvania',
    imgSrc: placeholder,
  },
  {
    title: 'Samuel Preston',
    subtitle: 'Department of Sociology and Population Studies Center, University of Pennsylvania',
    imgSrc: placeholder,
  },
];

export const mediaContent: MemberCardProps[] = [
  {
    title: 'Derick Kravitz',
    subtitle:
      "Project Lead, Instructor for the Columbia Journalism School's Stabile Center for Investigative Journalism",
    imgSrc: placeholder,
  },
  {
    title: 'Dillon Bergin',
    subtitle: 'Senior Journalism Fellow',
    imgSrc: placeholder,
  },
  {
    title: 'Betsy Ladyzhets',
    subtitle: 'Senior Journalism Fellow',
    imgSrc: placeholder,
  },
];

export const text_content =
  'Our team is dedicated to investigating and evaluating discrepencies in COVID-19 mortality throughout the US. We are an interdisciplinary team of public health researchers, demographers, and statisticians.';
