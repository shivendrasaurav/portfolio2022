import Head from 'next/head';
import Projects from './templates/ProjectsComp';
import HomeBanner from './templates/HomeBanner';
import AboutBanner from './templates/AboutBanner';
import { useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import projects from './templates/data';


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
        showhideFDWEB();
      }
      if (document.body.scrollTop > (140*vh)/100 || document.documentElement.scrollTop > (140*vh)/100) {
        showhideCORONA();
      }
      if (document.body.scrollTop > (210*vh)/100 || document.documentElement.scrollTop > (210*vh)/100) {
        showhideRHAPP();
      }
      if (document.body.scrollTop > (280*vh)/100 || document.documentElement.scrollTop > (280*vh)/100) {
        showhideIJLE();
      }
      if (document.body.scrollTop > (350*vh)/100 || document.documentElement.scrollTop > (350*vh)/100) {
        showhideTCD();
      }
      if (document.body.scrollTop > (420*vh)/100 || document.documentElement.scrollTop > (420*vh)/100) {
        showhideHISAB();
      }
      if (document.body.scrollTop > (490*vh)/100 || document.documentElement.scrollTop > (490*vh)/100) {
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

  const showhideFDWEB = () => {
    document.getElementById('projectsFDWEB').classList.add('slidein');
    document.getElementById('projectsFDWEB').classList.remove('slideout');
  }
  const showhideCORONA = () => {
    document.getElementById('projectsCORONA').classList.add('slideininverse');
    document.getElementById('projectsCORONA').classList.remove('slideoutinverse');
  }
  const showhideRHAPP = () => {
    document.getElementById('projectsRHAPP').classList.add('slidein');
    document.getElementById('projectsRHAPP').classList.remove('slideout');
  }

  const showhideIJLE = () => {
    document.getElementById('projectsIJLE').classList.add('slideininverse');
    document.getElementById('projectsIJLE').classList.remove('slideoutinverse');
  }
  const showhideTCD = () => {
    document.getElementById('projectsTCD').classList.add('slidein');
    document.getElementById('projectsTCD').classList.remove('slideout');
  }
  const showhideHISAB = () => {
    document.getElementById('projectsHISAB').classList.add('slideininverse');
    document.getElementById('projectsHISAB').classList.remove('slideoutinverse');
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

        
        <div id='projectsFDWEB' className='slideout'>
          <Projects name={projects["FDWEB"][0]} desc={projects["FDWEB"][1]} link={projects["FDWEB"][2]} cover={projects["FDWEB"][3]} fcolor="#fafafa"/> 
        </div>
        
        <div id='projectsCORONA' className='slideoutinverse'>
          <Projects name={projects["CORONA"][0]} desc={projects["CORONA"][1]} link={projects["CORONA"][2]} cover={projects["CORONA"][3]} fcolor="#1e1e1e"/> 
        </div>
        
        <div id='projectsRHAPP' className='slideout'>
          <Projects name={projects["REVAHACKAPP"][0]} desc={projects["REVAHACKAPP"][1]} link={projects["REVAHACKAPP"][2]} cover={projects["REVAHACKAPP"][3]} fcolor="#fafafa"/> 
        </div>

        <div id='projectsIJLE' className='slideoutinverse'>
          <Projects name={projects["IJLE"][0]} desc={projects["IJLE"][1]} link={projects["IJLE"][2]} cover={projects["IJLE"][3]} fcolor="#1e1e1e"/> 
        </div>

        <div id='projectsTCD' className='slideout'>
          <Projects name={projects["TCDBOX"][0]} desc={projects["TCDBOX"][1]} link={projects["TCDBOX"][2]} cover={projects["TCDBOX"][3]} fcolor="#fafafa"/> 
        </div>

        <div id='projectsHISAB' className='slideoutinverse'>
          <Projects name={projects["HISABKITAB"][0]} desc={projects["HISABKITAB"][1]} link={projects["HISABKITAB"][2]} cover={projects["HISABKITAB"][3]}  fcolor="#1e1e1e"/> 
        </div>
        <br/><br/><br/><br/>
      </div>

      <div id='about' className='fadeoutinverse'>
        <AboutBanner/>
      </div>

      <div id="cursor" className="cursor"></div>

    </div>
  )
}


export default Home;