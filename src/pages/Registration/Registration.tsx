import style from "./Registration.module.scss"
import {useForm} from "react-hook-form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import {useState} from "react"

export type UserDataType = {
    name: string;
    email:string;
    password: string;
    confirmPassword: string;
    termsAndConditions: boolean;
}

const Registration: React.FC = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, getValues} = useForm<UserDataType>()
    const [emailExistError, setEmailExistError] = useState(false)
    const onSubmit = async (data: UserDataType)=> {
        const auth = getAuth(app);
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            navigate("/techland-store/account")
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if(errorCode == "auth/email-already-in-use"){
                setEmailExistError(true)
            }
        }
       
    }
    return (  
        <div className={style.root}>
            <div className={style.wrapper}>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.inputBox}>
                    <input
                        {...register("name", {
                            required: true,
                            maxLength: {
                                value: 20,
                                message: "Name shouldn't be at most 20 characters"
                            }
                        })}
                        type="text" placeholder="Enter your name" />
                         {errors.name && <p className={style.error}>{errors.name.message as string}</p>}
                </div>
                <div className={style.inputBox}>
                    <input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email"
                            }
                        })}
                        type="text" placeholder="Enter your email" />
                        {errors.email &&  <p className={style.error}>{errors.email.message as string}</p>}
                </div>
                <div className={style.inputBox}>
                    <input
                        {...register("password", {
                            required: true,
                            minLength:{
                                value: 5,
                                message: "Password should be at least 5 characters"
                            }
                        })}
                        type="password" placeholder="Create password" />
                        {errors.password && <p className={style.error}>{errors.password.message as string}</p>}
                </div>
                <div className={style.inputBox}>
                    <input
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === getValues("password") || "Password don't match"
                        })}
                        type="password" placeholder="Confirm password" />
                         {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword.message as string}</p>}
                </div>
                <div className={style.policy}>
                <input
                    type="checkbox"
                    {...register("termsAndConditions", {
                        required: {
                            value: true,
                            message: "You must accept the terms and conditions"
                        }
                    })}
                />
                <h3>I accept all terms & conditions</h3>
                </div>
                {errors.termsAndConditions && <p className={style.error}>{errors.termsAndConditions.message as string}</p>}
                <div className={style.button}>
                    {emailExistError && (<p>Email already in use</p>)}
                    <button type="submit">Register Now</button>
                </div>
            </form>
        </div>
    </div>
    );
}
 
export default Registration;