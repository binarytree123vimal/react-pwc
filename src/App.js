import React, { useState, useEffect } from "react";
import { getUser } from './services/index.js';
import UserList from "./components/userList.js";
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUser().then((resp) => {
      setUser(resp);
      setFilterUser(resp);
      setIsLoading(false);
    });
  }, []);

  const handleChange = event => {
    setIsLoading(true);
    const searchKeyword = event.target.value.trim();
    setSearchTerm(event.target.value);
    if (searchKeyword !== '') {
      let filterResult = [];
      user.filter((elem) => {
        if (
          elem.id == searchKeyword ||
          elem.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.username.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.address.street.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.address.suite.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.address.city.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.address.zipcode.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          elem.address.geo.lat.includes(searchKeyword) ||
          elem.address.geo.lng.includes(searchKeyword)
        ) {
          filterResult.push(elem);
        }
      });
      setFilterUser(filterResult);
      setIsLoading(false);
    } else {
      setFilterUser(user);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h2>User List</h2>
        <div className="searchTerm">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          <UserList 
          filterUser={filterUser}
          isLoading={isLoading}
          />
        </table>
      </div>
    </div>
  );
}

export default App;
