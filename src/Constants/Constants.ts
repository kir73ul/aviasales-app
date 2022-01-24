import { CarrierIconsType, Carriers, NumbersOfTransfers } from '../Types/Types'
import SU_CARRIER from '../Assets/Images/SU.png'
import S7_CARRIER from '../Assets/Images/S7.png'
import EK_CARRIER from '../Assets/Images/EK.png'
import EY_CARRIER from '../Assets/Images/EY.png'
import MH_CARRIER from '../Assets/Images/MH.png'
import TG_CARRIER from '../Assets/Images/TG.png'
import FV_CARRIER from '../Assets/Images/FV.png'

export const translateSortOfTickets = {
	cheapest: 'Самый дешевый',
	fastest: 'Самый быстрый',
}
export const translateNumberOfStops = {
	[NumbersOfTransfers.all]: 'Все',
	[NumbersOfTransfers.zero]: 'Без пересадок',
	[NumbersOfTransfers.one]: 'Одна пересадка',
	[NumbersOfTransfers.two]: 'Две пересадки',
	[NumbersOfTransfers.three]: 'Три пересадки',
}
export const url = {
	searchID: 'https://front-test.beta.aviasales.ru/search',
	tickets: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
	carrierLogo: 'https://pics.avs.io/99/36/carrier.png',
}

export const carrierIcons: CarrierIconsType = {
	[Carriers.SU]: SU_CARRIER,
	[Carriers.S7]: S7_CARRIER,
	[Carriers.EK]: EK_CARRIER,
	[Carriers.EY]: EY_CARRIER,
	[Carriers.MH]: MH_CARRIER,
	[Carriers.TG]: TG_CARRIER,
	[Carriers.FV]: FV_CARRIER,
}
