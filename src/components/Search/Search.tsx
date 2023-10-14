import style from "./Search.module.scss"
import search from "../../assets/header/search.svg"

const Search: React.FC = () => {
    return (  
        <div className={style.searchInput}>
            <input type="text" placeholder="Search entiere store here..."/>
            <img className={style.searchInput__img} src={search} alt="search"/>
        </div>
    );
}
 
export default Search;