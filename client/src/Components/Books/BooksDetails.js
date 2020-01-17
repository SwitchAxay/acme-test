import React, { useState } from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Right from "../../Images/Right.png";
import Minus from "../../Images/Minus.png";
import Plus from "../../Images/Plus.png";
import Bag from "../../Images/Bag.png";

const BooksDetails = props => {
	const [count, setCount] = useState(1);

	const handleIncreaseCount = () => {
		if (count >= 120) return;
		setCount(count + 1);
	};

	const handleDecreaseCount = () => {
		if (count <= 1) return;
		setCount(count - 1);
	};

	const handleAddToCartClick = () => {
		props.mutate({
			variables: {
				count: count
			},
			refetchQueries: [
				{
					query: gql`
						{
							count {
								count
							}
						}
					`
				}
			]
		});
	};

	return (
		<div className="BooksDetails">
			<div className="BooksDetails-holder">
				<div className="BooksDetails-details">
					<div className="BooksDetails-title">Zero to One</div>
					<div className="BooksDetails-desc">
						The next Bill Gates will not build an operating system. The next
						Larry Page or Sergey Brin won't make a search engine. If you are
						copying these guys, you aren't learning from them. It's easier to
						copy a model than to make something new
					</div>
				</div>
				<div className="BooksDetails-box">
					<div className="BooksDetails-box-row">
						<img
							className="BooksDetails-box-tick"
							src={Right}
							alt=""
							height="12px"
						/>
						<div>
							<span className="BooksDetails-box-label">Publisher:</span>
							Random House; 2014 edition (18 September 2014)
						</div>
					</div>
					<div className="BooksDetails-box-row">
						<img
							className="BooksDetails-box-tick"
							src={Right}
							alt=""
							height="12px"
						/>
						<div>
							<span className="BooksDetails-box-label">Paperback:</span>
							210 pages
						</div>
					</div>
					<div className="BooksDetails-box-row">
						<img
							className="BooksDetails-box-tick"
							src={Right}
							alt=""
							height="12px"
						/>
						<div>
							<span className="BooksDetails-box-label">Language:</span>
							English
						</div>
					</div>
					<div className="BooksDetails-box-row">
						<img
							className="BooksDetails-box-tick"
							src={Right}
							alt=""
							height="12px"
						/>
						<div>
							<span className="BooksDetails-box-label">ISBN-10:</span>
							9780753555194
						</div>
					</div>
					<div className="BooksDetails-box-row BooksDetails-box-row-last">
						<img
							className="BooksDetails-box-tick"
							src={Right}
							alt=""
							height="12px"
						/>
						<div>
							<span className="BooksDetails-box-label">ISBN-13:</span>
							978-0753555194
						</div>
					</div>
					<div className="BooksDetails-box-count">
						<div className="BooksDetails-box-total">120</div>
						<div className="BooksDetails-box-qty">
							<img
								className="BooksDetails-box-increase"
								src={Minus}
								alt=""
								onClick={handleDecreaseCount}
							/>
							<div className="BooksDetails-box-current">{count}</div>
							<img
								className="BooksDetails-box-decrease"
								src={Plus}
								alt=""
								onClick={handleIncreaseCount}
							/>
						</div>
					</div>
					<div
						className="BooksDetails-box-button"
						onClick={handleAddToCartClick}
					>
						<img src={Bag} alt="" height="15px" />
						Add to Basket
					</div>
				</div>
			</div>
		</div>
	);
};

const mutation = gql`
	mutation UpdateCount($count: Int) {
		updateCount(count: $count) {
			count
		}
	}
`;

export default graphql(mutation)(BooksDetails);
