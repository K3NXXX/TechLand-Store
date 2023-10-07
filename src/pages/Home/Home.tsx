import Brands from "../../components/Brands/Brands";
import Carousel from "../../components/Carousel/Carousel";
import Feedback from "../../components/Feedback/Feedback";
import Follow from "../../components/Follow/Follow";
import NewGoods from "../../Goods/NewGoods/NewGoods";
import Services from "../../components/Services/Services";
import Laptops from "../../Goods/Laptops/Laptops";
import Desktops from "../../Goods/Desktop/Desktop";

const Home = () => {
    return (  
        <div>
            <Carousel/>
            <NewGoods/>
            <Laptops/>
            <Desktops/>
            <Brands/>
            <Follow/>
            <Feedback/>
            <Services/> 
        </div>

    );
}
 
export default Home;