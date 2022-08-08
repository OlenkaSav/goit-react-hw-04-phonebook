import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlinePhone } from 'react-icons/ai';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <StyledList key={id}>
        <Span>
          <AiOutlinePhone color={`black`} size={30} />
        </Span>
        <p>
          {name}: {number}
        </p>
        <StyledBtn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </StyledBtn>
      </StyledList>
    ))}
  </ul>
);

const StyledList = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-size: 45px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
`;
const Span = styled.span`
  margin-right: 10px;
`;

const StyledBtn = styled.button`
  margin-left: auto;
  font-family: inherit;
  font-size: 40px;

  color: #210672;
  width: 150px;
  height: 50px;

  background-color: #4db0ea;
  border-radius: 10px;
  -moz-box-shadow: 6px 8px 4px #333333;
  -webkit-box-shadow: 6px 8px 4px #333333;
  box-shadow: 6px 8px 4px #333333;
`;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
