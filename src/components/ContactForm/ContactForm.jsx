import React from 'react';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { contactsStorage } from '../../redux/selectors';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(contactsStorage);
  const dispatch = useDispatch();

  const checkContactExist = (name, phone) => {
    return (
      contacts &&
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.phone === phone
      )
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, phone };

    if (checkContactExist(name, phone)) {
      alert(
        `${name} is already in contacts or number: ${phone} is used with another contact`
      );
      handleReset();
      return;
    }
    dispatch(addContact(newContact));
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h2 className={css.title}>Name</h2>
          <input
            className={css.contactInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          <h2 className={css.title}>Number</h2>
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>

        <button type="submit" className={css.addContactBtn}>
          Add contact
        </button>
      </form>
    </>
  );
}
