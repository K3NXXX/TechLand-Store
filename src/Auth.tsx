import {useState, useEffect} from "react"
import {app} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth/cordova"
// export const AuthProvider = () => {
//     const auth  = getAuth(app)
//     const [user, setUser] = useState(auth.currentUser)

//     useEffect(() => {
//         auth.onAuthStateChanged((maybeUser) => {
//             if (maybeUser != null) {
//                return  setUser(maybeUser)
//             }
//             signInWithEmailAndPassword(auth, GoogleAuthProvider)


//         })
//     }, [])

//     return user != null ? <>0</> : <>loading...</>
// }

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });