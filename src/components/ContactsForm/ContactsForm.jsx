import { Component } from "react";

export class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    }

    // { name, handleChange, handleSubmit }


    handleChange = (evt) => {
        // console.log(evt.target.name)
        this.setState({ [evt.target.name]: evt.target.value });

    };


    handleSubmit = (evt) => {
        evt.preventDefault();

        this.props.onSubmit(this.state)
        this.reset(); 
    };

    reset = () => {
        this.setState({name:'', number:''})
    }


    render() {
        return (<form onSubmit={this.handleSubmit}>

            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я]+)?)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    autoComplete="off"
                    onChange={this.handleChange}
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    value={this.state.number}
                    onChange={this.handleChange}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>)
    };
}
