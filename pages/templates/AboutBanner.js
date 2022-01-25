import Link from 'next/link';

const AboutBanner =() => {

  const skewAboutImg = (e) =>{
    let skew = document.getElementById('aboutImg');
	
    skew.style.setProperty('--x',(e.clientX/540)+'deg');
    skew.style.setProperty('--y',(e.clientY/540)+'deg');

    skew.style.setProperty('--a',(e.clientX/128)+'px');
    skew.style.setProperty('--b',(e.clientY/32)+'px');
  }

  return(
        
      <div className="aboutBanner" id="about" onMouseMove={skewAboutImg} style={{position: "relative", top: "-8vh"}}> 
        <div className="column lg-6 md-6 sm-9">
          <div className="aboutBanner_content" style={{position: "relative", top: "12vh"}} >
            <h1 className="name">About Me</h1>
            <p className="aboutBanner_content_text">
              I am a full stack developer with a passion for creating beautiful and intuitive user interfaces. 
              I have a strong background in web development and have worked on a wide range of projects. 
              I am currently working as Senior Software Engineer at Larson and Tourbo Infotech.
            </p>
            <br/><br/>
            <div className='aboutLinks'>
              <Link href="https://github.com/shivendrasaurav"><a target="blank" className="pivot_button"><i className='fab fa-github'></i></a></Link>
              <Link href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191"><a target="blank" className="pivot_button"><i className='fab fa-linkedin'></i></a></Link>
              <Link href="mailto:shivendrasaurav@gmail.com"><a target="blank" className="pivot_button"><i className='fas fa-envelope'></i></a></Link>
              <Link href="https://www.youtube.com/c/thecodedrop"><a target="blank" className="pivot_button"><i className='fab fa-youtube'></i></a></Link>
              <Link href="/resume"><a target="blank" className="pivot_button"><i className='fas fa-file'></i></a></Link>
              <br/><br/>
            </div>
            <br/><br/>
          </div>
        </div>

        <div className="column lg-3 md-3 sm-9">
          <div className="aboutBanner_image">
            <img src="aboutbg.jpg" alt="profile" style={{position: "relative", top: "8vh"}}/>
            <img src="aboutbg.png" alt="profile" id="aboutImg" style={{position: "relative", marginTop: "-57vh"}}/>
            <img src="about.png" alt="profile" style={{position: "relative", marginTop: "-60vh"}} />
          </div>
        </div>

        <br/><br/>
        <a href='#top' className='b2top'>
          <i className="ms-Icon ms-Icon--ChevronUp icon-large" aria-hidden="true"></i>
        </a>

      </div>

    );

}

export default AboutBanner;