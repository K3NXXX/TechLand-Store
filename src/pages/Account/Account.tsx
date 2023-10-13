import { Link, useNavigate } from "react-router-dom";
import style from "./Account.module.scss"
import Services from "../../components/Services/Services";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar, setUserAuth } from "../../redux/slices/authSlice";
import {useState} from "react"
import { RootState } from "../../redux/store";
import CartItem from "../Cart/CartItem/CartItem";

const Account: React.FC = () => {
    const {items} = useSelector((state:RootState) => state.cartSlice)
    const auth = getAuth(app);
    const user = auth.currentUser;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navList= ["Account Information", "Goods in Cart"]
    const [activeNav, setActiveNav] = useState<number>(0)
    const {avatar} = useSelector((state:RootState) => state.authSlice)
    const logOutUser = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            dispatch(setUserAuth(false))
            navigate("/techland-store/login")
        }).catch((error) => {
            console.log("SingOut ERROR:", error)
        });

    }
    const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target && event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                dispatch(setAvatar(reader.result as string));
            };
            reader.readAsDataURL(file);
        }
    };
    return (  
        <section className={style.root}>
            <div className={style.path}>
                <Link className={style.link1} to={"/techland-store/"}>Home</Link>
                <Link to={"/techland-store/account"}>Account</Link>
            </div>
            <div className={style.top}>
                <h3 className={style.title}>Account</h3>
                <button onClick={logOutUser} className={style.logOut}>Sign out</button>
            </div>
            <div className={style.content}>
                <nav className={style.content__left}>
                    <ul className={style.left__list}>
                        {navList.map((item, index) => (
                            <li key={index} onClick={() => setActiveNav(index)} 
                            className={index == activeNav ? style.active : ""}>{item}</li>
                        ))}
                    </ul>
                </nav>
                <div className={style.content__right}>
                    {activeNav == 0 && (
                        <div>
                            <h4 className={style.right__title}>Account Information</h4>
                            <div className={style.greyLine}></div>
                            <div className={style.right__content}>
                                <div className={style.right__content_wrapper}>
                                    <p className={style.right__content_info}>Contact Information</p>
                                    <p className={style.user__name}>{user?.displayName}</p>
                                    <p className={style.user__email}>{user?.email}</p>
                                </div>
                                <div className={style.avatar}>
                                    <input
                                    type="file"
                                    accept="image/*"
                                    id="avatar-input"
                                    style={{ display: "none" }}
                                    onChange={handleAvatarUpload}
                                    />
                                    <label htmlFor="avatar-input">
                                        <img className={style.avatar__img} src={avatar} alt="avatar" />
                                    </label>
                                    <p>Upload your avatar</p>
                                </div>
                            </div>

                        </div>
                    )}
                    {activeNav == 1 && (
                        <div className={style.cart__goods}>
                            {items.length > 0 ? items.map((item) => (
                                <CartItem key={item.id} item={item}/>
                              
                            )): <p className={style.empty}>There is no goods in your cart</p>}
                        </div>
                    )}

                </div>
            </div>
            <Services/>
        </section>
    );
}
 
export default Account;