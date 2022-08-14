import React, { useState, useContext } from 'react';
import { langContext } from '../../LangContext';
import contentText from '../Lang/contentText.json';
// import { useForm } from 'react-hook-form';
import { Report } from 'notiflix/build/notiflix-report-aio';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Form({ contacts, onSubmit }) {
  const { lang } = useContext(langContext);
  console.log(lang);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const marker = e.currentTarget.name;
    switch (marker) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const notification1 = contentText.notification1[lang];
  const notification2 = contentText.notification2[lang];
  const notification3 = contentText.notification3[lang];
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      Report.warning(notification1, `${name}` + notification2, notification3);
      return;
    }

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameContact = contentText.name[lang];
  const numberContact = contentText.number[lang];
  const addBtn = contentText.addBtn[lang];
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLable>
        {nameContact}
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLable>
      <StyledLable>
        {numberContact}
        <StyledInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLable>
      <StyledBtn type="submit" disabled={!name || !number}>
        {addBtn}
      </StyledBtn>
    </StyledForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const StyledLable = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  font-size: 30px;
  /* font-weight: 500; */
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
`;

const StyledInput = styled.input`
  width: 180px;
  height: 30px;
  margin-left: 10px;
  /* margin-bottom: 5px; */
  -moz-box-shadow: 6px 8px 4px #333333;
  -webkit-box-shadow: 6px 8px 4px #333333;
  box-shadow: 6px 8px 4px #333333;
  font-size: 20px;
`;

const StyledBtn = styled.button`
  font-family: inherit;
  font-size: 25px;
  color: ${props => (props.disabled ? `#7c7a7a` : ` #210672`)};
  width: 150px;
  height: 50px;
  background-color: ${props => (props.disabled ? `#afaaaa` : `#4db0ea`)};
  border-radius: 10px;
  -moz-box-shadow: 6px 8px 4px #333333;
  -webkit-box-shadow: 6px 8px 4px #333333;
  box-shadow: ${props =>
    props.disabled
      ? `0px 0px 4px #333333`
      : `6px 8px 4px
    #333333`};
`;
export default Form;
