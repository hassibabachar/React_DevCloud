import logoImg from '../../public/assets/images/logo.svg';
import reactImg from '../../public/assets/images/hero-blob.svg';
import Image from 'next/image'
import './Header.css';



export default function Header() {

  return (
    <header> 
    <div className="container">
        <div className="img">
            <image src={reactImg} alt="" />
        </div>
        <div className="logo">
            <image src={logoImg} alt="" />
        </div>
        <nav>
            <ul className="links">
                <a className="nav-link" href="index.html"><li className="active">Home</li></a>
                <a className="nav-link" href="service.html"><li>Service</li></a>
                <a className="nav-link" href="marketing.html"><li>Marketing</li></a>
                <a className="nav-link" href="hosting.html"><li>Hosting</li></a>
                <div className="btn">
                    <a className="nav-link" href="#contact-us"><button type="button" className="button">Get In Touch</button></a>
                    <select className="nav-link" name="" id="Language">
                        <option value="">Language</option>
                        <option value="">English</option>
                        <option value="">Arabic</option>
                    </select>
                </div>
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
          </nav>
    </div>
</header>
  );
}