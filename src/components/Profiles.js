import React from "react";
import "./Profiles.css";

const Profiles = ({ profileName, url, id }) => {
	return (
		<React.Fragment>
			<a href={url} className="profile-wrapper" id={id}>
				<div>{profileName}</div>
			</a>
		</React.Fragment>
	);
};

export default Profiles;
