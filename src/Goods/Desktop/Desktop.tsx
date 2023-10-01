import style from "./Desktop.module.scss"
import {useState} from "react"
import GoodsCard from "../GooodsCard/GoodsCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";
import desktopsImg from "../../assets/goods/desktopsImg.png"
import { Link } from "react-router-dom";
import { goodsType } from "../../lists/goodsList";

const Desktops:React.FC = () => {
    const [active, setActive] = useState<number | null>(null)
    const goods = useSelector((state:RootState) => state.goodsSlice.goods)
    const desktopsGoods = goods.filter(item => item.type == "desktops")
    const laptopsSeries: string[] = ["MSI Infinute Series", "MSI Triden", "MSI GL Series", "MSI Nightblade"]
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
                <div className={style.left}>
                    <img src={desktopsImg} alt="laptops image" />
                    <p>Gaming<br/>Desktops</p>
                    <Link to="">See All Products</Link>
                </div>
                <div className={style.right}>
                {
                active == null ? (
                    desktopsGoods.map((good) => <GoodsCard key={good.id} good={good} />)
                ) : desktopsGoods.filter((good) => good.series === series).length ? (
                    desktopsGoods
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
 
export default Desktops;