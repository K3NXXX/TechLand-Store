import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import style from "./App.module.scss"
import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import NewGoodsAll from "./pages/NewGoodsAll/NewGoodsAll"

function App() {

  return (
    <div className={style.root}>
      <header>
        <Header/>
      </header>
      <main className={style.main}>
        <Routes>
            <Route path="/techland-store/" element={<Home/>}/>
            <Route path="/techland-store/login" element={<Login/>}/>
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

