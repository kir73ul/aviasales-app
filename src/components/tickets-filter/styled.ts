import styled from 'styled-components'

interface WrapProps {
	position?: string
	top?: string
	width?: string
	marginTop?: string
}
export const Wrapper = styled.div<WrapProps>`
	position: ${(props) => props.position || 'sticky'} 
	top: ${(props) => props.top || '245px'} 
	width: ${(props) => props.width || '206.4px'}
	margin-top: ${(props) => props.marginTop || '20px'};
`
