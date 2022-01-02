import PivotMenu from './PivotMenu';

const HomeBanner =() => {

  const skewBannerBG = (e) =>{
    let skew = document.getElementById('skew');
	
    skew.style.setProperty('--x',(-e.clientX/720)+'deg');
    skew.style.setProperty('--y',(-e.clientY/720)+'deg');

  }

  return(
        
      <div className="homeBanner" onMouseMove={skewBannerBG}> 

        <PivotMenu />

        <div className="homeBanner_bg" id="skew">
          <img src="confetti.svg" style={{transform: "rotate(180deg)", filter: "invert(100%) saturate(225%)", width:  "94%"}}/>
        </div>
        <div className="homeBanner_fg">
          <div className="homeBanner_fg_inner">

            <span className="small0"><br/><br/><br/><br/></span>
            <br/><br/>

            <h1 className="name small0">Shivendra Saurav</h1>
            <h1 className="namePhone medium0 large0">Shivendra Saurav</h1>
            <div className="tags">
              <span className="tag">Developer</span>
              <span className="tag">Content Creator</span>
              <span className="tag">eSports Player</span>
            </div>
          </div>
        </div>

      </div>

    );

}

export default HomeBanner;