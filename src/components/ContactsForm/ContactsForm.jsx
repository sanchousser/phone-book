
export const ContactsForm = ({ name, handleChange, handleSubmit }) => {
    return (<form onSubmit={handleSubmit}>
        <h2>Phonebook</h2>
        <ul>
            <li>
                <label>
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я]+)?)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </label>
            </li>
            <li>
                <label>
                    <h3>Number</h3>
                    <input
                        type="tel"
                        onChange={handleChange}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
            </li>
        </ul>
        <button type="submit">Add contact</button>
    </form>
    );
}
