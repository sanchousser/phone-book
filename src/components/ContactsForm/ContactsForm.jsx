import { Component, useState } from "react";

export const ContactsForm = ({onSubmit}) => {
    // state = {
    //     name: '',
    //     number: ''
    // }

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')



    // { name, handleChange, handleSubmit }


    // const handleChange = (evt) => {
    //     // console.log(evt.target.name)
    //     this.setState({ [evt.target.name]: evt.target.value });

    // };

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onSubmit({name, number})
        reset(); 
    };

    const reset = () => {
        setName('')
        setNumber('')
    }


        return (<form onSubmit={onSubmit}>

            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я]+)?)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    autoComplete="off"
                    onChange={handleChangeName}
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    value={number}
                    onChange={handleChangeNumber}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>)
}
