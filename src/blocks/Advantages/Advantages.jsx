import OneAdvantage from "./OneAdvantage/OneAdvantage.jsx";
import Text from "../../components/Text.jsx";
import "./advantages.scss"
function Advantages() {
    return (
        <section className={"advantages"}>
        <div className={"container"}>
            <Text className={"advantages__title"} As={"h2"} color={"#333"} size={40}>Преимущества</Text>

            <ul className={"list-reset advantages__list"}>
                <OneAdvantage className={"advantages__item"} linkToPicture={"https://img.freepik.com/free-photo/still-life-business-roles-with-various-pawns_23-2149352586.jpg?w=2000&t=st=1701557368~exp=1701557968~hmac=0e9ce7878e27fc9c4ef7112cd96f4e777597b9ad536d16333b624f8d9e8f67b8"} title={"Персональный подход"}>Благодаря нашим стилистам каждый из наших клентов получает своё!</OneAdvantage>
                <OneAdvantage className={"advantages__item"} linkToPicture={"https://img.freepik.com/free-photo/close-up-of-hands-with-thumbs-up_1139-309.jpg?w=2000&t=st=1701557334~exp=1701557934~hmac=3f47c92e5a064fe8690abb3cd9c92b40707a725ba64cb2a24890c50a79139cfdg"} title={"Отличное качество"}>Мы выбираем лучших поставщиков всей России для вашего комфорта!</OneAdvantage>
                <OneAdvantage className={"advantages__item"} linkToPicture={"https://img.freepik.com/free-photo/attractive-blond-happy-woman-sitting-relaxing-in-deck-chair-in-summer-outfit-blue-shirt-wearing-silver-sneakers-elegant-sunglasses-and-purse_285396-8272.jpg?w=2000&t=st=1701557288~exp=1701557888~hmac=9357cae3f50107d21ab01e9f9281bd0f967460c40dacc2263570f012fcbcad56"} title={"Ваше свободное время"}>Вам не требуется бродить по магазинам в поисках нужной вещи, достаточно прийти к нам!</OneAdvantage>
                <OneAdvantage className={"advantages__item"} linkToPicture={"https://img.freepik.com/free-photo/front-view-shopping-bags-cart-cyber-monday_23-2148657636.jpg?w=1480&t=st=1701551106~exp=1701551706~hmac=db5cd3423b2dd808c41732ec5bac3970d714955cb3f4f8f31f6cabdfefa409bf"} title={"Широкий и неповторимый ассортимент"}>Штучные и интересные вещи! Таких нет ни в одном месте, кроме нашего магазина!</OneAdvantage>
            </ul>
        </div>
        </section>
    )
}

export default Advantages;