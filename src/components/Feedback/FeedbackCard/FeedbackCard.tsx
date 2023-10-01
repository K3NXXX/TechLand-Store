import { feedbackListType } from "../../../lists/feedbackList";
import style from "./FeedbackCard.module.scss"

type FeedbackCardType = {
    item: feedbackListType
}

const FeedbackCard: React.FC<FeedbackCardType> = ({item}) => {
    return (  
        <div className={style.root}>
            <div className={style.wrapper}>
                <span>‘’</span>
                <p className={style.comment}>{item.comment}</p>
            </div>
            <p className={style.name}>- {item.name}</p>

        </div>
    );
}
 
export default FeedbackCard;