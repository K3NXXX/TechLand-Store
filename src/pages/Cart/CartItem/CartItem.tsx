import style from "./CartItem.module.scss"
import { CartItemType, addItems, minusItems, removeItems } from "../../../redux/slices/cartSlice"
import { useDispatch } from "react-redux"

type CartItemTypeProps = {
    item:CartItemType
}

const CartItem:React.FC<CartItemTypeProps> = ({item}) => {
    const onClickPlusItem = () : void => {
        dispatch(addItems(item))
    }
    const onClickMinusItem = () : void => {
        dispatch(minusItems(item.id))
    }
    const dispatch = useDispatch()
    return (  
        <div className={style.root}>
            <div className={style.left}>
                <div className={style.good__image}>
                    <img src={item.imageURL} alt="good's image"/>
                </div>
                <p className={style.name}>{item.name}</p>
            </div>
            <div className={style.right}>
                <p className={style.good__price}>${item.price}</p>
                <div className={style.price}>
                    <div className={style.change}>
                        <p className={style.number}>{item.count}</p>
                        <div>
                            <svg onClick={onClickPlusItem} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 9L8 7L10 9" stroke="#A2A6B0" strokeWidth="1.6" strokeLinecap="round"/>
                            </svg>
                            <svg onClick={onClickMinusItem}
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 7L8 9L6 7" stroke="#A2A6B0" strokeWidth="1.6" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <p className={style.subtotal}>${item.price * item.count}</p>
                <div onClick={() => dispatch(removeItems(item.id))} className={style.remove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <circle cx="13.4882" cy="13.4883" r="12.4882" fill="white" stroke="#CACDD8" strokeWidth="2"/>
                        <path d="M9.44177 9.44183L18.2091 18.2092" stroke="#A2A6B0" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M18.2091 9.44183L9.44178 18.2092" stroke="#A2A6B0" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}
 
export default CartItem;