import { Component } from "react"
import { ContactsForm } from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";

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


  render() {
    return (<div>
      <ContactsForm
                name={this.state.name}
                handleChange={this.handleInputChange}
                handleSubmit={this.handleFormSubmit} />
      <ContactsList contacts={this.state.contacts}/>
    </div>)
  }
}
