import React from "react";

const Link = ({ active, children, onFilterClick }) => {
	if (active) {
		return <span>{children}</span>;
	} else {
		return (
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			<a
				href="#"
				onClick={(e) => {
					e.preventDefault();
					onFilterClick();
				}}
			>
				{children}
			</a>
		);
	}
};

export default Link;
