import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  addContact = (newContact) => {
    const {contacts} = this.state
    if (contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase())) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      return this.setState({ contacts: [...contacts, newContact] });
    }
}

onDeleteContact = (e) => {
  const contactId = e.currentTarget.id
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  }));
}

  render () {
    return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={this.addContact}/>

  <h2>Contacts</h2>
  {/* <Filter/> */}
  <ContactList 
  contacts={this.state.contacts}
  onDeleteContact={this.onDeleteContact}/> 
</div>
)}
};
