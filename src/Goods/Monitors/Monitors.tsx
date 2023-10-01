import style from "./Monitors.module.scss"
import monitorsImg from "../../assets/goods/monitorsImg.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { goodsType } from "../../lists/goodsList";
import GoodsCard from "../GooodsCard/GoodsCard";

const Monitors:React.FC = () => {
    const goods = useSelector((state:RootState) => state.goodsSlice.goods)
    const monitorsGoods = goods.filter(item => item.type == "monitors")
    return (  
        <div className={style.root}>
            <div className={style.content}>
                <div className={style.left}>
                    <img src={monitorsImg} alt="laptops image" />
                    <p>MSI<br/>Monitors</p>
                    <Link to="">See All Products</Link>
                </div>
                <div className={style.right}>
                {monitorsGoods.map((good: goodsType) => (
                    <GoodsCard key={good.id} good = {good}/>
                ))}
                </div>
            </div>
        </div>
    );
}
 
export default Monitors;