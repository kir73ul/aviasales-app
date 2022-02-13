import styled from 'styled-components'
import { middleWidth, tabletWidth } from './../../Constants/StyleConstants'

interface ButtonProps {
	isActive: boolean
}
interface MenuProps {
	isMenuRolledUp: boolean
}
export const PriorityButton = styled.button<ButtonProps>`
    color: ${({ isActive }) => (isActive ? 'white' : 'inherit')};
    background: ${({ isActive }) => (isActive ? ' #2196f3' : 'inherit')}; 
    cursor: pointer;
    flex: 1 0 50%;
    margin: 0;
    border: none;
    outline: none;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    padding: 12px;

    @media (max-width: ${tabletWidth}) {
        font-size: 10px;
        padding: 8px;
    }

    &:first-of-type {
        border-radius: 5px 0 0 5px;
    }

    &:last-of-type {
        border-radius: 0 5px 5px 0;
    }
    }
`
export const Menu = styled.div<MenuProps>`
	position: sticky;
	z-index: 10;
	top: 20px;
	display: flex;
	align-content: space-around;
	background: #ffffff;
	border-radius: 5px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	min-width: 420px;

	@media (max-width: ${tabletWidth}) {
		top: ${({ isMenuRolledUp }) => (isMenuRolledUp ? '172px' : '320px')};
		min-width: unset;
        transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	@media (max-width: ${middleWidth}) and (min-width: ${tabletWidth}) {
		min-width: calc(230px + (100vw - 476px));
	}
`
