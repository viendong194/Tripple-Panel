import React, { Component } from 'react';
import styled from 'styled-components';
class LeftSlider extends Component {
  render() {
    return (
      <SliderItem>
				<SliderImage>
					<ImageRevealer />
					<ImageBox background={this.props.content.image} />
				</SliderImage>
			</SliderItem>
    );
  }
}

export default LeftSlider;

const SliderItem = styled.div`
	width: 100%;
`;

const SliderImage = styled.div`
	width: 100%;
  height: 50%;
  top: 30%;
  overflow:hidden;
  position:absolute;
`;

const ImageBox = styled.div`
	width: 100%;
	height: 100%;
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
	transform: translate3d(0, 100%, 0);
	pointer-events: none;
`;

