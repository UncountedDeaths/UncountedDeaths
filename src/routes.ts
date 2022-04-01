//All possible routes for the application. Modification here will have a global affect

export const InternalRoutes = {
  HOME: { path: '/', key: 1 },
  DATA: { path: '/data', key: 2 },
  SUPPORT: { path: '/support', key: 3 },
  PARTNERS: { path: '/partners', key: 4 },
  ABOUT: { path: '/about', key: 5 },
  TRACKER: { path: '/tracker', key: 6 },
  FAQ: { path: '/faq', key: 7 },
  PUBLICATIONS: { path: '/publications', key: 8 },
  MEDIA: { path: '/media', key: 9 },
  TEAM: { path: '/team', key: 10 },
} as const;

export const ExternalRoutes = {
  GITHUB: '/redirect/github',
  DEVPOST: '/redirect/devpost',
  EMAILUS: '/redirect/emailus',
} as const;
