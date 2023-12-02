import Card from "./Card/Card.jsx";
import {goods} from "../../../assets/goods.js";
function CardList({className, func}) {
    let goodsItems = [...goods]
    return (
        <ul className={className}>
            {goodsItems.map((e) => {
                return <Card handle={(e) => {
                    func(e)
                }} title={e["Название"]} linkToImg={e["linkToImg"]} price={e["Цена"]} id={e.id}/>
            })}
        </ul>
    )
}

export default CardList;