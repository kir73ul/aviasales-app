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
export type TransfersKey = keyof typeof NumbersOfTransfers

export type FiltersStateType = {
	[key in NumbersOfTransfers]: boolean
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
export interface initialTicketsStateType {
	hasErrored: boolean
	isLoading: boolean
<<<<<<< HEAD
	tickets: TicketsType[]
	filteredTickets: TicketsType[]
}
export interface InitialSelectedStateType {
	pickingDate: string | null
	sortingItem: ParametersOfFilter | Carriers | null
=======
	items: TicketsType[]
	portionOfItems: TicketsType[]
>>>>>>> 4765ca1df7fd38bb3540baf530403659cf0ea3ee
}
