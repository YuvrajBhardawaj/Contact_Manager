import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteContact = (id) => {
    onDeleteContact(id);
  };

  const renderContactList = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      onDeleteContact={handleDeleteContact}
    />
  ));

  return (
    <div className='row'>
      <h2 className='container text-center'>Contact List</h2>
      <div className='container text-center col-4 bg-white'  id='details'>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
