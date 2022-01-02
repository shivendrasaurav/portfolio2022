import Link from 'next/link';

const PivotMenu =() => {
    return(
        
      <div className="pivot_container transparent">  <br/>
        <Link href="/"><a className="pivot_heading" style={{marginLeft: "5vw"}}><img src="neonLogo.png" style={{width: "40px"}} /></a></Link>  
        <Link href="https://github.com/shivendrasaurav"><a target="blank" className="pivot_button right" style={{marginRight: "5vw"}}><img src="/socials/github.png" /></a></Link>
        <Link href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191"><a target="blank" className="pivot_button right"><img src="/socials/linkedin.png" /></a></Link>
        <Link href="mailto:shivendrasaurav@gmail.com"><a target="blank" className="pivot_button right"><img src="/socials/mail.png" /></a></Link>
        <Link href="https://www.youtube.com/c/thecodedrop"><a target="blank" className="pivot_button right"><img src="/socials/youtube.png" /></a></Link>
        <Link href="https://shivendrasaurav.github.io/resume"><a target="blank" className="pivot_button right">Resume</a></Link>
        <Link href="#projects"><a className="pivot_button right">Projects</a></Link>
        <Link href="#about"><a className="pivot_button right">About</a></Link>
      </div> 

    );

}

export default PivotMenu;