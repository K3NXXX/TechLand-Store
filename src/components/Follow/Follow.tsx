import FollowCard from "./FollowCard/FollowCard";
import { followListCard } from "../../lists/followListCard";
import style from "./Follow.module.scss"

const Follow: React.FC = () => {
    return (  
        <section className={style.root}>
            <h4 className={style.title}>Follow us on Instagram for News, Offers & More</h4>
            <div className={style.follow__list}>
                {followListCard.map((item) => (
                    <FollowCard key={item.id} item = {item}/>
                ))}
            </div>
        </section>
    );
}
 
export default Follow;