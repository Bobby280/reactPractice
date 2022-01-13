import React from "react";
import FilterLink from "./FilterLink";

const Footer = () => {
	return (
		<p>
			SHOW:
			<FilterLink filter="all">ALL</FilterLink>{" "}
			<FilterLink filter="active">ACTIVE</FilterLink>{" "}
			<FilterLink filter="compeleted">COMPELETED</FilterLink>{" "}
		</p>
	);
};

export default Footer;
