import ReviewsList from "./ReviewsList/ReviewsList.jsx";
import Text from "../../components/Text.jsx";
import "./reviews.scss";
function Reviews() {
    return (
        <section className={"reviews"}>
            <div className={"container"}>
            <Text As={"h2"} color={"#333"} size={42}>Отзывы о нас</Text>
                <ReviewsList />
            </div>
        </section>
    )
}

export default Reviews;