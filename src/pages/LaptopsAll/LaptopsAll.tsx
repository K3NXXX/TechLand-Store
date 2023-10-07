import Services from "../../components/Services/Services"
import Skeleton from "../../Skeleton/Skeleton"
import GoodsCard from "../../Goods/GooodsCard/GoodsCard"
import { useClickOutside } from "../../hooks/useClickOutside"
import { useSelector } from "react-redux"
import { fetchGoods } from "../../redux/slices/goodsSlice"
import { RootState, useAppDispatch } from "../../redux/store"
import {useEffect, useRef, useState} from "react"
import { goodsType } from "../../lists/goodsList"
import { Link } from "react-router-dom"
import brand1 from "../../assets/brands/img1.png"
import brand2 from "../../assets/brands/img2.png"
import brand3 from "../../assets/brands/img3.png"
import brand4 from "../../assets/brands/img4.png"
import brand5 from "../../assets/brands/img5.png"
import brand6 from "../../assets/brands/img6.png"
import chair from "../../assets/goods/chair.png"
import style from "./LaptopsAll.module.scss"

const LaptopsAll: React.FC = () => {
    const dispatch = useAppDispatch()
    const {goods, status} = useSelector((state:RootState) => state.goodsSlice)
    const laptopsGoods = goods.filter((item: goodsType) => item.type === "laptops")
    const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index}/>)
    const categoryList:string[] = ["CUSTOM Laptops", "MSI ALL-IN-ONE Laptops", "HP/COMPAQ Laptops"]
    const brandsList: string[] = [brand1, brand2, brand3, brand4, brand5, brand6]
    const priceList:string[] = ["$0 - $1,000", "$1,000 - $2,000", "$2,000 - $3,000",
    "$3,000 - $4,000", "$4,000 - $5,000", "$5,000 - $6,000", "$6,000 - $7,000"]
    const filtersRef = useRef<HTMLDivElement>(null)
    const [openFilters, setOpenFilters] = useState(false)
    const [category, setCategory] = useState<null | string>(null)
    const [activeCategory, setActiveCategory] = useState<null | number>(null)
    const [minPrice, setMinPrice] = useState<number | null>(null)
    const [maxPrice, setMaxPrice] = useState<number | null>(null)
    const [activePrice, setActivePrice] = useState<null | number>(null)
    const [color, setColor] = useState<string | null>(null)
    const [activeColor, setActiveColor] = useState<null | string>(null)
    const [brand, setBrand] = useState<string | null>(null)
    const [activeBrand, setActiveBrand] = useState<null | string>(null)

    useClickOutside(filtersRef, ():void => {
        if (openFilters) setTimeout(() => setOpenFilters(false), 50)
    })

    // filters
    const [filtersCount, setFiltersCount] = useState<number | null>(0)

    let filteredGoods = laptopsGoods;

    if (activeCategory !== null && category !== null) {
        filteredGoods = filteredGoods.filter((good) => good.category === category);
    }

    if (color !== null) {
        filteredGoods = filteredGoods.filter((good) => good.color === color);
    }

    if (brand != null) {
        filteredGoods = filteredGoods.filter((good) => good.brand == brand)
    }

    if (minPrice !== null && maxPrice !== null) {
        filteredGoods = filteredGoods.filter((good) => {
            const goodPrice = Number(good.price.replace(/[^0-9.]/g, ''));
            return goodPrice >= minPrice && goodPrice <= maxPrice;
        });
    }

    const filterGoodsByPriceRange = (minPrice: number, maxPrice: number) => {
        return laptopsGoods.filter((good) => {
        const goodPrice = parseInt(good.price.replace(/\D/g, ''), 10);
        return goodPrice > minPrice && goodPrice < maxPrice;
        });
    };

    const goodsUnder1000 = filterGoodsByPriceRange(0, 1000);
    const goodsBetween1000And2000 = filterGoodsByPriceRange(1000, 2000);
    const goodsBetween2000And3000 = filterGoodsByPriceRange(2000, 3000);
    const goodsBetween3000And4000 = filterGoodsByPriceRange(3000, 4000);
    const goodsBetween4000And5000 = filterGoodsByPriceRange(4000, 5000);
    const goodsBetween5000And6000 = filterGoodsByPriceRange(5000, 6000);
    const goodsBetween6000And7000 = filterGoodsByPriceRange(6000, 7000);
   
      const receiveGoods = async () => {
        dispatch(fetchGoods()); 
      }
    
    useEffect(() => {
        receiveGoods()
    }, [])
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (  
        <section className={style.root}>
             <div className={style.path}>
                <Link className={style.link1} to={"/techland-store/"}>Home</Link>
                <Link to={"/techland-store/laptops"}>Laptops</Link>
            </div>
            <h3 className={style.title}>Laptops</h3>
            <div onClick={() => setOpenFilters(!openFilters)}  className={style.phoneFilters}>
                <div className={style.openFilters}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>Choose filters</p>
            </div>
            <div className={style.content}>
                {openFilters && (
                    <div ref={filtersRef} className={style.filters__phone}>
                        <p className={style.filter__text}>Filters</p>
                        <button onClick={() => {
                            setMinPrice(null)
                            setMaxPrice(null)
                            setBrand(null)
                            setCategory(null)
                            setActiveBrand(null)
                            setActiveCategory(null)
                            setActiveColor(null)
                            setColor(null)
                            setActivePrice(null)
                        }} className={style.clearFilters}>Clear Filter</button>
                        <div className={style.category}>
                            <p className={style.category__name}>Category</p>
                            <div className={style.category__content}>
                                <ul className={style.category__list}>
                                    {categoryList.map((category, index: any) => (
                                    ((category === "CUSTOM Laptops" || category === "MSI ALL-IN-ONE Laptops") || category === "HP/COMPAQ Laptops") && (
                                        <li className={index == activeCategory ? style.active : ""} onClick={() => {
                                            setCategory(category)
                                            setFiltersCount(filtersCount != null ? filtersCount + 1 : 0)
                                            setActiveCategory(index)
                                            if(activeCategory == index)  {
                                                setActiveCategory(null)
                                                setCategory(null)
                                                setFiltersCount(filtersCount != null ? filtersCount - 1 : 0)}
                                        }} key={index}>{category}</li>
                                    )
                                    ))}
                                </ul>
                                <ul className={style.category__list_numbers}>
                                    <li>{laptopsGoods.filter(good => good.category === "CUSTOM Laptops").length}</li>
                                    <li>{laptopsGoods.filter(good => good.category === "MSI ALL-IN-ONE Laptops").length}</li>
                                    <li>{laptopsGoods.filter(good => good.category === "HP/COMPAQ Laptops").length}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.price}>
                        <p className={style.category__name}>Price</p>
                            <div className={style.category__content}>
                                <ul className={style.category__list}>
                                    {priceList.map((price, index) => (
                                        <li className={index == activePrice ? style.active : ""}  key={index} onClick={() => {
                                            setMinPrice(parseInt(price.split('$')[1].split(' ')[0].replace(/,/g, ''), 10))
                                            setMaxPrice(parseInt(price.split(' - ')[1].replace(/[^0-9]/g, ''), 10))
                                            setActivePrice(index)
                                            if(activePrice == index)  {
                                                setActivePrice(null)
                                                setMaxPrice(null)
                                                setMinPrice(null)
                                            }
                                        }}>{price}</li>
                                    ))}
                                </ul>
                                <ul className={style.category__list_numbers}>
                                    <li>{goodsUnder1000.length  }</li>
                                    <li>{goodsBetween1000And2000.length}</li>
                                    <li>{goodsBetween2000And3000.length }</li>
                                    <li>{goodsBetween3000And4000.length }</li>
                                    <li>{goodsBetween4000And5000.length }</li>
                                    <li>{goodsBetween5000And6000.length }</li>
                                    <li>{goodsBetween6000And7000.length }</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className={style.color}>
                            <p className={style.color__name}>Color</p>
                            <div className={style.color__choose}>
                                <span
                                    onClick={() => {
                                        setActiveColor(activeColor === "black" ? null : "black");
                                        setColor(activeColor === "black" ? null : "black");
                                    }}
                                    className={activeColor === "black" ? `${style.black} ${style.active}` : style.black}
                                ></span>
                                <span
                                    onClick={() => {
                                        setActiveColor(activeColor === "red" ? null : "red");
                                        setColor(activeColor === "red" ? null : "red");
                                    }}
                                    className={activeColor === "red" ? `${style.red} ${style.active}` : style.red}
                                ></span>
                            </div>
                        </div>
                        <div className={style.brands}>
                            <p className={style.brands__name}>Brands</p>
                            <div className={style.brands__list}>
                            {brandsList.map((brand, index: any) => (
                                <img
                                    key={index}
                                    onClick={() => {
                                        let selectedBrand = null;
                                        switch (index) {
                                            case 0:
                                                selectedBrand = "roccat";
                                                break;
                                            case 1:
                                                selectedBrand = "msi";
                                                break;
                                            case 2:
                                                selectedBrand = "razer";
                                                break;
                                            case 3:
                                                selectedBrand = "thermaltake";
                                                break;
                                            case 4: 
                                                selectedBrand = "adata";
                                                break;
                                            case 5: 
                                                selectedBrand = "hp";
                                                break;
                                            default:
                                                selectedBrand = null;
                                                break;
                                        }
                                        setActiveBrand(index === activeBrand ? null : index);
                                        setBrand(index === activeBrand ? null : selectedBrand)
                                    }}
                                    className={activeBrand === index ? style.active : ""}
                                    src={brand}
                                    alt="brand-logo"
                                />
                            ))}
                            </div>
                        </div>
                    </div>
                )}
                <div className={style.filters}>
                    <p className={style.filter__text}>Filters</p>
                    <button onClick={() => {
                        setMinPrice(null)
                        setMaxPrice(null)
                        setBrand(null)
                        setCategory(null)
                        setActiveBrand(null)
                        setActiveCategory(null)
                        setActiveColor(null)
                        setColor(null)
                        setActivePrice(null)
                    }} className={style.clearFilters}>Clear Filter</button>
                    <div className={style.category}>
                        <p className={style.category__name}>Category</p>
                        <div className={style.category__content}>
                            <ul className={style.category__list}>
                                {categoryList.map((category, index: any) => (
                                ((category === "CUSTOM Laptops" || category === "MSI ALL-IN-ONE Laptops") || category === "HP/COMPAQ Laptops") && (
                                    <li className={index == activeCategory ? style.active : ""} onClick={() => {
                                        setCategory(category)
                                        setFiltersCount(filtersCount != null ? filtersCount + 1 : 0)
                                        setActiveCategory(index)
                                        if(activeCategory == index)  {
                                            setActiveCategory(null)
                                            setCategory(null)
                                            setFiltersCount(filtersCount != null ? filtersCount - 1 : 0)}
                                    }} key={index}>{category}</li>
                                )
                                ))}
                            </ul>
                            <ul className={style.category__list_numbers}>
                                <li>{laptopsGoods.filter(good => good.category === "CUSTOM Laptops").length}</li>
                                <li>{laptopsGoods.filter(good => good.category === "MSI ALL-IN-ONE Laptops").length}</li>
                                <li>{laptopsGoods.filter(good => good.category === "HP/COMPAQ Laptops").length}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.price}>
                    <p className={style.category__name}>Price</p>
                        <div className={style.category__content}>
                            <ul className={style.category__list}>
                                {priceList.map((price, index) => (
                                    <li className={index == activePrice ? style.active : ""}  key={index} onClick={() => {
                                        setMinPrice(parseInt(price.split('$')[1].split(' ')[0].replace(/,/g, ''), 10))
                                        setMaxPrice(parseInt(price.split(' - ')[1].replace(/[^0-9]/g, ''), 10))
                                        setActivePrice(index)
                                        if(activePrice == index)  {
                                            setActivePrice(null)
                                            setMaxPrice(null)
                                            setMinPrice(null)
                                        }
                                    }}>{price}</li>
                                ))}
                            </ul>
                            <ul className={style.category__list_numbers}>
                                <li>{goodsUnder1000.length  }</li>
                                <li>{goodsBetween1000And2000.length}</li>
                                <li>{goodsBetween2000And3000.length }</li>
                                <li>{goodsBetween3000And4000.length }</li>
                                <li>{goodsBetween4000And5000.length }</li>
                                <li>{goodsBetween5000And6000.length }</li>
                                <li>{goodsBetween6000And7000.length }</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={style.color}>
                        <p className={style.color__name}>Color</p>
                        <div className={style.color__choose}>
                            <span
                                onClick={() => {
                                    setActiveColor(activeColor === "black" ? null : "black");
                                    setColor(activeColor === "black" ? null : "black");
                                }}
                                className={activeColor === "black" ? `${style.black} ${style.active}` : style.black}
                            ></span>
                            <span
                                onClick={() => {
                                    setActiveColor(activeColor === "red" ? null : "red");
                                    setColor(activeColor === "red" ? null : "red");
                                }}
                                className={activeColor === "red" ? `${style.red} ${style.active}` : style.red}
                            ></span>
                        </div>
                    </div>
                    <div className={style.brands}>
                        <p className={style.brands__name}>Brands</p>
                        <div className={style.brands__list}>
                        {brandsList.map((brand, index: any) => (
                            <img
                                key={index}
                                onClick={() => {
                                    let selectedBrand = null;
                                    switch (index) {
                                        case 0:
                                            selectedBrand = "roccat";
                                            break;
                                        case 1:
                                            selectedBrand = "msi";
                                            break;
                                        case 2:
                                            selectedBrand = "razer";
                                            break;
                                        case 3:
                                            selectedBrand = "thermaltake";
                                            break;
                                        case 4: 
                                            selectedBrand = "adata";
                                            break;
                                        case 5: 
                                            selectedBrand = "hp";
                                            break;
                                        default:
                                            selectedBrand = null;
                                            break;
                                    }
                                    setActiveBrand(index === activeBrand ? null : index);
                                    setBrand(index === activeBrand ? null : selectedBrand)
                                }}
                                className={activeBrand === index ? style.active : ""}
                                src={brand}
                                alt="brand-logo"
                            />
                        ))}
                        </div>
                    </div>
                    <img className={style.chair} src={chair} alt="chair image" />
                </div>
                <div className={style.list__wrapper}>
                 <div className={style.laptopGoods__list}>
                    {status === "loading" ? skeleton : filteredGoods.length > 0 ? (
                        filteredGoods.map((good) => <GoodsCard key={good.id} good={good} />)
                    ) : (
                        <p className={style.notFound}>Not Found</p>
                    )}
                </div>
                </div>
            </div>
            <Services/>
        </section>
    );
}
 
export default LaptopsAll;