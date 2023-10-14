import {Link} from "react-router-dom"
import {useState, useRef, useEffect} from "react"
import { useClickOutside } from "../../../hooks/useClickOutside"
import style from "./HeaderBottom.module.scss"
import close from "../../../assets/header/close.svg"
import logo from "../../../assets/header/logo.svg"
import search from "../../../assets/header/search.svg"
import cart from "../../../assets/header/cart.svg"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { setUserAuth } from "../../../redux/slices/authSlice"
import noAccountImg from "../../../assets/account/no-account.png"
import { setSearchValue } from "../../../redux/slices/goodsSlice"
import SearchItem from "./SearchItem/SearchItem"


const HeaderBottom: React.FC = () => {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const {avatar} = useSelector((state:RootState) => state.authSlice)
    const [openList, setOpenList] = useState<boolean>(false)
    const listRef = useRef<HTMLDivElement>(null)
    const headerList: string[] = ["Laptops", "Desktop PCs"]
    const isMounted = useRef(false)
    const {items, totalPrice} = useSelector((state:RootState) => state.cartSlice)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const {searchValue, goods} = useSelector((state:RootState) => state.goodsSlice)
    useClickOutside(listRef, ():void => {
        if (openList) setTimeout(() => setOpenList(false), 50)
    })

    // firebase auth
    const dispatch = useDispatch()
    const {userAuth} = useSelector((state:RootState) => state.authSlice)
    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUserAuth(true))
        }
    });

    useEffect(() => {
        if (isMounted) {
            const cartItems = JSON.stringify(items)
            const cartTotalPrice = JSON.stringify(totalPrice)
            localStorage.setItem("cartItems", cartItems)
            localStorage.setItem("cartTotalPrice", cartTotalPrice)
        }
        isMounted.current = true
    },[items])

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
                    <div className={style.seach__wrapper}>
                        <div className={style.searchInput}>
                            <input value={searchValue} onChange={(event) => dispatch(setSearchValue(event.target.value))} type="text" placeholder="Search entiere store here..."/>
                            <img className={style.searchInput__img} src={search} alt="search"/>
                        </div>
                        <div className={style.search__content}>
                            {searchValue !== "" && (
                                goods.filter((item) => item.name.includes(searchValue)).map((item) => (
                                <Link onClick={() => {
                                    dispatch(setSearchValue(""))
                                    setActiveSearch(false)}} 
                                    key={item.id} to={"/techland-store/good-detail/" + item.id}>
                                    <SearchItem item={item} />
                                </Link>
                                ))
                            )}
                        </div>
                    </div>
                ): (

                <ul className={style.list}>
                    {headerList.map((item, index) => (
                       index == 0 ? (
                           <li key={index}><Link to="/techland-store/laptops">{item}</Link></li>
                       ) : (
                        <li key={index}><Link to="/techland-store/desktops">{item}</Link></li>
                       )
                    ))}
                </ul>

                )}
                {openList && (
                    <div ref={listRef} className={style.phoneList}>
                        {headerList.map((item, index) => (
                                 index == 0 ? (
                                    <li onClick={() => setOpenList(false)} key={index}><Link to="/techland-store/laptops">{item}</Link></li>
                                ) : (
                                 <li onClick={() => setOpenList(false)} key={index}><Link to="/techland-store/desktops">{item}</Link></li>
                                )
                            ))}
                        <Link to="/techland-store/cart">
                            <div className={style.cartPhone}>
                                <p>Cart </p>
                                <img src={cart} alt="cart"/>
                                <span>{totalCount}</span>
                            </div>
                        </Link>
                        <div className={style.searchInput2}>
                            <input value={searchValue} onChange={(event) => dispatch(setSearchValue(event.target.value))}  type="text" placeholder="Search..."/>
                            <img className={style.searchInput__img} src={search} alt="search"/>
                            <div className={style.search__content2}>
                                {searchValue !== "" && (
                                goods.filter((item) => item.name.includes(searchValue)).map((item) => (
                                    <Link onClick={() => {
                                        dispatch(setSearchValue(""))
                                        setActiveSearch(false)}} 
                                        key={item.id} to={"/techland-store/good-detail/" + item.id}>
                                        <SearchItem item={item} />
                                    </Link>
                                    ))
                                )}
                            </div>
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
                <Link to="/techland-store/cart">
                    <div className={style.cart}>
                        <img src={cart} alt="cart"/>
                        {totalCount == 0 ? "" : ( <span>{ totalCount}</span>)}
                       
                    </div>
                </Link>
                <div className={style.avatar}>
                    {userAuth ? (
                        <Link to={"/techland-store/account"}>
                            <img className={style.accountImg} src={avatar} alt="avatar"/>
                        </Link>
                    ): (
                        <Link to={"/techland-store/login"}>
                            <img  className={style.noAccountImg} src={noAccountImg} alt="avatar"/>
                        </Link>
                    )}
                </div>
            </div>

        </div>
    );
}
 
export default HeaderBottom;