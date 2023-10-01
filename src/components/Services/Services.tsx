import style from "./Services.module.scss"
import img1 from "../../assets/services/img1.png"
import img2 from "../../assets/services/img2.png"
import img3 from "../../assets/services/img3.png"

const Services: React.FC = () => {
    return (  
        <section className={style.root}>
            <div className={style.column}>
                <img src={img1} alt="img1" />
                <h3>Product Support</h3>
                <p>Up to 3 years on-site warranty available for your peace of mind.</p>
            </div>
            <div className={style.column}>
                <img src={img2} alt="img2" />
                <h3>Personal Account</h3>
                <p>With big discounts, free delivery and a dedicated support specialist.</p>
            </div>
            <div className={style.column}>
                <img src={img3} alt="img3" />
                <h3>Amazing Savings</h3>
                <p>Up to 70% off new Products, you can be sure of the best price.</p>
            </div>
        </section>
    );
}
 
export default Services;