import { elif, mikas, rafeya, steele, stokes, syl, wubin } from '../assets/assets.index';

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
    subtitle: 'Postdoctoral Associate',
    imgSrc: wubin,
  },
];
