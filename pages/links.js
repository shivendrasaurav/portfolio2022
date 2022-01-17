import Head from 'next/head';
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {

  return (
    <div>
        <Head>
            <title>Shivendra Saurav - Links</title>
            <meta name="description" content="I am a full stack developer with a passion for creating beautiful and intuitive user interfaces. I have a strong background in web development and have worked on a wide range of projects. I am currently working as Senior Software Engineer at Larson and Tourbo Infotech." />
            <link rel="icon" href="/neonLogo.png" />
        </Head>

        <div className="linksWrapper">
            <div className="column large6 medium8 small12 center ta_center">
                <img src="/linksdp.jpg" /><br/>
                <h1 className='ta_center'>Shivendra Saurav</h1><br/>
                <Link href="https://www.youtube.com/c/thecodedrop"><a target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a></Link>
                <Link href="https://github.com/shivendrasaurav"><a target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></Link>
                <Link href="https://www.linkedin.com/in/shivendra-saurav-80a8ba191/"><a target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></Link><br/><br/>
                <Link href="https://www.instagram.com/shivendrasaurav/"><a target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></Link>
                <Link href="https://twitter.com/ShivendraSaurav"><a target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></Link>
                <Link href="https://www.facebook.com/shivendra.saurav"><a target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a></Link><br/><br/>

            </div>
        </div>        

    </div>
  )
}


export default Home;