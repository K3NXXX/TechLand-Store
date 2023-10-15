import HeaderBottom from "./HeaderBottom/HeaderBottom";
import style from "./Header.module.scss"
import facebook from "../../assets/header/facebook.svg"
import instagram from "../../assets/header/instagram.svg"

const Header: React.FC = () => {
    return (  
        <section className={style.header}>
            <div className={style.wrapper}>
                <div className={style.top}>
                    <div className={style.workTime}>
                        <p><span>Mon-Thu:</span> 9:00 AM - 5:30 PM</p>
                    </div>
                    <div className={style.address}>
                        <p>Visit our showroom in 1234 Street Adress City Address, 1234 <a href="mailto:techisland@gmail.com"> Contact Us</a></p>
                    </div>
                    <div className={style.phone}>
                        <p>Call Us: <a href="tel:+380465620080">+38 046 562 0080</a></p>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>
            <HeaderBottom/>
        </section>
    );
}
 
export default Header;