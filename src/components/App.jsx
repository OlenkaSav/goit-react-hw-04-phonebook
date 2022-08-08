import React, { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

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
    // console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      // console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const person = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, person],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} contacts={this.state.contacts} />
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #3df4d5;
  border-radius: 20px;
  -moz-box-shadow: 10px 10px 25px #333333;
  -webkit-box-shadow: 10px 10px 25px #333333;
  box-shadow: 10px 10px 25px #333333;
`;

const Title = styled.h2`
  font-size: 60px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
  font-style: italic;
`;
export default App;
