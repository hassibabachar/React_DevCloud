import designersImg from '../../public/assets/images/designers.svg';
import frontendImg from '../../public/assets/images/frontend.svg';
import mentorsImg from '../../public/assets/images/mentors.svg';
import './Teamwork.css';



export default function Teamwork() {

  return (
    <section className="Teamwork section">
        <div className="container">
            <div className="title">
            <h3>our team</h3>
            <h1>Teamwork Makes the Dream Work</h1>
            </div>
            <div className="work">
                <div className="box">
                    <img src={designersImg} alt="" />
                    <div className="content">
                        <h2>Designer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis illum eius sed velit ex ipsam consequatur quae totam sequi quis ipsa, maxime blanditiis numquam.</p>
                    </div>
                </div>
                <div className="box">
                    <img src={frontendImg} alt="" />
                    <div className="content">
                        <h2>Front-end Developers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis illum eius sed velit ex ipsam consequatur quae totam sequi quis ipsa, maxime blanditiis numquam.</p>
                    </div>
                </div>
                <div className="box">
                    <img src={mentorsImg} alt="" />
                    <div className="content">
                        <h2>Mentors</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis illum eius sed velit ex ipsam consequatur quae totam sequi quis ipsa, maxime blanditiis numquam.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}