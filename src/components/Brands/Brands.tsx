import style from "./Brands.module.scss"
import brand1 from "../../assets/brands/img1.png"
import brand2 from "../../assets/brands/img2.png"
import brand3 from "../../assets/brands/img3.png"
import brand4 from "../../assets/brands/img4.png"
import brand5 from "../../assets/brands/img5.png"
import brand6 from "../../assets/brands/img6.png"
import brand7 from "../../assets/brands/img7.png"

const Brands: React.FC = () => {
    return (  
        <section className={style.root}>
            <img src={brand1} alt="brand-logo" />
            <img src={brand2} alt="brand-logo" />
            <img src={brand3} alt="brand-logo" />
            <img src={brand4} alt="brand-logo" />
            <img src={brand5} alt="brand-logo" />
            <img src={brand6} alt="brand-logo" />
            <img src={brand7} alt="brand-logo" />
        </section>
    );
}
 
export default Brands;