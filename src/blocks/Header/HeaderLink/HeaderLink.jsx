import Text from "../../../components/Text.jsx";

function HeaderLink({linkTo, text}) {
    return (
        <Text className={"header__item"} size={16} color={"#333"} As={"li"}>
            <a href={linkTo} className={"header__link"}>{text}</a>
        </Text>
    )
}
export default HeaderLink;