import { useState } from "react";
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';


export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };
const handleChangeName = event => {
        setName(event.currentTarget.value);
    };
const handleSubmit = (event) => {
    event.preventDefault();
    const contact = { name: name, number: number };
        onSubmit(contact);
        // contact.reset();
    setName('');
    setNumber('');
    };
   
        return <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.formLabel}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChangeName}
                    value={name}
                    className={css.formName}
                />
            </label>
            <label className={css.formLabel}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChangeNumber}
                    value={number}
                    className={css.formNumber}
                />
            </label>
            <button className={css.formButton} type="submit">Add contact</button>
        </form>
    }


ContactForm.propTypes = {
    onSubmit:PropTypes.func,
}

