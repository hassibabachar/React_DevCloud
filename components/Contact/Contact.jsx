import './Contact.css';

export default function Contact() {

  return (
    <section id="contact_us" className="contact_us">
        <div className="container">
            <div className="contact">
                <h3>get in touch</h3>
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="phone">
                    <h4>Phone</h4>
                    <p>+213 25 45 98 45</p>
                </div>
                <div className="email">
                    <h4>Send Email</h4>
                    <p>email@example.com</p>
                    <p>email@website.com</p>
                </div>
                <div className="address">
                    <h4>Phone</h4>
                    <p>No.864 - Cité 924 lots , M'Sila 28020, Algerie</p>
                </div>
            </div>
            <div className="drop">
                <h1>Drop Us a Line</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <form action="">
                    <div className="form">
                        <div className="label">
                            <label for="">Your Name</label>
                            <input type="name" required />
                        </div>
                        <div className="label">
                            <label for="email">Email</label>
                            <input type="email" required />
                        </div>
                    </div>
                    <div className="label">
                            <label for="text">Message</label>
                            <textarea name="" id="" required></textarea>
                        </div>
                    <div className="btn">
                        <button type="submit" className="button1">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
}