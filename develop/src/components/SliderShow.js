import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../helper/styleHelper';
import slider01 from '../assets/1.jpg';
import slider02 from '../assets/2.jpg';
import slider03 from '../assets/3.jpg';
import slider04 from '../assets/4.jpg';
import slider05 from '../assets/5.jpg';
import slider06 from '../assets/6.jpg';
import LeftSlider from './LeftSlider';
import RightSlider from './RightSlider';
import CurrentSlider from './CurrentSlider';
class SliderShow extends Component {
	state = {
		sliders: [
			{
				image: slider01,
				title: 'Lorem Ipsum 01',
				subtitle: 'by ab illo inventore veritatis',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider02,
				title: 'Lorem Ipsum 02',
				subtitle: 'by unde omnis iste natus error',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider03,
				title: 'Lorem Ipsum 03',
				subtitle: 'by sit voluptatem accusantium',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider04,
				title: 'Lorem Ipsum 04',
				subtitle: 'by ut perspiciatis unde omnis',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider05,
				title: 'Lorem Ipsum 05',
				subtitle: 'by qui ut dolorem ipsum quia',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider06,
				title: 'Lorem Ipsum 06',
				subtitle: 'by sed quia consequuntur magni',
				quote: 'Lorem ipsum dolor sit amet'
			}
		],
		current: 1,
		left: 0,
		right: 2,
		isAnimating: false,
		isNext: false,
		isBack: false
	};
	handleClick = (i) => {};
	back = () => {
		console.log(1);
	};
	next = () => {
		console.log(2);
	};
	render() {
		return (
			<Wrapper>
        <LeftSliderWrapper onClick={()=> console.log(1)}>
          <LeftSlider
            content={this.state.sliders[this.state.current - 1]}
          />
        </LeftSliderWrapper>
				<CurrentSlider
          content={this.state.sliders[this.state.current]}
				/>
        <RightSliderWrapper onClick={()=> console.log(1)}>
          <RightSlider
            content={this.state.sliders[this.state.current + 1]}
          />
        </RightSliderWrapper>
			</Wrapper>
		);
	}
}

export default SliderShow;

const Wrapper = styled.div`
	overflow: hidden;
	margin: 0;
	height: 100vh;
	display: grid;
	grid-template-columns: 10% 50% 10%;
	grid-column-gap: 15%;
	grid-template-rows: 100%;
	grid-template-areas: 'preview-left current-slide preview-right';
	position: relative;
	width: 100%;
	${media.pc} ${media.sp};
`;

const LeftSliderWrapper = styled.div`
  top: 0;
  grid-area: preview-left;
  border-right: 1px solid #dfdfdf;
  position: relative;
  pointer-events: auto;
`
const RightSliderWrapper = styled.div`
  top: 0;
  grid-area: preview-right;
  border-left: 1px solid #dfdfdf;
  position: relative;
  pointer-events: auto;
`
