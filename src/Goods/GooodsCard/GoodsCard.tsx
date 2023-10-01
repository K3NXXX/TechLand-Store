import { goodsType } from "../../lists/goodsList";
import checkMark from "../../assets/goodsCard/img1.svg"
import rating from "../../assets/goodsCard/star.svg"
import greyStar from "../../assets/goodsCard/greyStar.svg"
import style from "./GoodsCard.module.scss"

type GoodsCardType = {
    good: goodsType;
}
const GoodsCard: React.FC<GoodsCardType> = ({good}) => {

    return (  
        <div className={style.root}>
            <img className={style.goodImg} src={good.imageURL} alt="goods image" />
            <div className={style.rating}>
                {[...new Array(5)].map((_, index) => (<img className={style.star} key={index} src={greyStar} alt="rating star"/>))}
                <div>
                    {[...new Array(good.rating)].map((_, index) => (<img className={style.star} key={index} src={rating} alt="rating star"/>))}
                </div>
            </div>
            <p className={style.name}>{good.name}</p>
            <p className={style.price}>{good.price}</p>
            <img className={style.checkMark} src={checkMark} alt="check mark" />
        </div>
    );
}
 
export default GoodsCard;