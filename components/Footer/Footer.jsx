import './footer.css';

export default function Footer() {

  return (
    <footer className="footer">
        <div className="container">
            <div className="allReferences">
                <h2>DevCloud</h2>
                <p>Pioneering force in enterprise solutions, specializing in SaaS services, web development, mobile applications, and graphic design. With unmatched expertise, we elevate your digital presence, delivering cutting-edge solutions tailored to your business needs</p>
                <ul className="social">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/devcloud.dz" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/Chargily/" className="twitter">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B213558261258&text&type=phone_number&app_absent=0" className="github">
                        <i className="fab fa-whatsapp"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/devcloud.dz/" className="instagram">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>  
            <div className="allReferences">
                <h2>Contact</h2>
                <div className="line">
                    <i className="fas fa-phone-volume fa-fw"></i>
                    <div>+213 58 26 12 58</div>
                </div>
                <div className="line">
                    <i className="fa-solid fa-envelope"></i>
                    <div>contact@devcloud.dz</div>
                </div>
                <div className="line">
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    <div>No.864 - Cité 924 lots , M'Sila 28020, Algerie</div>
                </div>
            </div>
            <div className="allReferences">
                <h2>Sectiom</h2>
                <div className="references">
                    <a href="index.html">Home</a>
                    <a href="service.html">Services</a>
                    <a href="marketing.html">Marketing</a>
                    <a href="hosting.html">Hosting</a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Chargily &copy; 2015 - 2024</p>
        </div>
    </footer>
  );
}