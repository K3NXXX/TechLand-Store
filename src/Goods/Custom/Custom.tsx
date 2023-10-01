import style from "./Custom.module.scss"
import customImg from "../../assets/goods/customImg.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { goodsType } from "../../lists/goodsList";
import GoodsCard from "../GooodsCard/GoodsCard";

const Custom:React.FC = () => {
    const goods = useSelector((state:RootState) => state.goodsSlice.goods)
    const customGoods = goods.filter(item => item.type == "custom")
    return (  
        <div className={style.root}>
            <div className={style.left}>
                <img src={customImg} alt="custom image" />
                <p>Custom<br/>Builds</p>
                <Link to="">See All Products</Link>
            </div>
            <div className={style.right}>
            {customGoods.map((good: goodsType) => (
                <GoodsCard key={good.id} good = {good}/>
            ))}
            </div>
        </div>
    );
}
 
export default Custom;