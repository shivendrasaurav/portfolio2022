const Projects = (project) => {      
  
    const skewProj = (e) =>{
      let skew = document.getElementById(project.name[0]);
    
      skew.style.setProperty('--x',(-e.clientX/1080)+'deg');
      skew.style.setProperty('--y',(-e.clientY/1080)+'deg');

    }

    return(
        <div className="projects column large8 medium9 small12 center" onMouseMove={skewProj}>

          <div className="project-preview" style={{background: "url('"+project.cover+"')", backgroundSize: "cover", backgroundPosition: "center"}} id={project.name[0]}>
          </div>
          <div className="project-preview-content">
                <h1 className="project-title" id="name1" style={{color: project.fcolor}}>{project.name}</h1>
                <p className="project-description" id="desc1" style={{color: project.fcolor}}>{project.desc}</p>
                <a className="project-link" id="link1" href={project.link} target="_blank" rel="noreferrer" ><button>Visit Project</button></a>
          </div>
          

        </div>
    );
};

export default Projects;