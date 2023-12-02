import {reviews} from "../../../assets/reviews.js";
import Review from "./Review/Review.jsx";

function ReviewsList() {
    return (
        <ul className={"list-reset reviews__list"}>
            {reviews.map((e) => {
                return <Review
                    key={e.id}
                    id={e.id}
                    linkToImg={e.linkToImg}
                    title={e.title}
                    name={e.name}
                    descr={e.descr}
                />
            })}
        </ul>
    )
}

export default ReviewsList;