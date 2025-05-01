export interface CareerContent {
  term: string;
  role: string;
  company: string;
  desc: string;
};

export interface CheckPoint {
  title: string;
  summary: string;
}

export type CareerItem = CareerContent | CheckPoint;

const CAREER_10TH =
  "I am developing a web application that utilizes generative AI.";

const CAREER_9TH =
  "I'm involved in the development, maintenance, and operation of the admin dashboard, as well as product development.";

const CAREER_8TH =
  "I was involved in the design and development of software to solve problems faced by client companies.";

const CAREER_7TH =
  "I was involved in the operation of a web media platform, primarily handling coding and design tasks.";

const CAREER_6TH =
  "I was primarily responsible for designing and coding an e-commerce website. In addition, I also designed banner images related to it. Furthermore, I created applications for process improvement using Google App Script.";

const CAREER_5TH =
  "I was involved in marketing using email campaigns, designing banner images, and creating featured content.";

const CAREER_4TH =
  "I handled both the design and coding of landing pages and also engaged in sales and social media marketing, among other tasks.";

const CAREER_3TH =
  "I was responsible for designing the UI/UX for corporate websites and iOS applications.";

const CAREER_2TH =
  "I was in charge of social media marketing and was involved in acquiring new influencers through sales efforts and supporting PR activities.";

const CAREER_1TH =
  "I was involved in editing video educational materials.";

const UNIVERSITY =
  "I was studying topics related to the information society and programming.";

export const CAREER_LIST: CareerItem[] = [
  { title: '2025', summary: 'Started working as AI engineer.' },
  { term: 'Jan 2025 - Recent', role: 'AI Engineer', company: 'A company that provides consulting for implementing generative AI applications.', desc: CAREER_10TH },
  { title: '2024', summary: 'Full-stack engineer' },
  { term: 'Sep 2024 - Recent', role: 'Software Engineer', company: 'A company that operates a knowledge-sharing platform.', desc: CAREER_9TH },
  { term: 'Apr 2023 - Aug 2024', role: 'Software Engineer', company: 'IT-Consulting company', desc: CAREER_8TH },
  { title: '2023', summary: 'Graduate from university. Started working as a full-time employee.' },
  { term: 'Apr 2019 - Mar 2023', role: 'Graduate from university', company: '', desc: UNIVERSITY },
  { title: '2022', summary: 'Started working as a front-end engineer and web designer.' },
  { term: 'May 2022 - Mar 2023', role: 'Front-end engineer, Web designer', company: 'Web media company', desc: CAREER_7TH },
  { term: 'May 2022 - Feb 2023', role: 'Front-end engineer, Web designer', company: 'Web design company', desc: CAREER_6TH },
  { term: 'Jan 2022 - Apr 2022', role: 'Marketer, Customer Success', company: 'Startup online platform company', desc: CAREER_5TH },
  { title: '2021', summary: 'Experience internships in a variety of occupations.' },
  { term: 'Dec 2021 - Apr 2022', role: 'Front-end engineer, Social media marketer, Sales', company: 'Startup OTA company', desc: CAREER_4TH },
  { term: 'Aug 2021 - Mar 2022', role: 'Web designer', company: 'Startup web media company', desc: CAREER_3TH },
  { term: 'Jun 2021 - Oct 2021', role: 'Social media marketer', company: 'Production company', desc: CAREER_2TH },
  { title: '2020', summary: 'Started creative work.' },
  { term: 'Sep 2020 - Nov 2020', role: 'Videographer', company: 'Startup video production company', desc: CAREER_1TH }
];

