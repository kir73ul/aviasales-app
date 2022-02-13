import styled from 'styled-components'
import { middleWidth, tabletWidth } from './../../Constants/StyleConstants'

export const CardOfTicket = styled.li`
	background: #ffffff;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	margin-top: 20px;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 2fr repeat(4, 1fr);

	@media (max-width: ${tabletWidth}) {
		padding: 12px;
		margin-top: 12px;
		width: 100%;
	}

	@media (max-width: ${middleWidth}) and (min-width: ${tabletWidth}) {
		width: calc(230px + (100vw - 476px));
	}
`
export const Price = styled.span`
	color: #2196f3;
	font-size: 24px;
	align-self: center;

	@media (max-width: ${tabletWidth}) {
		font-size: 20px;
	}
`
export const AirlineImg = styled.img`
	grid-column: 3;
	align-self: center;
`
export const Subtitle = styled.span`
	margin-top: 10px;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	color: #a0b0b9;

	@media (max-width: ${tabletWidth}) {
		font-size: 10px;
	}
`
export const Parameter = styled.span`
	font-weight: 600;
	font-size: 14px;
	color: #4a4a4a;

	@media (max-width: ${tabletWidth}) {
		font-size: 12px;
	}
`
export const Date = styled.span`
	font-weight: 600;
	font-size: 14px;
	color: #4a4a4a;

	@media (max-width: ${tabletWidth}) {
		font-size: 12px;
	}
`
