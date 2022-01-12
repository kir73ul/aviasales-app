import styled from 'styled-components'


export const AppWrapper = styled.div`
	background: #f3f7fa;
	min-height: 100vh;
	font-family: 'Open Sans', sans-serif;
`
export const LinkedImage = styled.div`
	width: fit-content;
	margin: 50px auto;

	@media (max-width: 476px) {
		margin: 12px auto;
	}
`
export const Header = styled.div`
	z-index: 3;
	background-color: #f3f7fa;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 60px;

	@media (max-width: 476px) {
		height: 238px;
	}
`
export const MainContent = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	flex-flow: row;
	justify-content: center;

	@media (max-width: 476px) {
		flex-flow: column;
	}
`
export const FilterWrap = styled.div`
	position: sticky;
	margin-bottom: 20px;
`