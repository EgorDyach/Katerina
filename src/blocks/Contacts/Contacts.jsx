import Text from "../../components/Text.jsx";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import "./contacts.scss"
function Contacts() {
    return (
        <section>
            <div className={"container"}>
            <Text As={"h2"} size={42} color={"#333"}>Наши контакты</Text>
                <div>
                    <Text As={"p"} size={24}>Наш Адрес: Южно-Сахалинск, ул.Комсомольская 271/2</Text>
                    <Text As={"p"} size={24}>Телефон: +7 (962) 120-02-51</Text>
                </div>
                    <YMaps>
                        <div>
                            <Map  className={"map"} defaultState={{ center: [46.93419433381239, 142.75309116918734], zoom: 14}}>
                                <Placemark geometry={[46.93419433381239, 142.75309116918734]} />
                            </Map>
                        </div>
                    </YMaps>
            </div>
        </section>
    )
}
// 46°56'03.1"N 142°45'11.4"E

export default Contacts;