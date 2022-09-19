import React, { Component } from 'react';
import ContactsList from './contactsList/ContactsList';
import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import { Title, ContactsListTitle } from './Phonebook.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }; 
  
  componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };    
  };

  searchByName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = newContact => {
    const { contacts } = this.state;
    if (contacts.find(item => item.name === newContact.name)) {
      alert(`${newContact.name} is allready in contacts. `);
    } else {
      this.setState({contacts:[...contacts, newContact]})
    };
  };

  deleteContact = e => {
    const id = e.currentTarget.dataset.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <ContactsListTitle>Contacts</ContactsListTitle>
        <Filter searchByName={this.searchByName} />
        <ContactsList
          phoneList={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;