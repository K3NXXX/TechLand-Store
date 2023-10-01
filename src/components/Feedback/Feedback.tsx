import FeedbackCard from "./FeedbackCard/FeedbackCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import { feedbackList, feedbackListType } from "../../lists/feedbackList";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import style from "./Feedback.module.scss"
import close from "../../assets/header/close.svg"
import 'swiper/css';
import 'swiper/css/pagination';

const Feedback: React.FC = () => {

    const [comment, setComment] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [feedback, setFeedback] = useState<string>("")
    const [remove, setRemove] = useState<boolean>(false)
    const popupRef = useRef<HTMLDivElement>(null)

    const addFeedback = () => {
        if (name && feedback && name.length < 50 && feedback.length < 350) {
            const newFeedBack: feedbackListType = {
                id: feedbackList.length + 1,
                name: name,
                comment: feedback,
            }
            feedbackList.push(newFeedBack)
        }
        setRemove(true)
        setName("")
        setFeedback("")
        setComment(false)
    }

    const removeFeedback = () => {
        if (feedbackList.length > 0) {
            feedbackList.pop();
            setRemove(false);
        }
    };

    useClickOutside(popupRef, () => {
        if(popupRef) setTimeout(() => setComment(false), 50)
    })

    return (  
        <div className={style.wrapper}>
        <section className={style.root}>
            <div className={style.comments__list}>
                <Swiper
                spaceBetween={100}
                slidesPerView={1}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                speed={1000}
                >
                {feedbackList.map((item) => (
                        <SwiperSlide key={item.id}><FeedbackCard  item = {item}/></SwiperSlide>
                    ))}
                </Swiper>
                {!remove ? (<button onClick={() => setComment(true)} className={style.addBtn}>Leave Us A Review</button>) : ""}
                {remove && (<button onClick={() => removeFeedback()} className={style.removeBtn}>Remove feedback</button>)}

            </div>
            {comment && (
                <div ref={popupRef} className={style.modal}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="name"/>
                    <input onChange={(e) => setFeedback(e.target.value)} type="text" placeholder="your feedback (max 320 characters)"/>
                    <button  onClick={addFeedback}>Add feedback</button>
                    <img onClick={() => setComment(false)} className={style.close} src={close} alt="close-icon" />
                </div>
            )}

        </section>
        </div>
    );
}
 
export default Feedback;