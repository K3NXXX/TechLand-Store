import { useSelector } from "react-redux";
import style from "./NewGoodsAll.module.scss"
import { RootState, useAppDispatch } from "../../redux/store";
import { goodsType } from "../../lists/goodsList";
import GoodsCard from "../../Goods/GooodsCard/GoodsCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchGoods } from "../../redux/slices/goodsSlice";
import Skeleton from "../../Skeleton/Skeleton";

const NewGoodsAll: React.FC = () => {
    const dispatch = useAppDispatch()
    const {goods, status} = useSelector((state:RootState) => state.goodsSlice)
    const newGoods = goods.filter((item: goodsType) => item.type === "new")
    const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index}/>)
    const receiveGoods = async () => {
        dispatch(fetchGoods())
    }
    
    useEffect(() => {
        receiveGoods()
    }, [])
  
   
    return (  
        <section className={style.root}>
            <div className={style.path}>
                <Link className={style.link1} to={"/techland-store/"}>Home</Link>
                <Link to={"/techland-store/new-goods"}>New Products</Link>
            </div>
            <h3 className={style.title}>New Products</h3>
            <div className={style.newGoods__list}>
                {status === "loading" ? skeleton : newGoods.map((good) => (<GoodsCard key={good.id} good = {good}/>))}
            </div>
        </section>
    );
}
 
export default NewGoodsAll;