import { useParams } from "react-router-dom"
import style from "./GoodsFull.module.scss"
import {useState} from "react"
import zip from "../../assets/goods/zip.svg"
import processor from "../../assets/goodsDetail/processor.png"
import Services from "../../components/Services/Services"
import { goodsType } from "../../lists/goodsList"
import {useEffect} from "react"
import axios from "axios"
import { fetchGoods } from "../../redux/slices/goodsSlice"
import { CartItemType, addItems } from "../../redux/slices/cartSlice"
import { useDispatch } from "react-redux"

const GoodsFull:React.FC = () => {
    const [activeDetail, setActiveDetail] = useState<number>(0)
    const detailsList = ["About Product", "Details", "Specs"]
    const [goods, setGoods] = useState<goodsType>()
    const {id} = useParams()
    const dispatch = useDispatch()

   

    
    useEffect(() => {
        async function fetchGoods () {
            try {
                const {data} = await axios.get(`https://64f776fe9d77540849539c0d.mockapi.io/goods/` + id)
                setGoods(data)
            } catch (error) {
                console.log("ERROR", error)
            }
        }
        fetchGoods()
    }, [fetchGoods])
    const onClickAdd = () : void => {
        if (goods) {
            const item: CartItemType = {
                id: goods.id || 0,
                name: goods.name || "",
                price: goods.price ? Number(goods.price) : 0,
                imageURL: goods.imageURL || "",
                count: 0,
            }
            dispatch(addItems(item))
        }
    }
  
    if (!goods) {
        return <>Loading...</>
    }

    return (  
        <section className={style.root}>
            <div className={style.top}>
                <div className={style.top__left}>
                    <ul>
                        {detailsList.map((item, index) => (
                            <li 
                            onClick={() => {
                                setActiveDetail(index)
                            }}
                            className={activeDetail == index ? style.active : ""} 
                            key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={style.top__right}>
                        <p>${goods.price}</p>
                    <button onClick={onClickAdd}>Add to Cart</button>
                </div>
            </div>
            <div className={style.product}>
                {activeDetail == 0 && (
                    <div className={style.product__left}>
                        <p className={style.product__name}>{goods.name}</p>
                        <p className={style.description}>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
                    </div>
                )}
                 {activeDetail == 1 && (
                    <div className={style.product__left}>
                        <p className={style.product__name}>{goods.name}</p>
                        <ul>
                            <li>Intel Core i7-10700F </li>
                            <li>Intel H410</li>
                            <li>WHITE</li>
                            <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                            <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                            <li>2 total slots (64GB Max)</li>
                            <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                            <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                            <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                            <li>Intel WGI219Vethernet (10/100/1000M)</li>
                            <li>AX200 (WIFI 6)+BT5.1 • PSU 330W</li>
                            <li>Fan Cooler</li>
                        </ul>
                    </div>
                )}
                {activeDetail == 2 && (
                    <div className={style.product__left}>
                        <p className={style.product__name}>{goods.name}</p>
                        <div className={style.stats}>
                            <div className={style.stats__left}>
                                <p>CPU</p>
                                <p>Featured</p>
                                <p>I/O Ports</p>
                            </div>
                            <div className={style.stats__right}>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>N/A</p>
                            </div>
                        </div>
                        
                    </div>
                )}
                <div className={style.product__right}>
                        <img src={goods.imageURL} alt="good's image" />
                        <div className={style.zip}>
                            <img src={zip} alt="zip image" />
                            <p>own it now, up to 6 months<br/>interest free</p>
                        </div>
                </div>
            </div>
            <div className={style.processor}>
                <div className={style.processor__left}>
                    <p className={style.big}>Outplay the Competittion</p>
                    <p className={style.small}>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                        *Performance compared to i7-9700. Specs varies by model.
                    </p>

                </div>
                <div className={style.processor__right}>
                    <img src={processor} alt="processor image" />
                </div>

            </div>
            <Services/>
            
        </section>
    );
}
 
export default GoodsFull;