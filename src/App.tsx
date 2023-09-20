import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import style from "./App.module.scss"
import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className={style.root}>
      <header>
        <Header/>
      </header>
        <Routes>
            <Route path="/techland/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App

