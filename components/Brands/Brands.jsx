import bldrs from '../../public/assets/images/bldrs.png';
import briteweb from '../../public/assets/images/briteweb.svg';
import chronicled from '../../public/assets/images/chronicled.svg';
import designlab from '../../public/assets/images/designlab.png';
import domain7 from '../../public/assets/images/domain7.svg';
import goodkind from '../../public/assets/images/goodkind.svg';
import redstamp from '../../public/assets/images/redstamp.svg';
import serbmetrics from '../../public/assets/images/serbmetrics.svg';
import './Brands.css';

export default function Brands() {

  return (
    <section class="brands section">
        <div class="container">
            <div class="title">
            <h3>brands</h3>
            <h1>We are proud to have collaborated with some</h1>
            <h1>awesome companies</h1>
            </div>
            <div class="companies">            
                <img src={bldrs} alt="" />
                <img src={briteweb} alt="" />
                <img src={chronicled} alt="" />
                <img src={designlab} alt="" />
                <img src={domain7} alt="" />
                <img src={goodkind} alt="" />
                <img src={redstamp} alt="" />
                <img src={serbmetrics} alt=""/>
            </div>
        </div>
    </section>
  );
}
