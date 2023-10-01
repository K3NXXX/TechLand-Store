import { Link } from "react-router-dom";
import style from "./Login.module.scss"
import Services from "../../components/Services/Services";

const Login:React.FC = () => {
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
                    <form>
                        <label>Email</label>
                        <input type="text" placeholder="Your Email"/>
                        <label>Password</label>
                        <input type="text" placeholder="Your Password"/>
                    </form>
                    <div className={style.signIn}>
                        <button className={style.loginBtn}>Sign In</button>
                    </div>
                </div>
                <div className={style.registration}>
                <p className={style.reg__info1}>New Customer?</p>
                <p className={style.reg__info2}>Creating an account has many benefits:</p>
                <ul>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track orders and more</li>
                </ul>
                <button className={style.btn}>Create An Account</button>

                </div>
            </div>
            <Services/>
        </section>
    );
}
 
export default Login;