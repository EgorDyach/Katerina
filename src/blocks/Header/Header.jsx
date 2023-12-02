import HeaderLink from "./HeaderLink/HeaderLink.jsx";
import Logo from "./Logo/Logo.jsx"
import PhoneNumber from "./PhoneNumber/PhoneNumber.jsx";
import "./Header.scss";
function Header() {
    return (
        <header className={"header"}>
            <div className={"container"}>
            <Logo src={""}/>
            <PhoneNumber  />
            <nav className={"header__nav"}>
                <ul className={"list-reset header__list"}>
                    <HeaderLink text={"О нас"} linkTo={"#AboutUs"}/>
                    <HeaderLink text={"Преимущества"} linkTo={"#advantages"}/>
                    <HeaderLink text={"Каталог"} linkTo={"#catalog"}/>
                    <HeaderLink text={"Отзывы"} linkTo={"#reviews"} />
                    <HeaderLink text={"Оформить заказ"} linkTo={"#offer"}/>
                    <HeaderLink text={"Контакты"} linkTo={"#contacts"}/>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;