import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Book = ({ book }) => {
	return (
		<div className="BooksList-box">
			<div>
				<div className="BooksList-box-title">{book.name}</div>
				<div className="BooksList-box-chapter">{book.chapter} chapters</div>
			</div>
			<div className="BooksList-box-bottom">
				<div className="BooksList-box-bottom-qty">{book.qty}</div>
				<div className="BooksList-box-bottom-view">View Details</div>
			</div>
		</div>
	);
};

const BooksList = props => {
	return (
		<div className="BooksList">
			<div className="BooksList-holder">
				<div className="BooksList-title">More Books</div>
				<div className="BooksList-box-holder">
					{(props.data.books || []).map(book => (
						<Book key={book.id} book={book} />
					))}
				</div>
				<div className="BooksList-bottom">
					<div className="BooksList-all">View All Books</div>
				</div>
			</div>
		</div>
	);
};

const query = gql`
	{
		books {
			id
			name
			qty
			chapter
		}
	}
`;

export default graphql(query)(BooksList);
