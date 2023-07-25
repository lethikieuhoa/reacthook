//import { useState, useEffect } from "react";
//import axios from "axios";
import useFetch from './customize/fetch.js';
const Usersnode = () => {
    const { users, loading } = useFetch(`http://localhost:8080/api/get-all-user?id=ALL`, true);
    // console.log(users);
    return (
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {loading === false && users && users.length > 0 && users.map((user, index) => {
                    return (<tr key={index}>
                        <td>{user.email}</td>
                        <td>{user.lastName + ' ' + user.firstName}</td>
                        <td>{user.address}</td>
                    </tr>);
                })}
                {loading === true &&
                    <tr><td colSpan={5} style={{ 'textAlign': 'center' }}>Loading...</td></tr>
                }

            </tbody>


        </table>
    );
}
export default Usersnode;