import { Link } from "react-router-dom";
import ExpIcon from "../assets/svg/ExpIcon";
import ProjectIcon from "../assets/svg/ProjectIcon";
import AboutCards from "../components/AboutCards";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import HTMLIcon from "../assets/svg/HTMLIcon";
import SkillCard from "../components/SkillCard";
import CSSIcon from "../assets/svg/CSSIcon";
import JSIcon from "../assets/svg/JSIcon";
import Testimonials from "../components/sections/Testimonials";
import ContactForm from "../components/form/ContactForm";
import EmailIcon from "../assets/svg/EmailIcon";
import WhatsappIcon from "../assets/svg/WhatsappIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";

const Home = () => {
  return (
    <div className="home-container">
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
                <ExpIcon />
              </AboutCards>
              <AboutCards content="12+ completados" title="Proyectos">
                <ProjectIcon />
              </AboutCards>
            </div>
          </div>
          <div className="about-image">
            <img src={"./images/me.jpg"} alt="image me" />
          </div>
        </div>

        <div className="skills">
          <h1 className="subtitle">Experiencia</h1>
          <div className="skills-list">
            <div className="skills-card">
              <h3 className="text-lg text-start text-orangeNormal">Web Developer</h3>
              <div className="skills-card--content">
                <SkillCard title="HTML5" children={<HTMLIcon />} />
                <SkillCard title="CSS" children={<CSSIcon/>} />
                <SkillCard title="Javascript" children={<JSIcon/>} />
              </div>
            </div>
          </div>
        </div>

        <div className="projects">
          <h1 className="subtitle">Mis Proyectos</h1>
          <div className="projects-list">
            <ProjectCard
              content="lorem ipsum"
              srcImage="https://d1l9597hydyb9x.cloudfront.net/cms_masuno/images/project/12/cover/12/12.png"
              title="Admin Vales San Fernando"
              url="http://benyaroot.com"
            />
            <ProjectCard
              content="lorem ipsum"
              srcImage="https://d1l9597hydyb9x.cloudfront.net/cms_masuno/images/project/12/cover/12/12.png"
              title="Planificar gastos"
              url="http://benyaroot.com"
            />
            <ProjectCard
              content="lorem ipsum"
              srcImage="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62484c52eba34b77a562524d/screenshot_2022-04-02-13-15-14-0000.png"
              title="CMS Admin"
              url="http://benyaroot.com"
            />
          </div>
          <Link to={"/projects"} className="text-orangeNormal">Ver más</Link>
        </div>

        <div className="services">
          <h1 className="subtitle">Servicios</h1>
          <div className="services-list">
            <ServiceCard
            list={['Web designer','Connect REST API','Integration API']}
            title={'DESARROLLO WEB'}
            />
            <ServiceCard
            list={['Migración de Base de datos','Implementar alta disponibilidad','Soluciones serverless']}
            title={'Cloud Engineer'}
            />
          </div>
        </div>

        <div className="section-container">
          <Testimonials/>
        </div>
        <div className="contact">
          <h1 className="subtitle">Contactame</h1>
          <div className="contact-container">
            <div className="contact-options">
              <article className="contact-card">
                <EmailIcon/>
                <h4>Email</h4>
                <h5>b.ponce.chanca.21@gmail.com</h5>
                <a href="b.ponce.chanca.21@gmail.com<">Send a message</a>
              </article>
              <article className="contact-card">
                <LinkedinIcon/>
                <h4>LinkedIn</h4>
                <h5>b-ponce-chanca</h5>
                <a href="b.ponce.chanca.21@gmail.com<">Send a message</a>
              </article>
              <article className="contact-card">
                <WhatsappIcon/>
                <h4>Whatsapp</h4>
                <h5>+51 923601506</h5>
                <a href="https://api.whatsapp.com/send?phone+51923601506" rel="noreferrer" target="_blank">Send a message</a>
              </article>
            </div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
