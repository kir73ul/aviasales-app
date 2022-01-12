import styled from 'styled-components'

export const PriorityButton = styled.button`
    cursor: pointer;
    flex: 1 0 50%;
    margin: 0;
    border: none;
    outline: none;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    padding: 12px;

    @media (max-width: 476px) {
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
export const Menu = styled.div`
	position: sticky;
	z-index: 10;
	top: 20px;
	display: flex;
	align-content: space-around;
	background: #ffffff;
	border-radius: 5px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	min-width: 420px;

	@media (max-width: 476px) {
		top: 206px;
		min-width: unset;
	}
`
