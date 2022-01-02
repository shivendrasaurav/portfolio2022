import project from './data';

const AppProjects = () => {
  

    var webSiteName = (project["CORONA"][0]);
    var webSiteDesc = (project["CORONA"][1]);
    var webSiteLink = (project["CORONA"][2]);
    var webSiteCover = (project["CORONA"][3]);

    const setData6 = () => {
      document.getElementById("name1").style.color = "black";
      document.getElementById("desc1").style.color = "black";
      document.getElementById("name1").innerHTML=(project["CORONA"][0]);
      document.getElementById("desc1").innerHTML=(project["CORONA"][1]);
      document.getElementById("link1").setAttribute("href", (project["CORONA"][2]));
      document.getElementById("cover1").style.background = "url('"+(project["CORONA"][3])+"')";
      document.getElementById("cover1").style.backgroundSize = "cover";
      document.getElementById("cover1").style.backgroundPosition = "0 -120px";
    }

    const setData7 = () => {
      document.getElementById("name1").style.color = "black";
      document.getElementById("desc1").style.color = "black";
      document.getElementById("name1").innerHTML=(project["HISABKITAB"][0]);
      document.getElementById("desc1").innerHTML=(project["HISABKITAB"][1]);
      document.getElementById("link1").setAttribute("href", (project["HISABKITAB"][2]));
      document.getElementById("cover1").style.background = "url('"+(project["HISABKITAB"][3])+"')";
      document.getElementById("cover1").style.backgroundSize = "cover";
      document.getElementById("cover1").style.backgroundPosition = "center";
    }

    const setData8 = () => {
      document.getElementById("name1").style.color = "white";
      document.getElementById("desc1").style.color = "white";
      document.getElementById("name1").innerHTML=(project["REVAHACKAPP"][0]);
      document.getElementById("desc1").innerHTML=(project["REVAHACKAPP"][1]);
      document.getElementById("link1").setAttribute("href", (project["REVAHACKAPP"][2]));
      document.getElementById("cover1").style.background = "url('"+(project["REVAHACKAPP"][3])+"')";
      document.getElementById("cover1").style.backgroundSize = "cover";
      document.getElementById("cover1").style.backgroundPosition = "center";
    }

    const setData9 = () => {
      document.getElementById("name1").style.color = "white";
      document.getElementById("desc1").style.color = "white";
      document.getElementById("name1").innerHTML=(project["TCDBOX"][0]);
      document.getElementById("desc1").innerHTML=(project["TCDBOX"][1]);
      document.getElementById("link1").setAttribute("href", (project["TCDBOX"][2]));
      document.getElementById("cover1").style.background = "url('"+(project["TCDBOX"][3])+"')";
      document.getElementById("cover1").style.backgroundSize = "cover";
      document.getElementById("cover1").style.backgroundPosition = "center";
    }

    const setData10 = () => {
      document.getElementById("name1").style.color = "white";
      document.getElementById("desc1").style.color = "white";
      document.getElementById("desc1").innerHTML=(project["CALC"][1]);
      document.getElementById("name1").innerHTML=(project["CALC"][0]);
      document.getElementById("link1").setAttribute("href", (project["CALC"][2]));
      document.getElementById("cover1").style.background = "url('"+(project["CALC"][3])+"')";
      document.getElementById("cover1").style.backgroundSize = "cover";
      document.getElementById("cover1").style.backgroundPosition = "center";
    }

    const setData11 = () => {
      document.getElementById("name1").style.color = "white";
      document.getElementById("desc1").style.color = "white";
      document.getElementById("desc1").innerHTML=(project["TTT"][1]);
      document.getElementById("name1").innerHTML=(project["TTT"][0]);
      document.getElementById("link1").setAttribute("href", (project["TTT"][2]));
      document.getElementById("cover1").style.background = "url('"+(project["TTT"][3])+"')";
      document.getElementById("cover1").style.backgroundSize = "cover";
      document.getElementById("cover1").style.backgroundPosition = "center";
    }


    return(
        <div className="projects column large12 medium12 small12">
          <h2 className="subName">Apps</h2>

          <div className="project-preview" id="cover1" style={{background: "url('"+webSiteCover+"')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="project-preview-content" style={{width: "100%", height: "100%", backdropFilter: "blur(25px)", position: "relative", top: "-10px"}}>
                <h1 className="project-title" id="name1" style={{color: "black"}}>{webSiteName}</h1>
                <p className="project-description" id="desc1" style={{color: "black"}}>{webSiteDesc}</p>
                <a className="project-link" id="link1" href={webSiteLink} target="_blank" rel="noreferrer" ><button>Visit Project</button></a>
            </div>
          </div>

          <div className="project" onMouseOver={setData6} >
            <img src="projects/corona.png" />
          </div>
          <div className="project" onMouseOver={setData7} >
            <img src="projects/hisab.png" />
          </div>
          <div className="project" onMouseOver={setData8} >
            <img src="projects/rhapp.png" />
          </div>
          <div className="project" onMouseOver={setData9} >
            <img src="projects/tcd.png" />
          </div>
          <div className="project">
            <img src="projects/calc.png" onMouseOver={setData10} />
          </div>
          <div className="project">
            <img src="projects/tictactoe.png" onMouseOver={setData11} />
          </div>

        </div>
    );
};

export default AppProjects;