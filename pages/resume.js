import Head from 'next/head';
import resData from "./resumeData.json";

const Home = () => {

  return (
    <div>
      <Head>
        <title>Shivendra Saurav - Resume</title>
        <meta name="description" content="I am a full stack developer with a passion for creating beautiful and intuitive user interfaces. I have a strong background in web development and have worked on a wide range of projects. I am currently working as Senior Software Engineer at Larson and Tourbo Infotech." />
        <link rel="icon" href="/neonLogo.png" />
      </Head>

      <div className='resumeWrapper column large9 center'>
        <br/><br/>

        <div className="resTitle">
          <h2>{resData.name}</h2>
          <h4>{resData.title}</h4>
          <br/>
          <a href={"tel:"+resData.phone}><i className='ms-Icon ms-Icon--Phone' style={{position: "relative", top: "4px"}}></i> {resData.phone}</a>
          <a href={"mailto:"+resData.email}><i className='ms-Icon ms-Icon--Mail' style={{position: "relative", top: "4px"}}></i> {resData.email}</a>
          <a href={"https://"+resData.website}><i className='ms-Icon ms-Icon--Link' style={{position: "relative", top: "4px"}}></i> {resData.website}</a>
          <br/><br/>
        </div>

        <div className="col1">
            <h1>Education</h1>
            <hr/>
            <div className='column large8 medium8 small8'>
              <h2>{resData.education[0]}</h2>
              <h3>{resData.education[1]}({resData.education[2]})</h3>
            </div>
            <div className='column large4 medium4 small4'>
              <h2 className='ta_center'>CGPA</h2>
              <h3 className='ta_center'>{resData.education[3]}</h3>
            </div>

            <div className='column large8 medium8 small8'>
              <h5>{resData.course1[0]}</h5>
              <h6>{resData.course1[1]}({resData.course1[2]})</h6>
            </div>
            <div className='column large4 medium4 small4'>
              <h5 className='ta_center'>Grade</h5>
              <h6 className='ta_center'>{resData.course1[3]}</h6>
            </div>

            <div className='column large8 medium8 small8' style={{position: "relative", top: "-16px"}}>
              <h5>{resData.course2[0]}</h5>
              <h6>{resData.course2[1]}({resData.course2[2]})</h6>
            </div>
            <div className='column large4 medium4 small4'>
              <h5 className='ta_center'>Grade</h5>
              <h6 className='ta_center'>{resData.course2[3]}</h6>
            </div>
            <br/>

            <h1>Experience</h1>
            <hr/>
            <h2>{resData.experience[0]}</h2>
            <h4>{resData.experience[1]}</h4>
            <p style={{marginLeft: "20%"}}>|</p>
            <h2>{resData.experience[2]}</h2>
            <h4>{resData.experience[3]}</h4>
            <h3 style={{fontWeight: "bold"}}>Larson and Tourbo Infotech</h3>
            <ul className='expDetails'>
              {resData.expDetails.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
            <br/>
            
            <h1>Projects</h1>
            <hr/>
            <ul className='projDetails'>
              {resData.project1.map((item, index) => {
                //linkify 1st item with href as 2nd item
                if(index == 0) return <li key={index}><a href={resData.project1[1]} target="_blank" rel="noreferrer">{resData.project1[0]}</a></li>
                //skip 2nd item
                if(index == 1) return;
                return <li key={index}>{item}</li>
              })}
            </ul><br/>
            <ul className='projDetails'>
              {resData.project2.map((item, index) => {
                //linkify 1st item with href as 2nd item
                if(index == 0) return <li key={index}><a href={resData.project2[1]} target="_blank" rel="noreferrer">{resData.project2[0]}</a><button className='tag'>Hackathon Winner</button></li>
                //skip 2nd item
                if(index == 1) return;
                return <li key={index}>{item}</li>
              })}
            </ul><br/>
            <ul className='projDetails'>
              {resData.project3.map((item, index) => {
                //linkify 1st item with href as 2nd item
                if(index == 0) return <li key={index}><a href={resData.project3[1]} target="_blank" rel="noreferrer">{resData.project3[0]}</a><button className='tag'>Hackathon Winner</button></li>
                //skip 2nd item
                if(index == 1) return;
                return <li key={index}>{item}</li>
              })}
            </ul><br/>
        </div>

        <div className="col2">
            <h1>Summary</h1>
            <hr/>
            <p>{resData.summary}</p>
            <br/>

            <h1>Skills</h1>
            <hr/>
            <h3>Client Side</h3>
            <ul className='skills'>
              {resData.client.map((skill, index) => {
                return <li key={index}>{skill}</li>
              })}
            </ul><br/>
            <h3>Server Side</h3>
            <ul className='skills'>
              {resData.server.map((skill, index) => {
                return <li key={index}>{skill}</li>
              })}
            </ul><br/>
            <h3>Database and Tools</h3>
            <ul className='skills'>
              {resData.database.map((skill, index) => {
                return <li key={index}>{skill}</li>
              })}
            </ul>
            
        </div>
        <br/><br/>

      </div>
        

    </div>
  )
}


export default Home;