import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.contact}>
    <p>{name}: {number}</p>
    <button onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;
