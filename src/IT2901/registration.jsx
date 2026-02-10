// create a registration form with follwing details:
// 1. Name(text)
// 2. Email(Text)
// 3. Password(Text,Regular Expression)
// 4. Confirm Password(Text, Regular Expression , should match password)
// 5. Gender(radio buttons)
// 6. Country (dropdown with at least 5 countries)
// 7. Terms and Conditions (checkbox)
// 8. Color Picker(color input)
// 9. Date Picker(date input)
// 10. Submit Button(on submit, show all the details in an alert box,all fields are mandatory)

import React, { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const [color, setColor] = useState("#000000");
  const [date, setDate] = useState("");

  // Password conditions
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasLength, setHasLength] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setHasUppercase(/[A-Z]/.test(value));
    setHasNumber(/[0-9]/.test(value));
    setHasLength(value.length >= 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !gender ||
      !country ||
      !date
    ) {
      setError("All fields are mandatory!");
      return;
    }

    if (!hasUppercase || !hasNumber || !hasLength) {
      setError("Password does not meet all conditions");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!terms) {
      setError("Please accept Terms & Conditions");
      return;
    }

    setSubmittedData({
      name,
      email,
      gender,
      country,
      color,
      date
    });
  };

  return (
    <div style={{ maxWidth: "450px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <ul style={{ fontSize: "14px" }}>
          <li style={{ color: hasUppercase ? "green" : "red" }}>
            {hasUppercase ? "✔" : "✖"} One capital letter
          </li>
          <li style={{ color: hasNumber ? "green" : "red" }}>
            {hasNumber ? "✔" : "✖"} One number
          </li>
          <li style={{ color: hasLength ? "green" : "red" }}>
            {hasLength ? "✔" : "✖"} Minimum 6 characters
          </li>
        </ul>

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br /><br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
        <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} /> Other
        <br /><br />

        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
          <option></option>
        </select>
        <br /><br />

        <label>
          <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
          Accept Terms & Conditions
        </label>
        <br /><br />

        <label>Color Picker:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <br /><br />

        <label>Date Picker:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* ERROR MESSAGE */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* OUTPUT SECTION */}
      {submittedData && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Submitted Details</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Gender:</b> {submittedData.gender}</p>
          <p><b>Country:</b> {submittedData.country}</p>
          <p><b>Favorite Color:</b> {submittedData.color}</p>
          <p><b>Date:</b> {submittedData.date}</p>
        </div>
      )}
    </div>
  );
}
