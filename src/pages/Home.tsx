import ExpIcon from "../assets/svg/ExpIcon";
import ProjectIcon from "../assets/svg/ProjectIcon";
import AboutCards from "../components/AboutCards";

const Home = () => {
  return (
    <div>
      <div className="container home">
        <div className="banner-container">
          <div className="blur-container">

          </div>
          <div className="image-container">
            <img src={"./images/phenix.jpeg"} alt="image phoenix" />
          </div>
        </div>

        <div className="main">
          <p className="text-sm">Hello , I'm</p>
          <h1 className="name text-sm font-semibold"> <span className="clip font-poppins text-2xl">Benyaroot</span></h1>
          <p className="text-lg text-gray2">Software Developer, Cloud Engineer</p>
        </div>
        <div className="directions">
          <button className="button active">Proyectos✨</button>
          <button className="button">¿Quién soy?</button>
          <button className="button">Servicios</button>
        </div>

        <div className="about">
          <div className="about-info">
            <h2 className="subtitle">Sobre mi</h2>
            <p className="about-text">I am a software developer certified in AWS and a business administrator. I specialize in programming the frontend of web applications and having a general overview of the behavior of my clients’ businesses.</p>
            <p className="about-text">My mission is to achieve the integration of cloud technology in companies from various sectors and design a good user experience for their clients.</p>
            <p className="about-text">Some of my greatest successes include developing the frontend of applications with national impact, applications with high availability on 2 continents, and achieving certification as an AWS Cloud Practitioner.</p>
            <div className="about-cards">
              <AboutCards content="3+ años" title="Experiencia">
                <ExpIcon/>
              </AboutCards>
              <AboutCards content="12+ completados" title="Proyectos">
                <ProjectIcon/>
              </AboutCards>
            </div>
          </div>
          <div className="about-image">
            <img src={"./images/me.jpg"} alt="image me" />
          </div>
        </div>

        <div className="projects">
          <h1 className="subtitle">Mis Proyectos</h1>
          <div className="projects-list">
            <article className="project-container">
              <a className="project-image" href="#"><img src={"./images/project1.png"} alt="" /></a>
              <h3 className="project-title">Project Name</h3>
              <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
