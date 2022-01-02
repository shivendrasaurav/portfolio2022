import Link from 'next/link';

const AboutBanner =() => {

  const skewBannerBG = (e) =>{
    let skew = document.getElementById('');
	
    skew.style.setProperty('--x',(e.clientX/540)+'deg');
    skew.style.setProperty('--y',(e.clientY/540)+'deg');

  }

  return(
        
      <div className="aboutBanner" id="about" > 
        <div className="column lg-6 md-6 sm-9">
          <div className="aboutBanner_content">
            <h1 className="name">About Me</h1>
            <p className="aboutBanner_content_text">
              I am a full stack developer with a passion for creating beautiful and intuitive user interfaces. 
              I have a strong background in web development and have worked on a wide range of projects. 
              I am currently working as Senior Software Engineer at Larson and Tourbo Infotech.
            </p>
            <br/><br/>
            <div className='aboutLinks'>
              <Link href="https://github.com/shivendrasaurav"><a target="blank" className="pivot_button"><img className="icon" src="/socials/github.png" /></a></Link>
              <Link href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191"><a target="blank" className="pivot_button"><img className="icon" src="/socials/linkedin.png" /></a></Link>
              <Link href="mailto:shivendrasaurav@gmail.com"><a target="blank" className="pivot_button"><img className="icon" src="/socials/mail.png" /></a></Link>
              <Link href="https://www.youtube.com/c/thecodedrop"><a target="blank" className="pivot_button"><img className="icon" src="/socials/youtube.png" /></a></Link>
            </div>
            <br/><br/>
          </div>
        </div>

        <div className="column lg-3 md-3 sm-9">
          <div className="aboutBanner_image">
            <img src="about.jpg" alt="profile" id="aboutImg"/>
          </div>
        </div>

        <a href='#top' className='center b2top'>
          <i className="ms-Icon ms-Icon--ArrowUp" aria-hidden="true"></i>
        </a>

      </div>

    );

}

export default AboutBanner;