import React, { Component } from 'react';
import styled from 'styled-components';
// import { media } from '../helper/styleHelper';
class Slider extends Component {
	render() {
		return (
			<SliderItem className={this.props.class_name}>
				<SliderImage>
					<ImageRevealer />
					<ImageBox
						background={this.props.content.image}
						class_name={this.props.class_name}
					/>
				</SliderImage>
				<SliderText
					hide={this.props.class_name === 'current' ? false : true}>
					<SliderTitle>
						<TextRevealer />
						<Title>{this.props.content.title}</Title>
					</SliderTitle>
					<SliderSubTitle>
						<TextRevealer />
						<Title>{this.props.content.subtitle}</Title>
					</SliderSubTitle>
					<SliderQuote>
						<Title>{this.props.content.quote}</Title>
					</SliderQuote>
				</SliderText>
			</SliderItem>
		);
	}
}

export default Slider;

const SliderItem = styled.div`
	width: 100%;
	top: 0;
	position: absolute;
	pointer-events: none;
	&.current {
		grid-area: current-slide;
		position: relative;
		pointer-events: auto;
	}
	&.right {
		grid-area: preview-right;
		border-left: 1px solid #dfdfdf;
		position: relative;
		pointer-events: auto;
		cursor: pointer;
	}
	&.left {
		grid-area: preview-left;
		border-right: 1px solid #dfdfdf;
		position: relative;
		pointer-events: auto;
		cursor: pointer;
	}
`;

const SliderImage = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
`;

const ImageBox = styled.div`
	width: 100%;
	height: ${(props) =>
		props.class_name === 'right'
			? '50%'
			: props.class_name === 'left'
				? '50%'
				: '100%'};
	top: ${(props) =>
		props.class_name === 'right'
			? '20%'
			: props.class_name === 'left'
				? '20%'
				: '0'};
	position: absolute;
	pointer-events: none;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${(props) => props.background});
	background-position: 50% 0;
`;

const ImageRevealer = styled.div`
	position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  transform: translate3d(0,100%,0);
  pointer-events: none;
`;

const SliderText = styled.div`
	display: ${(props) => (props.hide ? 'none' : 'flex')};
	flex-direction: column;
	align-items: flex-end;
	max-width: 400px;
	position: absolute;
	top: 35%;
	right: 50%;
	color: white;
`;

const SliderTitle = styled.h3`
	padding: 0.35rem 0.25rem 0.35rem;
	font-size: 4vw;
	margin: 0 0 0.8rem;
	font-weight: normal;
	line-height: 1;
	white-space: nowrap;
	position: relative;
	overflow: hidden;
`;

const SliderSubTitle = styled.h4`
	font-size: 1.8vw;
	line-height: 1.5;
	margin: 0 0 0.2rem;
	padding: 0.2rem 0.5rem;
	font-weight: normal;
	white-space: nowrap;
	position: relative;
	overflow: hidden;
`;

const SliderQuote = styled.p`
	max-width: 25vw;
	text-align: right;
`;

const Title = styled.span`
  position:relative;
`;
const TextRevealer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
  background: black;
`;
