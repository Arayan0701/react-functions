import React, { Component } from "react";
export default function Hook2Example() {
  const [user, setUser] = React.useState({
    name: "Guest",
    age: 25,
    ce: true,
    city: "rajkot",
  });
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br />
      <input
        type="number"
        placeholder="age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="city"
        value={user.city}
        onChange={(e) => setUser({ ...user, city: e.target.value })}
      />
      <br />
      <div>
        <label>
          <input
            type="checkbox"
            checked={user.ce}
            onChange={(e) => setUser({ ...user, ce: e.target.checked })}
          />
          CE Student
        </label>
      </div>
      <br />
      <h2>User Information:</h2>
      <br />
      <p>Name: {user.name}</p>
      <br />
      <p>Age: {user.age}</p>
      <br />
      <p>City: {user.city}</p>
      <br />
      <p>CE Student: {user.ce ? "Yes" : "No"}</p>
    </>
  );
}
