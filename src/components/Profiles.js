import React from "react";
import "./Profiles.css";

const Profiles = ({ profileName, url }) => {
    return (
		<React.Fragment>
			<a href={url} className="profile-wrapper">
				<div>{profileName}</div>
            </a>
		</React.Fragment>
	);
};

export default Profiles;
