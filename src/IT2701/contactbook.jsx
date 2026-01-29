import React,{Component} from "react";

const Contactbook = () => {
    const [contacts, setContacts] = React.useState([]);
    const [fname, setfName] = React.useState("");
    const [lname, setlName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const addContact = () => {
        const newContact = {
            fname: fname,
            lname: lname, 
            phone: phone,
            visible: false
        };
        setContacts([...contacts, newContact]);
            fname("");
            lname("");
            phone("");
    };
          
    const ToggleView = (id) => {
        const updatedContacts = contacts.map((y, id) => {
           if (y === id) {
               return { ...y, visible: !y.visible };
           }
              return y;
        });
        setContacts(updatedContacts);

    };
    
    return (
            
    );
};

export default Contactbook;