import style from "./Footer.module.scss"
import facebook from "../../assets/header/facebook.svg"
import instagram from "../../assets/header/instagram.svg"
import card1 from "../../assets/footer/card1.png"
import card2 from "../../assets/footer/card2.png"
import card3 from "../../assets/footer/card3.png"
import card4 from "../../assets/footer/card4.png"
import card5 from "../../assets/footer/card5.png"

const Footer:React.FC = () => {
    return (  
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.footer__top}>
                    <div className={style.top__left}>
                        <h4>Sign Up To Our Newsletter.</h4>
                        <p>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className={style.top__right}>
                        <input type="text" placeholder="Your Email"/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className={style.footer__bottom}>
                    <div className={style.bottom__left}>
                        <img src={facebook} alt="facebook-icon" />
                        <img src={instagram} alt="instagram-icon" />
                    </div>
                    <div className={style.bottom__middle}>
                        <img src={card1} alt="card1" />
                        <img src={card2} alt="card2" />
                        <img src={card3} alt="card3" />
                        <img src={card4} alt="card4" />
                        <img src={card5} alt="card5" />
                    </div>
                    <div className={style.bottom__right}>
                    <p>Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;