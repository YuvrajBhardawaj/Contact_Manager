import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid'; // Use 'v4' instead of 'uuidv4'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrievedContacts || [];
  });

  const addContactHandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact };
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []);
  const deleteContactHandler = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='main'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDeleteContact={deleteContactHandler} />
    </div>
  );
}

export default App;
