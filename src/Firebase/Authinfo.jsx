import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import Webapp from "./firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(Webapp)
const provider = new GoogleAuthProvider();
export default function Authinfo({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);

    }
    const Login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const Logout = () => {
        signOut(auth)
            .then(() => { })
            .catch(() => { })
    }
    const GoogleSignin = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => console.log(error.message))
    }
    const updateinfo = (name) => {
        return updateProfile(user, {
            displayName: name
        }).then(() => { alert("username changed") })
            .catch((error) => { console.log(error.message) })

    }
    const Userinfo = { createUser, Login, Logout, loading, user, GoogleSignin, updateinfo }
    return (
        <AuthContext.Provider value={Userinfo}>
            {children}
        </AuthContext.Provider>
    )
}
