import style from "./NewGoods.module.scss"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import {  fetchGoods, } from "../../redux/slices/goodsSlice";
import {  useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import GoodsCard from "../GooodsCard/GoodsCard";
import { goodsType } from "../../lists/goodsList";
import zip from "../../assets/goods/zip.svg"
import {Link} from "react-router-dom"
import 'swiper/css/navigation';
import Skeleton from "../../Skeleton/Skeleton";

const NewGoods: React.FC = () => {
    const dispatch = useAppDispatch()
    const [slidesPerView, setSlidesPerView] = useState(6)
    const {goods, status} = useSelector((state:RootState) => state.goodsSlice)
    const newGoods = goods.filter((item: goodsType) => item.type === "new")
    const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index}/>)
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    const receiveGoods = async () => {
        dispatch(fetchGoods())
    }

    useEffect(() => {
        receiveGoods()
    }, [])
    
   

    useEffect(() => {
        const resizeWindow = () : void => {
            if(window.innerWidth <= 480) {
                setSlidesPerView(1)
            }else if ( window.innerWidth <= 720) {
                setSlidesPerView(2)
            }else if (window.innerWidth <= 940) {
                setSlidesPerView(3)
            }else if (window.innerWidth <= 1430) {
                setSlidesPerView(4)
            }
            else {
                setSlidesPerView(slidesPerView)
            }
        }
        resizeWindow()
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }

    }, [slidesPerView])
    return (  
        <section className={style.root}>
            <div className={style.top}>
                <h3 className={style.title}>New Products</h3>
                <Link className={style.seeMore} to="/techland-store/new-goods">See All New Products</Link>
            </div>
            <div className={style.newGoods__list}>
            <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation
                modules={[Navigation]}
                allowTouchMove={false}
                >
                {status === 'loading' ? skeleton : newGoods.map((good) => {
                    return <SwiperSlide key={good.id}><GoodsCard good = {good}/></SwiperSlide>
                })}
                </Swiper>
            </div>
            <div className={style.zip}>
                <img src={zip} alt="zip image" />
                <p>own it now, up to 6 months interest free learn more</p>
            </div>
        </section>
    );
}
 
export default NewGoods;