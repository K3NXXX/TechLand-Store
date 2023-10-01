import Brands from "../../components/Brands/Brands";
import Carousel from "../../components/Carousel/Carousel";
import Feedback from "../../components/Feedback/Feedback";
import Follow from "../../components/Follow/Follow";
import NewGoods from "../../Goods/NewGoods/NewGoods";
import Services from "../../components/Services/Services";
import Custom from "../../Goods/Custom/Custom";
import Laptops from "../../Goods/Laptops/Laptops";
import Desktops from "../../Goods/Desktop/Desktop";
import Monitors from "../../Goods/Monitors/Monitors";

const Home = () => {
    return (  
        <div>
            <Carousel/>
            <NewGoods/>
            <Custom/>
            <Laptops/>
            <Desktops/>
            <Monitors/>
            <Brands/>
            <Follow/>
            <Feedback/>
            <Services/> 
        </div>

    );
}
 
export default Home;