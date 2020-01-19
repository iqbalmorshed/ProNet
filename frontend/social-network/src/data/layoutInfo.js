export const paths = {
  HOME: '/',
  STATISTICS: '/statistics'
}
const sections = [
  { title: 'Home', path: paths.HOME },
  { title: 'My Posts', path: '#' },
  { title: 'Favorite Posts', path: '#' },
  { title: 'Statistics', path: paths.STATISTICS },
  { title: 'Profile', path: '#' },
  { title: 'About', path: '#' },
  { title: 'Settings', path: '#' },
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