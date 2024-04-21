import LandingImg from '../../public/assets/images/home.svg';
import './LandingPage.css';

export default function LandingPage() {

  return (
    <section className="LandingPage">
        <div className="container">
            <div className="Describtion">
                <h3>welcome to devcloud</h3>
                <h1>Designers, Front-end </h1>
                <h1><span> Developers & Mentors </span></h1>
                <p>we design and code beautifully simple things, and we love what we do. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ex? Deleniti, dicta.</p>
                <div className="btn">
                    <a href="project.html"><button type="button" className="button">Start a Project</button></a>
                    <a href="collaboration.html"><button type="button" className="button1">Collaboration</button></a>
                </div>
            </div>
            <div className="image">
                <img src={LandingImg} alt="" />
            </div>
        </div>
    </section>
  );
}