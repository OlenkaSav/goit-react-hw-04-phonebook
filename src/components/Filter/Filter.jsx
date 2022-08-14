import React from 'react';
import useLang from 'hooks/useLang';
import contentText from '../Lang/contentText.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onChange }) => {
  const { lang } = useLang();
  const filterLable = contentText.filter[lang];
  return (
    <StyledLable>
      {filterLable}
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </StyledLable>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

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
export default Filter;
