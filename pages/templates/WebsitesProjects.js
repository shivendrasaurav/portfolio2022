import project from './data';

const WebsitesProjects = () => {
    
    var webSiteName = (project["Fluent Design For Web"][0]);
    var webSiteDesc = (project["Fluent Design For Web"][1]);
    var webSiteLink = (project["Fluent Design For Web"][2]);
    var webSiteCover = (project["Fluent Design For Web"][3]);

    const setData1 = () => {
      document.getElementById("name").style.color = "white";
      document.getElementById("desc").style.color = "white";
      document.getElementById("name").innerHTML=(project["Fluent Design For Web"][0]);
      document.getElementById("desc").innerHTML=(project["Fluent Design For Web"][1]);
      document.getElementById("link").setAttribute("href", (project["Fluent Design For Web"][2]));
      document.getElementById("cover").style.background = "url('"+(project["Fluent Design For Web"][3])+"')";
      document.getElementById("cover").style.backgroundSize = "cover";
      document.getElementById("cover").style.backgroundPosition = "0 -120px";
    }

    const setData2 = () => {
      document.getElementById("name").style.color = "black";
      document.getElementById("desc").style.color = "black";
      document.getElementById("name").innerHTML=(project["TEDxREVA University"][0]);
      document.getElementById("desc").innerHTML=(project["TEDxREVA University"][1]);
      document.getElementById("link").setAttribute("href", (project["TEDxREVA University"][2]));
      document.getElementById("cover").style.background = "url('"+(project["TEDxREVA University"][3])+"')";
      document.getElementById("cover").style.backgroundSize = "cover";
      document.getElementById("cover").style.backgroundPosition = "center";
    }

    const setData3 = () => {
      document.getElementById("name").style.color = "white";
      document.getElementById("desc").style.color = "white";
      document.getElementById("name").innerHTML=(project["REVAHACK"][0]);
      document.getElementById("desc").innerHTML=(project["REVAHACK"][1]);
      document.getElementById("link").setAttribute("href", (project["REVAHACK"][2]));
      document.getElementById("cover").style.background = "url('"+(project["REVAHACK"][3])+"')";
      document.getElementById("cover").style.backgroundSize = "cover";
      document.getElementById("cover").style.backgroundPosition = "center";
    }

    const setData4 = () => {
      document.getElementById("name").style.color = "black";
      document.getElementById("desc").style.color = "black";
      document.getElementById("name").innerHTML=(project["DSCREVA"][0]);
      document.getElementById("desc").innerHTML=(project["DSCREVA"][1]);
      document.getElementById("link").setAttribute("href", (project["DSCREVA"][2]));
      document.getElementById("cover").style.background = "url('"+(project["DSCREVA"][3])+"')";
      document.getElementById("cover").style.backgroundSize = "cover";
      document.getElementById("cover").style.backgroundPosition = "center";
    }

    const setData5 = () => {
      document.getElementById("name").style.color = "black";
      document.getElementById("desc").style.color = "black";
      document.getElementById("desc").innerHTML=(project["STRAWSOME"][1]);
      document.getElementById("name").innerHTML=(project["STRAWSOME"][0]);
      document.getElementById("link").setAttribute("href", (project["STRAWSOME"][2]));
      document.getElementById("cover").style.background = "url('"+(project["STRAWSOME"][3])+"')";
      document.getElementById("cover").style.backgroundSize = "cover";
      document.getElementById("cover").style.backgroundPosition = "center";
    }


    return(
        <div className="projects column large12 medium12 small12">
          <h2 className="subName">Websites</h2>

          <div className="project-preview" id="cover" style={{background: "url('"+webSiteCover+"')", backgroundSize: "cover", backgroundPosition: "0, -120px"}}>
          </div>
          <div className="project-preview-content">
                <h1 className="project-title" id="name">{webSiteName}</h1>
                <p className="project-description" id="desc">{webSiteDesc}</p>
                <a className="project-link" id="link" href={webSiteLink} target="_blank" rel="noreferrer" ><button>Visit Project</button></a>
          </div>

          <div className="project" onMouseOver={setData1} >
            <img src="projects/fdweb.png" />
          </div>
          <div className="project" onMouseOver={setData2} >
            <img src="projects/ijle.png" />
          </div>
          <div className="project" onMouseOver={setData3} >
            <img src="projects/rhapp.png" />
          </div>
          <div className="project" onMouseOver={setData4} >
            <img src="projects/dscreva.png" />
          </div>
          <div className="project">
            <img src="projects/strawsome.png" onMouseOver={setData5} />
          </div>

        </div>
    );
};

export default WebsitesProjects;