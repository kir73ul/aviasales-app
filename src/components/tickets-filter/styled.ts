import styled, { CSSProperties } from 'styled-components'
import { minScreenWidth, tabletWidth } from './../../Constants/StyleConstants'

interface WrapProps {
	position?: CSSProperties['position']
	top?: CSSProperties['top']
	width?: CSSProperties['width']
	marginTop?: CSSProperties['marginTop']
	zIndex?: CSSProperties['zIndex']
}
export const Wrapper = styled.div<WrapProps>`
	position: ${(props) => props.position || 'sticky'};
	top: ${(props) => props.top || '235.67px'};
	margin: ${(props) => props.marginTop || '12px'} 20px 0 0;
	z-index: ${(props) => props.zIndex || 1};

	@media (max-width: ${tabletWidth}) {
		top: 0;
		margin: 0 0 12px;
	}

	.ant-picker,
	.ant-space-item,
	.ant-space,
	.ant-select {
		display: flex;
		width: 100%;
	}

	.ant-picker-dropdown,
	.ant-picker-panel-container,
	.ant-picker-panel {
		display: flex;

		@media (max-width: ${tabletWidth}) {
			min-width: ${minScreenWidth};
		}
	}
`
