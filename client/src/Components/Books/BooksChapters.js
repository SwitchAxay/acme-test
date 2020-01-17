import React, { useState } from "react";

import Minus from "../../Images/Minus.png";
import Plus from "../../Images/Plus.png";

const Chapter = props => {
	const showHideDetailsBox = () => {
		if (props.index === props.showBoxIndex) {
			props.updateImageName(null);
			props.updateShowBoxIndex(null);
		} else {
			props.updateImageName(props.image);
			props.updateShowBoxIndex(props.index);
		}
	};

	return (
		<div className="Chapter-row">
			<div className="Chapter-row-header">
				<div>{props.title}</div>
				<img
					src={props.index === props.showBoxIndex ? Minus : Plus}
					alt=""
					height="18px"
					onClick={showHideDetailsBox}
				/>
			</div>
			{props.index === props.showBoxIndex ? (
				<div className="Chapter-row-detail">
					Author express the huge requirement of new ideas and uniqueness
				</div>
			) : null}
		</div>
	);
};

const BooksChapters = () => {
	const [imageName, setImageName] = useState(null);
	const [showBoxIndex, setShowBoxIndex] = useState(null);

	const updateImageName = name => {
		setImageName(name);
	};

	const updateShowBoxIndex = index => {
		setShowBoxIndex(index);
	};

	return (
		<div className="BooksChapters">
			<div className="BooksChapters-chapter">
				<Chapter
					title="Including success stories of Mark and Musk"
					image="Img1.jpeg"
					updateImageName={updateImageName}
					updateShowBoxIndex={updateShowBoxIndex}
					index="1"
					showBoxIndex={showBoxIndex}
				/>
				<Chapter
					title="Must-Read!"
					image="Img2.jpeg"
					updateImageName={updateImageName}
					updateShowBoxIndex={updateShowBoxIndex}
					index="2"
					showBoxIndex={showBoxIndex}
				/>
				<Chapter
					title="Best book for entrepreneurs."
					image="Img3.jpeg"
					updateImageName={updateImageName}
					updateShowBoxIndex={updateShowBoxIndex}
					index="3"
					showBoxIndex={showBoxIndex}
				/>
				<Chapter
					title="Zero to one is not a single step...."
					image="Img4.jpeg"
					updateImageName={updateImageName}
					updateShowBoxIndex={updateShowBoxIndex}
					index="4"
					showBoxIndex={showBoxIndex}
				/>
				<Chapter
					title="Recommendations for improvement"
					image="Img5.jpeg"
					updateImageName={updateImageName}
					updateShowBoxIndex={updateShowBoxIndex}
					index="5"
					showBoxIndex={showBoxIndex}
				/>
			</div>
			<div className="BooksChapters-image-holder">
				{imageName ? (
					<img
						src={require(`../../Images/chapter/${imageName}`)}
						alt=""
					/>
				) : null}
			</div>
		</div>
	);
};

export default BooksChapters;
