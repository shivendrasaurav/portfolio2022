import project from './data';

const ToolsProjects = () => {
    
    var webSiteName = (project["RBCG"][0]);
    var webSiteDesc = (project["RBCG"][1]);
    var webSiteLink = (project["RBCG"][2]);
    var webSiteCover = (project["RBCG"][3]);

    const setData12 = () => {
      document.getElementById("name2").style.color = "black";
      document.getElementById("desc2").style.color = "black";
      document.getElementById("name2").innerHTML=(project["RBCG"][0]);
      document.getElementById("desc2").innerHTML=(project["RBCG"][1]);
      document.getElementById("link2").setAttribute("href", (project["RBCG"][2]));
      document.getElementById("cover2").style.background = "url('"+(project["RBCG"][3])+"')";
      document.getElementById("cover2").style.backgroundSize = "cover";
      document.getElementById("cover2").style.backgroundPosition = "center";
    }

    const setData13 = () => {
      document.getElementById("name2").style.color = "black";
      document.getElementById("desc2").style.color = "black";
      document.getElementById("name2").innerHTML=(project["SCROLL"][0]);
      document.getElementById("desc2").innerHTML=(project["SCROLL"][1]);
      document.getElementById("link2").setAttribute("href", (project["SCROLL"][2]));
      document.getElementById("cover2").style.background = "url('"+(project["SCROLL"][3])+"')";
      document.getElementById("cover2").style.backgroundSize = "cover";
      document.getElementById("cover2").style.backgroundPosition = "center";
    }

    const setData14 = () => {
      document.getElementById("name2").style.color = "black";
      document.getElementById("desc2").style.color = "black";
      document.getElementById("name2").innerHTML=(project["STREAM"][0]);
      document.getElementById("desc2").innerHTML=(project["STREAM"][1]);
      document.getElementById("link2").setAttribute("href", (project["STREAM"][2]));
      document.getElementById("cover2").style.background = "url('"+(project["STREAM"][3])+"')";
      document.getElementById("cover2").style.backgroundSize = "cover";
      document.getElementById("cover2").style.backgroundPosition = "center";
    }


    return(
        <div className="projects column large12 medium12 small12">
          <h2 className="subName">Tools</h2>

          <div className="project-preview" id="cover2" style={{background: "url('"+webSiteCover+"')", backgroundSize: "cover", backgroundPosition: "center"}}>
          </div>
          <div className="project-preview-content">
                <h1 className="project-title" id="name2" style={{color: "black"}}>{webSiteName}</h1>
                <p className="project-description" id="desc2" style={{color: "black"}}>{webSiteDesc}</p>
                <a className="project-link" id="link2" href={webSiteLink} target="_blank" rel="noreferrer" ><button id="link-btn">Visit Project</button></a>
          </div>

          <div className="project" onMouseOver={setData12} >
            <img src="projects/rbcg.png" />
          </div>
          <div className="project" onMouseOver={setData13} >
            <img src="projects/scroll.png" />
          </div>
          <div className="project" onMouseOver={setData14} >
            <img src="projects/stream.png" />
          </div>

        </div>
    );
};

export default ToolsProjects;