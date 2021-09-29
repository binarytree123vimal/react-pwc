import React from "react";

function UserList(props) {
    const { isLoading, filterUser } = props;
    return (
        <tbody>
            {isLoading &&
                <tr>
                    <td colSpan="5" text-align="center">Loading please wait...</td>
                </tr>}
            {!isLoading && filterUser && filterUser.length === 0 &&
                <tr>
                    <td colSpan="5" text-align="center">No data found...</td>
                </tr>
            }
            {filterUser && filterUser.length > 0 && filterUser.map(userData => <tr key={userData.id}>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.username}</td>
                <td>{userData.email}</td>
                <td>{userData.address.street} {userData.address.suite},{userData.address.city}, {userData.address.zipcode} ({userData.address.geo.lat},{userData.address.geo.lng})</td>
            </tr>)}
        </tbody>
    );
}

export default UserList;
