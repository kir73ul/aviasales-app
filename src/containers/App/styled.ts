import styled from 'styled-components'
import { minScreenWidth } from '../../Constants/StyleConstants'
import { tabletWidth } from './../../Constants/StyleConstants'

interface HeaderProps {
	isMenuRolledUp: boolean
}

export const AppWrapper = styled.div`
	background: #f3f7fa;
	min-height: 100vh;
	font-family: 'Open Sans', sans-serif;
	min-width: ${minScreenWidth};
`
export const LinkedImage = styled.div`
	width: fit-content;
	margin: 50px auto;
	position: relative;

	@media (max-width: ${tabletWidth}) {
		margin: 12px auto;
		z-index: 5;
	}
`
export const Header = styled.div<HeaderProps>`
	background-color: #f3f7fa;
	position: fixed;
	top: 0;
	width: 100vw;
	min-width: ${minScreenWidth};
	height: 60px;

	@media (max-width: ${tabletWidth}) {
		height: ${({ isMenuRolledUp }) => (isMenuRolledUp ? '173px' : '320px')};
	}
`
export const MainContent = styled.div`
	z-index: 10;
	width: 80%;
	margin: auto;
	display: flex;
	flex-flow: row;
	justify-content: center;

	@media (max-width: ${tabletWidth}) {
		flex-flow: column;
	}
`
export const FilterWrap = styled.div`
	position: sticky;
	margin-bottom: 12px;

	@media (max-width: ${tabletWidth}) {
		top: 20px;
		z-index: 12;
	}
`
