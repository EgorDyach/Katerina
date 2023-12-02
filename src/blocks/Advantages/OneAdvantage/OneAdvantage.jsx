import Text from "../../../components/Text.jsx";

function OneAdvantage({ className, linkToPicture, title, children}) {
    return (
        <li className={className}>
            <div style={{backgroundImage: `url(.${linkToPicture})`}} className={"advantages__item-img"}> </div>
            <div className={"advantages__item-content"}>
                <Text color={"#333"} As={"h3"} size={26}>{title}</Text>
                <Text As={"p"} color={"#333"} size={18}>{children}</Text>
            </div>
        </li>
    )
}

export default OneAdvantage;