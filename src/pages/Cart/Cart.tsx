import { Link } from "react-router-dom";
import style from "./Cart.module.scss"
import CartItem from "./CartItem/CartItem";
import zip from "../../assets/goods/zip.svg"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartItemType, clearItems } from "../../redux/slices/cartSlice";
import {useEffect, useRef, useState} from "react"
import { useClickOutside } from "../../hooks/useClickOutside";

const Cart:React.FC = () => {
    const {items, totalPrice} = useSelector((state:RootState) => state.cartSlice)
    const [modal, setModal] = useState(false)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const modalRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        scrollTo(0,0)
    }, [])

    useClickOutside(modalRef, ():void => {
        if (modal) setTimeout(() => setModal(false), 50)
    })
    return (  
        <section className={style.root}>
            <div className={style.path}>
                <Link className={style.link1} to={"/techland-store/"}>Home</Link>
                <Link to={"/techland-store/cart"}>Cart</Link>
            </div>
            <h3 className={style.title}>Shopping Cart</h3>
            <div className={style.cart__content}>
                <div className={style.left}>
                    <div className={style.cartGoods}>
                        {items.length > 0 ? items.map((item: CartItemType) => {
                            return <CartItem  key={item.id} item={item}/>
                        }) : (
                            <div className={style.empty}>Cart is empty</div>
                        )}
                    </div>
                    <div className={style.btn}>
                        <Link to="/techland-store/" className={style.continue}>Continue Shopping</Link>
                        <button onClick={() => dispatch(clearItems())} className={style.clear}>Clear Shopping Cart</button>
                    </div>
                </div>
                <div className={style.right}>
                    <p className={style.summary}>Summary</p>
                    <div className={style.total}>
                        <p className={style.text}>Order Total</p>
                        <p className={style.price}>${totalPrice}</p>
                    </div>
                    <div className={style.count}>
                        <p className={style.text}>Count Total</p>
                        <p className={style.price}>{totalCount}</p>
                    </div>
                    <button 
                    onClick={() => {
                        if (items.length > 0) {
                            setModal(true)
                        }else {
                            setModal(false)
                        }}} className={style.buy}>Buy!</button>
                    <div className={style.zip}>
                        <img src={zip} alt="zip image" />
                        <p>own it now, up to 6 monthsinterest free</p>
                    </div>
                </div>
            </div>
            {modal && (
                <div ref={modalRef} className={style.modal}>
                    <p className={style.thanks}>Thank for purchasing!</p>
                    <p className={style.answer}>We will contact with you as soon as possible</p>
                    <button onClick={() => setModal(false)} className={style.back}>Back</button>
                </div>
            )}

        </section>
    );
}
 
export default Cart;
