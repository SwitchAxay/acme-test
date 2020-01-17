import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Logo from "../../Images/Logo.jpg";
import BagBlue from "../../Images/BagBlue.png";

import "./Header.css";

const Header = props => {
	return (
		<div className="Header">
			<img src={Logo} alt="" height="45px" />
			<div className="Header-menu-holder">
				<div className="Header-menu">Books</div>
				<div className="Header-menu">Blog</div>
				<div className="Header-menu">Contact</div>
				<div className="Header-menu">Login</div>
				<div className="Header-basket-holder">
					<div className="Header-basket">
						<img src={BagBlue} alt="" height="15px" />
						Basket
					</div>
					<div className="basket-count">
						{(props.data.count || {}).count || "0"}
					</div>
				</div>
			</div>
		</div>
	);
};

const query = gql`
	{
		count {
			count
		}
	}
`;

export default graphql(query)(Header);
