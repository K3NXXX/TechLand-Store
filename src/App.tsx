import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import NewGoodsAll from "./pages/NewGoodsAll/NewGoodsAll"
import LaptopsAll from "./pages/LaptopsAll/LaptopsAll"
import DesktopsAll from "./pages/DesktopsAll/DesktopsAll"
import Account from "./pages/Account/Account"
import {Routes, Route} from "react-router-dom"
import style from "./App.module.scss"
import { Suspense, lazy } from "react"

const Cart = lazy(() => import("./pages/Cart/Cart"))
const Registration = lazy(() => import("./pages/Registration/Registration"))
const Login = lazy(() => import("./pages/Login/Login"))
const GoodsFull = lazy(() => import("./pages/GoodsFull/GoodsFull"))

function App() {

  return (
    <div className={style.root}>
      <header>
        <Header/>
      </header>
      <main className={style.main}>
        <Routes>
            <Route path="/techland-store/" element={<Home/>}/>
            <Route path="/techland-store/registration" element={<Suspense fallback={<div>Loading...</div>}><Registration/></Suspense>}/>
            <Route path="/techland-store/good-detail/:id" element={<Suspense fallback={<div>Loading...</div>}><GoodsFull/></Suspense>}/>
            <Route path="/techland-store/cart" element={<Suspense fallback={<div>Loading...</div>}><Cart/></Suspense>}/>
            <Route path="/techland-store/login" element={<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>}/>
            <Route path="/techland-store/account" element={<Account/>}/>
            <Route path="/techland-store/laptops" element={<LaptopsAll/>}/>
            <Route path="/techland-store/desktops" element={<DesktopsAll/>}/>
            <Route path="/techland-store/new-goods" element={<NewGoodsAll/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App

