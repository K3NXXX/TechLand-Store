import {Link} from "react-router-dom"
import {useState, useRef} from "react"
import { useClickOutside } from "../../../hooks/useClickOutside"
import style from "./HeaderBottom.module.scss"
import close from "../../../assets/header/close.svg"
import logo from "../../../assets/header/logo.svg"
import search from "../../../assets/header/search.svg"
import cart from "../../../assets/header/cart.svg"
import avatar from "../../../assets/header/avatar.svg"

const HeaderBottom: React.FC = () => {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [openList, setOpenList] = useState<boolean>(false)
    const listRef = useRef<HTMLDivElement>(null)
    const headerList: string[] = ["Laptops", "Desktop PCs", "Networking Devices", "Printers & Scanners", "PC Parts", "All Other Products", "Repairs", "Our Deals"]
    useClickOutside(listRef, ():void => {
        if (openList) setTimeout(() => setOpenList(false), 50)
    })

    return (  
        <div className={style.bottom}>
            <div className={style.left}>
                <Link to={"/techland-store/"}><img className={style.logo} src={logo} alt="logo"/></Link>
                <div onClick={():void => setOpenList(!openList)} className={style.burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {activeSearch ? (
                    <div className={style.searchInput}>
                        <input type="text" placeholder="Search entiere store here..."/>
                        <img className={style.searchInput__img} src={search} alt="search"/>
                    </div>
                ): (
                <ul className={style.list}>
                    {headerList.map((item, index) => (
                        <li className={item === "Our Deals" ? `${style.unique}` : ""} key={index}><Link to="">{item}</Link></li>
                    ))}
                </ul>

                )}
                {openList && (
                    <div ref={listRef} className={style.phoneList}>
                        {headerList.map((item, index) => (
                                <li key={index}><Link to="">{item}</Link></li>
                            ))}
                        <div className={style.cartPhone}>
                            <p>Cart </p>
                            <img src={cart} alt="cart"/>
                            <span>3</span>
                        </div>
                        <div className={style.searchInput2}>
                            <input type="text" placeholder="Search..."/>
                            <img className={style.searchInput__img} src={search} alt="search"/>
                        </div>
                    </div>
                )}

            </div>
            <div className={style.right}>
                {activeSearch ? (
                    <div className={style.close}><img onClick={():void => setActiveSearch(false)} src={close} alt="close"/></div>
                ): (
                    <div><img className={style.searchImg} onClick={():void => {setActiveSearch(true)}} src={search} alt="search"/></div>
                )}
                <div className={style.cart}>
                    <img src={cart} alt="cart"/>
                    <span>3</span>
                </div>
                <div>
                    <Link to={"/techland-store/login"}>
                        <img src={avatar} alt="avatar"/>
                    </Link>
                </div>
            </div>

        </div>
    );
}
 
export default HeaderBottom;