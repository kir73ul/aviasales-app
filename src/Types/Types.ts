export enum SortOfTickets {
	cheapest = 'cheapest',
	fastest = 'fastest',
}
export enum NumbersOfTransfers {
	all = 'all',
	zero = '0',
	one = '1',
	two = '2',
	three = '3',
}
export enum ParametersOfFilter {
	lowerPrice = 'lowerPrice',
	biggerPrice = 'biggerPrice',
	departureDate = 'departureDate',
	arriveDate = 'arriveDate',
	airCompany = 'airCompany',
	pickDate = 'pickDate',
}
export enum Carriers {
	SU = 'SU',
	S7 = 'S7',
	EY = 'EY',
	MH = 'MH',
	EK = 'EK',
	FV = 'FV',
	TG = 'TG',
}

export type StopsType = {
	[key in NumbersOfTransfers]: boolean
}
export type FiltersStateType = {
	transfers: StopsType
	isMenuRolledUp: boolean
}
export interface SegmentType {
	origin: string
	destination: string
	date: string
	stops: string[]
	duration: number
}
export interface TicketsType {
	price: number
	carrier: string
	segments: [SegmentType, SegmentType]
}
export interface TicketsStateType {
	hasErrored: boolean
	isLoading: boolean
	tickets: TicketsType[]
}
export interface SelectedStateType {
	pickingDate: string | null
	sortingItem: ParametersOfFilter | Carriers | null
}
export type CarrierIconsType = Record<Carriers, string>
