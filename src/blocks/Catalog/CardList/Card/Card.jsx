import Text from "../../../../components/Text.jsx";
import {useContext, useState} from "react";
import {strOfGoods} from "../../../../goodsContext.js";

export let str = []

function Card({linkToImg, title, price, id, handle}) {
    return (
        <li className={"cardsList__item"} id={id}>
            <img className={"cardsList__item-img"} src={linkToImg} alt={""}/>
            <div className={"cardsList__item-content"}>
            <Text className={"cardsList__item-title"} As={"h3"} size={26} color={"#333"}>{title}</Text>
            <Text className={"cardsList__item-price"} As={"span"} size={16} color={"#333"}>{price} руб.</Text>
            <button className={"cardsList__item-btn btn-reset"} onClick={() => {
                handle(title)
            }}>Добавить в заказ</button>
            </div>
        </li>
    )
}

export default Card;