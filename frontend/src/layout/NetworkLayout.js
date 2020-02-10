import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
//import GitHubIcon from '@material-ui/icons/GitHub';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import TwitterIcon from '@material-ui/icons/Twitter';


import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
//import Main from './Main';
import Footer from './Footer';



const mainFeaturedPost = {
  title: 'The social network powered by Django and React',
  description:
    "The efficiency of Django and the beuty of React can give rise to new era of web development",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  //linkText: 'Continue reading…',
};





function NetworkLayout(props) {

  const { header, footer } = props.layoutInfo

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={header.title} sections={header.sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
            {props.children}
        </main>
      </Container>
      <Footer title={footer.title} description={footer.description} />
    </React.Fragment>
  );
}

export default NetworkLayout