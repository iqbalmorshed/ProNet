export const paths = {
  HOME: '/',
  STATISTICS: '/statistics',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  ACTIVATION: '/activate'
}
const sections = [
  { title: 'Home', path: paths.HOME },
  { title: 'My Profile', path: paths.PROFILE },
  //{ title: 'My Posts', path: '#' },
  { title: 'My Statistics', path: paths.STATISTICS },
  { title: 'Settings', path: paths.SETTINGS },
  { title: 'About', path: '#' },

  //{ title: 'Favorite Posts', path: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
];

export const layoutInfo = {

  header: {
    title: "ProNet",
    sections: sections,
  },

  footer: {
    title: "ProNet is designed for productivity",
    description: "Thanks for visiting ProNet"
  }


}