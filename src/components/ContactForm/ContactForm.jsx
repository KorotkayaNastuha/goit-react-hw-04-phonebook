import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChangeNumber = event => {
        this.setState({ number: event.currentTarget.value });
    };
    handleChangeName = event => {
        this.setState({ name: event.currentTarget.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.formLabel}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChangeName}
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
                    onChange={this.handleChangeNumber}
                    value={number}
                    className={css.formNumber}
                />
            </label>
            <button className={css.formButton} type="submit">Add contact</button>
        </form>
    }
}

ContactForm.propTypes = {
    onSubmit:PropTypes.func,
}

