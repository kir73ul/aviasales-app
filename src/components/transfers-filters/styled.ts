import styled from 'styled-components'
import image from './check.png'
import { tabletWidth } from './../../Constants/StyleConstants';

export const Wrapper = styled.div`
	position: sticky;
	top: 20px;
	z-index: 10;
	display: flex;
	flex-flow: column;
	background: #ffffff;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	height: fit-content;
	margin-right: 20px;

	@media (max-width: ${tabletWidth}) {
		top: 12px;
		margin-right: 0;
		margin-bottom: 12px;
	}
`
export const Title = styled.span`
	padding: 20px 20px 10px 20px;
	font-weight: 600;
	font-size: 12px;
	line-height: 12px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`
export const List = styled.ul`
	font-size: 13px;
	line-height: 20px;
	list-style: none;
	padding: 0;
	margin-top: 8px;

	input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
`
interface LabelProps {
	checked: boolean
}
export const Label = styled.label<LabelProps>`
	padding: 4px 24px;
	width: 100%;
	display: inline-flex;
	align-items: center;

	@media (max-width: ${tabletWidth}) {
		padding: 2px 20px;
	}

	&:hover {
		cursor: pointer;
		background-color: #f1fcff;
	}
	&::before {
		content: ' ';
		border-color: ${({ checked }) => checked && '#0b76ef'};
		background: ${({ checked }) => checked && `center no-repeat url(${image}) `};
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 1px solid #2196f3;
		border-radius: 2px;
		margin-right: 8px;
		text-align: center;
		vertical-align: bottom;
	}
`
export const Input = styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;
`
