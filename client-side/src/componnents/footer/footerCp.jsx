import instagram from '../../assets/icons/instagram-logo.svg';
import x from '../../assets/icons/icon-twitterx.svg';
import facebook from '../../assets/icons/icons-facebook.svg';
import youtube from '../../assets/icons/icons-de-youtube.svg';
import './footer.css';

const FooterCp = () => {

    return(
        <div className="footer">
            <div className="qui">
                <h3 className='nous'><a href="#"> Qui sommes-nous ? </a></h3>
                <h3><a href="#"> Nos missions </a></h3>
                <h3><a href="#"> Nos partenaires </a></h3>
            </div>
            <div className="contact">
                <h3>
                    Voyagez avec nous
                </h3>
                <h4>
                    tel :
                </h4>
                <h4>
                   email:
                </h4>
            </div>
            <div className="media">
                <a className="insta" href="#">
                    <h4 className='txtInsta'> Instagram </h4>
                    <img src={instagram} width='35'/>
                </a>
                 <a className="x" href="#">
                    <h4 className='txtX'> X </h4>
                    <img src={x}  width='35'/>
                </a>
                 <a className="facebook" href="#">
                     <h4 className='txtFacebook'> Facebook </h4>
                    <img src={facebook}  width='35'/>
                </a>
                 <a className="youtube" href="#">
                     <h4 className='txtYoutube'> Youtube </h4>
                    <img src={youtube}  width='40'/>
                </a>
            </div>

        </div>
    )
}

export default FooterCp;