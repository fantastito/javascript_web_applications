import React from "react";
const Profile = (props) => {
    return (
        <div id="profile">
        <h1 id="name">{props.name}</h1>
        <p id="job" name="job" role='paragraph'>{props.job}</p>
        <p id="birthdate" role='paragraph'>{props.birthdate}</p>
    </div>
    );
};
export default Profile;