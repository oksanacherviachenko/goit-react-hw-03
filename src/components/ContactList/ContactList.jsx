import React from 'react';
import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
