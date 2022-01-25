import Link from 'next/link';

const PivotMenu =() => {
    return(
        
      <div className="pivot_container transparent">  <br/>
        <Link href="/"><a className="pivot_heading" style={{marginLeft: "5vw"}}><img src="neonLogo.png" style={{width: "40px"}} /></a></Link>  
        <Link href="https://github.com/shivendrasaurav"><a target="blank" className="pivot_button right" style={{marginRight: "5vw"}}><i className='fab fa-github'></i></a></Link>
        <Link href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191"><a target="blank" className="pivot_button right"><i className='fab fa-linkedin'></i></a></Link>
        <Link href="mailto:shivendrasaurav@gmail.com"><a target="blank" className="pivot_button right"><i className='fas fa-envelope'></i></a></Link>
        <Link href="https://www.youtube.com/c/thecodedrop"><a target="blank" className="pivot_button right"><i className='fab fa-youtube'></i></a></Link>
        <Link href="/resume"><a className="pivot_button right small0">Resume</a></Link>
        <Link href="#projects"><a className="pivot_button right small0">Projects</a></Link>
        <Link href="#about"><a className="pivot_button right small0">About</a></Link>
      </div> 

    );

}

export default PivotMenu;