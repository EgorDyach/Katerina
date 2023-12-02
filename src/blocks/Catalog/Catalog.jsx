import Flex from "../../components/Flex.jsx";
import Text from "../../components/Text.jsx";
import CardList from "./CardList/CardList.jsx";
import "./catalog.scss"
import {useEffect, useState} from "react";
import {str} from "./CardList/Card/Card.jsx";
function Catalog() {
    const [str, setStr] = useState('')
    return (
        <>
        <section className={"catalog"}>
            <div className={"container"}>
                <Text As={"h2"} color={"#333"} size={42}>Каталог</Text>
                <CardList func={(e) => {setStr(e)}} className={"cardsList list-reset"} />
            </div>
        </section>
        <section className={"form"}>
            <input id={"goods"} className={"form__goods"} type={"text"} value={str} onChange={(e) => setStr(e.value)} placeholder={"Ваши товары"}/>
            <input id={"phone"} className={"form__phone"} type={"number"} placeholder={"Ваш Номер"}/>
            <button className={"form__btn"} onClick={() => {
                alert('Данные отправлены! Отчет можно посмотреть в консоли')
                console.log("Товар:", document.getElementById("goods").value,"; Телефон:", document.getElementById("phone").value )
            }}>Отправить</button>
        </section>
        </>
    )
}

export default Catalog;