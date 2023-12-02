import OneAdvantage from "./OneAdvantage/OneAdvantage.jsx";
import Text from "../../components/Text.jsx";
import "./advantages.scss"
function Advantages() {
    return (
        <section className={"advantages"}>
        <div className={"container"}>
            <Text className={"advantages__title"} As={"h2"} color={"#333"} size={40}>Преимущества</Text>

            <ul className={"list-reset advantages__list"}>
                <OneAdvantage className={"advantages__item"} linkToPicture={"/src/img/advantages/advantagesIndividum.jpg"} title={"Персональный подход"}>Благодаря нашим стилистам каждый из наших клентов получает своё!</OneAdvantage>
                <OneAdvantage className={"advantages__item"} linkToPicture={"/src/img/advantages/advantagesNiceQuality.jpg"} title={"Отличное качество"}>Мы выбираем лучших поставщиков всей России для вашего комфорта!</OneAdvantage>
                <OneAdvantage className={"advantages__item"} linkToPicture={"/src/img/advantages/advantagesFreeTime.jpg"} title={"Ваше свободное время"}>Вам не требуется бродить по магазинам в поисках нужной вещи, достаточно прийти к нам!</OneAdvantage>
                <OneAdvantage className={"advantages__item"} linkToPicture={"/src/img/advantages/advantagesBigSort.jpg"} title={"Широкий и неповторимый ассортимент"}>Штучные и интересные вещи! Таких нет ни в одном месте, кроме нашего магазина!</OneAdvantage>
            </ul>
        </div>
        </section>
    )
}

export default Advantages;