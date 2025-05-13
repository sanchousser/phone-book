import { Component } from "react"
import { ContactsForm } from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  handleInputChange = (evt) => {
    // console.log(evt.target.name)
    this.setState({ [evt.target.name]: evt.target.value });

  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    const newContact = `${name}: ${number}`

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact => contact.toLowerCase().includes(normalizedFilter))
  }

  render() {
    return (<div>
      <ContactsForm
        name={this.state.name}
        handleChange={this.handleInputChange}
        handleSubmit={this.handleFormSubmit} />
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <ContactsList contacts={this.getVisibleTodos()} />
    </div>)
  }
}
