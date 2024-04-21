import Header from '../components/Header/Header.jsx';
import LandingPage from '../components/LandingPage/LandingPage.jsx';
import Brands from '../components/Brands/Brands.jsx';
import Teamwork from '../components/Teamwork/Teamwork.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Conversation from '../components/Conversation/Conversation.jsx';
import Products from '../components/Products/Products.jsx';
// import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from '../components/footer/footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <Brands />
      <Teamwork />
      <Projects />
      <Conversation />
      <Products />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
