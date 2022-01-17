import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import WebsitesProjects from './templates/WebsitesProjects';
import AppProjects from './templates/AppProjects';
import ToolsProjects from './templates/ToolsProjects';
import HomeBanner from './templates/HomeBanner';
import AboutBanner from './templates/AboutBanner';
import { useEffect } from 'react';

const Home = () => {
  
  useEffect(() => {
    //delay till the page is loaded

    setTimeout(() => {
      fadeinhome();
    }, 1000);

    //run a function when window is scrolled by n pixels
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var vh = window.screen.height;

      if (document.body.scrollTop > (70*vh)/100 || document.documentElement.scrollTop > (70*vh)/100) {
        showhideapps();
      }
      if (document.body.scrollTop > (140*vh)/100 || document.documentElement.scrollTop > (140*vh)/100) {
        showhidewebsites();
      }
      if (document.body.scrollTop > (210*vh)/100 || document.documentElement.scrollTop > (210*vh)/100) {
        showhidetools();
      }
      if (document.body.scrollTop > (280*vh)/100 || document.documentElement.scrollTop > (280*vh)/100) {
        fadeinabout();
      }

    }
  }, []);

  var projScrollCnt=0;

  const fadeinhome = () => {
    //add class to home banner
    document.getElementById('home').classList.add('fadein');
    document.getElementById('home').classList.remove('fadeout');
  }
  const fadeinabout = () => {
    //add class to about banner
    document.getElementById('about').classList.add('fadeininverse');
    document.getElementById('about').classList.remove('fadeoutinverse');
  }

  const showhideapps = () => {
    document.getElementById('projectsApps').classList.add('slidein');
    document.getElementById('projectsApps').classList.remove('slideout');
  }
  const showhidewebsites = () => {
    document.getElementById('projectsWeb').classList.add('slideininverse');
    document.getElementById('projectsWeb').classList.remove('slideoutinverse');
  }
  const showhidetools = () => {
    document.getElementById('projectsTools').classList.add('slidein');
    document.getElementById('projectsTools').classList.remove('slideout');
  }

  return (
    <div>
      <Head>
        <title>Shivendra Saurav - Portfolio</title>
        <meta name="description" content="I am a full stack developer with a passion for creating beautiful and intuitive user interfaces. I have a strong background in web development and have worked on a wide range of projects. I am currently working as Senior Software Engineer at Larson and Tourbo Infotech." />
        <link rel="icon" href="/neonLogo.png" />
      </Head>
      <div id="top"></div>

      <div id='home' className='fadeout'>
        <HomeBanner/>
      </div>
      

      <div className="projectsBanner" id="projects">
        <br/><br/>
        <h1 className="name">Projects</h1>
        <br/><br/>

        
        <div id='projectsApps' className='slideout'>
          <AppProjects/>
        </div>

        <div id='projectsWeb' className='slideoutinverse'>
          <WebsitesProjects />
        </div>

        <div id='projectsTools' className='slideout'>
          <ToolsProjects />
        </div>


      </div>

      <div id='about' className='fadeoutinverse'>
        <AboutBanner/>
      </div>

      <div id="cursor" className="cursor"></div>

    </div>
  )
}


export default Home;