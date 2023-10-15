import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import NewGoodsAll from "./pages/NewGoodsAll/NewGoodsAll"
import LaptopsAll from "./pages/LaptopsAll/LaptopsAll"
import DesktopsAll from "./pages/DesktopsAll/DesktopsAll"
import GoodsFull from "./pages/GoodsFull/GoodsFull"
import Cart from "./pages/Cart/Cart"
import Registration from "./pages/Registration/Registration"
import Account from "./pages/Account/Account"
import {Routes, Route} from "react-router-dom"
import style from "./App.module.scss"

function App() {

  return (
    <div className={style.root}>
      <header>
        <Header/>
      </header>
      <main className={style.main}>
        <Routes>
            <Route path="/techland-store/" element={<Home/>}/>
            <Route path="/techland-store/cart" element={<Cart/>}/>
            <Route path="/techland-store/login" element={<Login/>}/>
            <Route path="/techland-store/account" element={<Account/>}/>
            <Route path="/techland-store/laptops" element={<LaptopsAll/>}/>
            <Route path="/techland-store/desktops" element={<DesktopsAll/>}/>
            <Route path="/techland-store/new-goods" element={<NewGoodsAll/>}/>
            <Route path="/techland-store/registration" element={<Registration/>}/>
            <Route path="/techland-store/good-detail/:id" element={<GoodsFull/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App

