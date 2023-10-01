import { followListCardType } from "../../../lists/followListCard";
import style from "./FollowCard.module.scss"

type FollowCardProps = {
    item: followListCardType
}

const FollowCard: React.FC<FollowCardProps> = ({item}) => {
    return (  
        <div className={style.root}>
            <img src={item.image} alt="card image" />
            <p className={style.description}>{item.text}</p>
            <p className={style.date}>{item.date}</p>
        </div>
    );
}
 
export default FollowCard;