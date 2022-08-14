// import React, { Component } from 'react';
import { useState, useEffect, memo } from 'react';
import useLocalStorage from 'hooks/localStorage';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import Lang from './Lang';
import useLang from 'hooks/useLang';

// import LangProvider from '../LangContext';
import contentText from './Lang/contentText.json';

import styled from 'styled-components';
import { nanoid } from 'nanoid';

//  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

function App() {
  // console.log(data);
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  // const [lang, setLang] = useState('ua');

  useEffect(() => {
    const contacts = window.localStorage.getItem('contacts');
    // console.log(contacts);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, [setContacts]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const { lang } = useLang();
  // const lang = useContext(langContext);
  console.log(lang);

  // useEffect(() => {
  //   const title = contentText.title[lang];
  //   // const contactsList = contentText.contacts[lang];
  // }, [lang]);

  const addContact = (name, number) => {
    const person = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, person]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const title = contentText.title[lang];
  const contactsList = contentText.contacts[lang];
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Lang />
      <Form onSubmit={addContact} contacts={contacts} />
      <Title>{contactsList}</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
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
  font-size: 40px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
`;

export default memo(App);
