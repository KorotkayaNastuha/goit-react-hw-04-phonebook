import { useState, useEffect } from "react";
import  ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./Contacts/ContactList";
import { Filter }  from "./Filter/Filter";
import { nanoid } from 'nanoid';


export  function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contactList'));
    if (parsedContacts !== 0) {
      setContacts(parsedContacts);
    }
    }, []);
  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

const handleDelete = event => {
  setContacts(contacts.filter(contact => contact.id !== event));
  };
const addNewContacts = () => {
    const newContacts = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
    return newContacts;
  };
const addFilter = (filterValue) => {
    setFilter(filterValue)
  }
const handleSubmit = event => {
    const name = event.name;
    const number = event.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id: nanoid(), number });
    }

    setContacts(contactsLists);
  };
  
    return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        backgroundColor: 'azure',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit ={handleSubmit}/>
        <h2>Contacts</h2>
      <Filter onFilter={addFilter} />
      <ContactList contacts={addNewContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
}
