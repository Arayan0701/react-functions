//create a class based component 
//that will allow user to register
//1. Name
//2. Email
//3. Password
//4. Confirm Password
//5. Gender 
//6. country(dropdown with at least 5 country options)
//7. Terms and conditions (checkbox)
//8. Color Picker
//9. Date time
//on form submission , validate the inputs and display
//an alert with the entered information (except password fields)

import React, { Component } from "react";
import "./state_exe.css";

class StateExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            country: "",
            termsAccepted: false,
            date: "",
            colorpicker: "" 
        };
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangeGender = (event) => {
        this.setState({ gender: event.target.value });
    }
    handleChangeCountry = (event) => {
        this.setState({ country: event.target.value });
    }
    handleChangepassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleChangeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }   
    handleChangetermsAccepted = (event) => {
        this.setState({ termsAccepted: event.target.checked });
    }
    handleChangecolorpicker = (event) => {
        this.setState({ colorpicker: event.target.value });
    }
    handleChangedate = (event) => {
        this.setState({ date: event.target.value });
    }



    handleSubmit = (event) => {
        event.preventDefault();
        const { name, 
                email,
                gender,
                country,
                termsAccepted,
                date,
                colorpicker

         } = this.state;
        if (!termsAccepted) {
            alert("You must accept the terms and conditions.");
            return;
        }
        alert(`Name: ${name}\nEmail: ${email}\nGender: ${gender}\nCountry: ${country}\nColor: ${colorpicker}\nDate and Time: ${date}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    
                    <h2> Registration Form</h2>

                </div>

                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChangepassword} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangeConfirmPassword} required />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={this.state.gender} onChange={this.handleChangeGender} required>
                        <option value="">Select</option>            
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Country:</label>
                    <select name="country" value={this.state.country} onChange={this.handleChangeCountry} required>
                        <option value="">Select</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="uk">UK</option>
                        <option value="australia">Australia</option>
                        <option value="india">India</option>
                    </select>
                </div>
                <div>
                    <label>Pick a color:</label>
                    <input type="color" name="colorpicker" value={this.state.colorpicker} onChange={this.handleChangecolorpicker} />
                    
                </div>
                <div>
                    <label>Select a date and time:</label>
                    <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleChangedate} />
                </div>


                <div>
                    <label>
                        <input type="checkbox" name="termsAccepted" checked={this.state.termsAccepted} onChange={this.handleChangetermsAccepted} />
                        I accept the terms and conditions
                    </label>
                </div>
                <button type="submit">Register</button>


            </form>
        );
    }
}
export default StateExercise;