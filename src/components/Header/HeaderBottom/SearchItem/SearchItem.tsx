import style from "./SearchItem.module.scss"
import { goodsType } from "../../../../lists/goodsList"


type SearchItemProps = {
    item: goodsType
}

const SearchItem: React.FC<SearchItemProps> = ({item}) => {
    return (  
        <div className={style.root}>
            <img src={item.imageURL} alt="good's image"/>
            <p className={style.name}>{item.name}</p>
            <p className={style.price}>${item.price}</p>
         </div>
    );
}
 
export default SearchItem;