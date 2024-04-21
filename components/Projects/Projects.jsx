import MutabImg from '../../public/assets/images/Mutab.webp';
import ChargilyImg from '../../public/assets/images/Chargily.webp';
import YakoolImg from '../../public/assets/images/Yakool.jpeg';
import './Projects.css';



export default function Projects() {

  return (
    <section className="projects section">
        <div className="container">
            <div className="title">
            <h3>projects</h3>
            <h1>Our Recent Work</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <article className="article">
                        <img src={MutabImg} alt="image" className="img" />
                        <div className="content">
                        <h3><a href="https://mutab.it/" target="_blank" className="button">Mutab</a></h3>
                        <h2>The Arab Library</h2>
                        </div>
                    </article>
                    <article className="article">
                        <img src={ChargilyImg} alt="image" className="img" />
                        <div className="content">
                        <h3><a href="https://chargily.com/" target="_blank" className="button">Chargily</a></h3>
                        <h2>Recharge Mobile</h2>
                        </div>
                    </article>
                    <article className="article">
                        <img src={YakoolImg} alt="image" className="img" />
                        <div className="content">
                        <h3><a href="https://www.dood.com/fr/" target="_blank" className="button">Yakool</a></h3>
                        <h2>Restaurants near you</h2>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  );
}