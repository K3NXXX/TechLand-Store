import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.scss"
import Services from "../../components/Services/Services";
import {get, useForm} from "react-hook-form"
import { UserDataType } from "../Registration/Registration";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../../auth/firebase";
import { useState } from "react";
import googleIcon from "../../assets/account/google-icon.png"


const Login:React.FC = () => {
    const provider = new GoogleAuthProvider()
    const {register, handleSubmit, formState: {errors}} = useForm<UserDataType>()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState(false)

    const onSubmit = (data: UserDataType)=> {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
            navigate("/techland-store/account");
        })
        .catch((error) => {
            setLoginError(true)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    const signInWithGoogle = () => {
        const auth = getAuth(app);
        if (!auth.currentUser) {
            signInWithPopup(auth, provider)
                .then(() => {
                    navigate("/techland-store/account");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        } else {
            console.log("Пользователь уже авторизован");
        }
    };

    return (  
        <section className={style.root}>
            <div className={style.path}>
                <Link className={style.link1} to={"/techland-store/"}>Home</Link>
                <Link to={"/techland-store/login"}>Login</Link>
            </div>
            <h3 className={style.title}>Customer Login</h3>
            <div className={style.authorization}>
                <div className={style.login}>
                    <p className={style.login__info1}>Registered Customers</p>
                    <p className={style.login__info2}>If you have an account, sign in with your email address.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Email</label>
                        <div className={style.input__wrapper}>
                            <input
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email"
                                }
                            })}
                            type="text" placeholder="Your Email"/>
                            {errors.email &&  <p className={style.error}>{errors.email.message as string}</p>}
                        </div>
                        <label>Password</label>
                        <div className={style.input__wrapper}>
                            <input
                            {...register("password", {
                                required: true,
                                minLength:{
                                    value: 5,
                                    message: "Password should be at least 5 characters"
                                }
                            })}
                            type="password" placeholder="Your Password"/>
                            {errors.password && <p className={style.error}>{errors.password.message as string}</p>}
                        </div>
                        <div className={style.signIn}>
                            {loginError && (<p className={style.loginError}>There is no user with such data</p>)}
                            <button className={style.loginBtn}>Sign In</button>
                            <span>or</span>
                            <div className={style.signIn__wrapper}>
                                <button className={style.signInWithGoogleBtn} onClick={signInWithGoogle}>Sign in with Google</button>
                                <img src={googleIcon} alt="google icon" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={style.registration}>
                <p className={style.reg__info1}>New Customer?</p>
                <p className={style.reg__info2}>Creating an account has many benefits:</p>
                <ul>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track orders and more</li>
                </ul>
                <Link to="/techland-store/registration" className={style.btn}>Create An Account</Link>
                
                </div>
            </div>
            <Services/>
        </section>
    );
}
 
export default Login;