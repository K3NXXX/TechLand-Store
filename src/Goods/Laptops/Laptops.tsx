import GoodsCard from "../GooodsCard/GoodsCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { goodsType } from "../../lists/goodsList";
import {useState} from "react"
import style from "./Laptops.module.scss"
import laptopsImg from "../../assets/goods/laptopsImg.png"

const Laptops: React.FC = () => {
    const [active, setActive] = useState<number | null>(null)
    const goods = useSelector((state:RootState) => state.goodsSlice.goods)
    const laptopsGoods = goods.filter(item => item.type == "laptops")
    const laptopsSeries: string[] = ["MSI GS Series", "MSI GT Series", "MSI GL Series", "MSI GE Series"]
    const [series, setSeries] = useState("")
    return (  
        <div className={style.root}>
            <div className={style.series}>
                {laptopsSeries.map((item, index) => (
                    <p onClick={() => {
                        setActive(index)
                        setSeries(item)
                        if(active == index) setActive(null)
                    }} className={index === active ? style.active : ""} key={index}>{item}</p>
                )) }
            </div>
            <div className={style.content}>
                <Link to="/techland-store/laptops">
                <div className={style.left}>
                    <img src={laptopsImg} alt="laptops image" />
                    <p>MSI<br/>Laptops</p>
                    <Link to="/techland-store/laptops">See All Products</Link>
                </div>
                </Link>
                <div className={style.right}>
                    {
                    active == null ? (
                        laptopsGoods.slice(0,5).map((good) => <GoodsCard key={good.id} good={good} />)
                    ) : laptopsGoods.filter((good) => good.series === series).length ? (
                        laptopsGoods
                        .filter((good) => good.series === series)
                        .map((good: goodsType) => <GoodsCard key={good.id} good={good} />)
                    ) : (
                        <p className={style.notFound}>Not Found</p>
                    )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Laptops;
    