import { useEffect, useState, useRef } from "react"
import { ContactsForm } from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

import { nanoid } from "nanoid";

export const App = () => {
  // state = {
  //   contacts: [
  //   //   { id: 'id - 1', name: 'Rosie Simpson', number: '459 - 12 - 56' },
  //   //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //    ],
  //   filter: '',
  // }

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')


  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts)
    }
  }, [])


  // componentDidMount() {

  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     this.setState({ contacts: contacts })
  //   }
  // }

  const prevContacts = usePrevious(contacts)

  useEffect(() => {
     if (contacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  })

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }

  // }




  const addContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`
        ${name} already taken
        `)
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    setContacts((prevContacts) => [newContact, prevContacts])



    // this.setState((prevState) => ({
    //   contacts: [newContact, ...prevState.contacts],
    //   name: '',
    //   number: ''
    // }));
  }

  const deleteContact = (contactId) => {

    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId))
  };


  const changeFilter = (e) => {
    // this.setState({ filter: e.currentTarget.value });
    setFilter(e.currentTarget.value)
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

    return (<div>
      <h2>Phonebook</h2>
      <ContactsForm
        onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>)
}
