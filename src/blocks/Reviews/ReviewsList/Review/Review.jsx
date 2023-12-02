import Text from "../../../../components/Text.jsx";

function Review({title, linkToImg, descr, name, id}) {
    return (
        <li className={"reviews__item"} id={id} key={id}>
            <div className={"reviews__item-img-name"}>
            <div className={"reviews__item-img"} style={{backgroundImage: `url(${linkToImg})`}}></div>
            <Text As={"span"} size={24} color={"#111"}>{name}</Text>
            </div>
            <div className={"reviews__item-content"}>
                <Text As={"h3"} size={24} color={"#333"}>{title}</Text>
                <Text As={"p"} size={20} color={"#333"}>{descr}</Text>
            </div>
        </li>
    )
}

export default Review;