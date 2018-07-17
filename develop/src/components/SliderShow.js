import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../helper/styleHelper';
import slider01 from '../assets/1.jpg';
import slider02 from '../assets/2.jpg';
import slider03 from '../assets/3.jpg';
import slider04 from '../assets/4.jpg';
import slider05 from '../assets/5.jpg';
import slider06 from '../assets/6.jpg';
import Slider from './Slider';
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
				subtitle: 'by ab illo inventore veritatis',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider03,
				title: 'Lorem Ipsum 03',
				subtitle: 'by ab illo inventore veritatis',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider04,
				title: 'Lorem Ipsum 04',
				subtitle: 'by ab illo inventore veritatis',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider05,
				title: 'Lorem Ipsum 05',
				subtitle: 'by ab illo inventore veritatis',
				quote: 'Lorem ipsum dolor sit amet'
			},
			{
				image: slider06,
				title: 'Lorem Ipsum 06',
				subtitle: 'by ab illo inventore veritatis',
				quote: 'Lorem ipsum dolor sit amet'
			}
		],
		current: 1
	};
	render() {
		const { sliders } = this.state;
		return (
			<Wrapper>
				{sliders.map((slider, i) => (
					<Slider
						key={i}
						content={slider}
						class_name={
							i === this.state.current
								? 'current'
								: i === this.state.current - 1
									? 'left'
									: i === this.state.current + 1
										? 'right'
										: ''
						}
					/>
				))}
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
