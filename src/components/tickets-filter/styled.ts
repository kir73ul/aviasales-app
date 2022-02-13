import styled, { CSSProperties } from 'styled-components'
import { minScreenHeight, minScreenWidth, tabletWidth } from './../../Constants/StyleConstants'

interface WrapProps {
	position?: CSSProperties['position']
	top?: CSSProperties['top']
	width?: CSSProperties['width']
	marginTop?: CSSProperties['marginTop']
	zIndex?: CSSProperties['zIndex']
	isHidden?: boolean
}
export const Wrapper = styled.div<WrapProps>`
	position: ${({ position }) => position ?? 'sticky'};
	top: ${({ top }) => top ?? '236px'};
	margin: ${({ marginTop }) => marginTop ?? '12px'} 20px 0 0;
	z-index: ${({ zIndex }) => zIndex ?? 1};
	transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

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
		position: 'sticky';
		width: 'min-content';
		display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};

		@media (max-width: ${tabletWidth}) {
			min-heighth: ${minScreenHeight};
			min-width: ${minScreenWidth};
			width: 100%;
		}
	}
`