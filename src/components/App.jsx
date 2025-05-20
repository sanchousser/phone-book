import { Component } from "react"
import { ContactsForm } from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
    //   { id: 'id - 1', name: 'Rosie Simpson', number: '459 - 12 - 56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
     ],
    filter: '',
  }




  componentDidMount() {

    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }



  addContact = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`
        ${name} already taken
        `)
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };


    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: ''
    }));
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };


  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    return (<div>
      <h2>Phonebook</h2>
      <ContactsForm
        onSubmit={this.addContact} />
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <ContactsList
        contacts={this.getVisibleContacts()}
        onDeleteContact={this.deleteContact}
      />
    </div>)
  }
}
