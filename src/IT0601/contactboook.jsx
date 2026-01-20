import React, { Component } from "react";

class Contactbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: "",
      editId: null,
    };
  }

  handlechangeFname = (e) => this.setState({ fname: e.target.value });
  handlechangeLname = (e) => this.setState({ lname: e.target.value });
  handlechangePhone = (e) => this.setState({ phone: e.target.value });

  addtocontact = () => {
    const { fname, lname, phone, editId } = this.state;
    if (!fname || !lname || !phone) return;

    if (editId === null) {
      // ADD CONTACT
      this.setState((prev) => ({
        contacts: [
          ...prev.contacts,
          {
            id: Date.now(),
            fname,
            lname,
            phone,
            visible: false,
          },
        ],
        fname: "",
        lname: "",
        phone: "",
      }));
    } else {
      // UPDATE CONTACT
      this.setState((prev) => ({
        contacts: prev.contacts.map((c) =>
          c.id === editId
            ? { ...c, fname, lname, phone, visible: true }
            : c
        ),
        fname: "",
        lname: "",
        phone: "",
        editId: null,
      }));
    }
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((c) => c.id !== id),
    }));
  };

  toggleDisplay = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      ),
    }));
  };

  editContact = (contact) => {
    this.setState((prev) => ({
      fname: contact.fname,
      lname: contact.lname,
      phone: contact.phone,
      editId: contact.id,
      contacts: prev.contacts.map((c) =>
        c.id === contact.id ? { ...c, visible: true } : c
      ),
    }));
  };

  render() {
    const { contacts, fname, lname, phone, editId } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h2>Contact Book</h2>

        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={this.handlechangeFname}
        />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={this.handlechangeLname}
        />
        <br />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={this.handlechangePhone}
        />
        <br />

        <button onClick={this.addtocontact}>
          {editId === null ? "Add Contact" : "Update Contact"}
        </button>

        <hr />

        <ul>
          {contacts.map((c) => (
            <li key={c.id} style={{ marginBottom: "10px" }}>
              <strong>
                {c.fname} {c.lname}
              </strong>{" "}
              - {c.phone}
              <br />

              <button
                disabled={editId === c.id}
                onClick={() => this.toggleDisplay(c.id)}
              >
                View
              </button>

              <button onClick={() => this.editContact(c)}>Edit</button>

              <button onClick={() => this.deleteContact(c.id)}>
                Delete
              </button>

              {c.visible && (
                <div style={{ marginLeft: "15px" }}>
                  <p>Last Name: {c.lname}</p>
                  <p>Phone: {c.phone}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contactbook;
