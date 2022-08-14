import React from 'react';
import useLang from '../../hooks/useLang';
import styled from 'styled-components';

const Lang = () => {
  const { lang, switchLang } = useLang();
  console.log('inside lang' + lang);

  return (
    <div>
      <StyledLang
        onClick={switchLang}
        data={lang === 'ua' ? 'currentLang' : 'lang'}
        //   className={lang === 'ua' ? styles.currentLang : styles.lang}
      >
        UA
      </StyledLang>
      <StyledSpase> | </StyledSpase>
      <StyledLang
        onClick={switchLang}
        data={lang === 'en' ? 'currentLang' : 'lang'}
        //   className={lang === 'ru' ? styles.currentLang : styles.lang}
      >
        EN
      </StyledLang>
    </div>
  );
};

const StyledLang = styled.button`
  font-weight: ${props => (props.data === 'currentlang' ? '700' : '300')};
  font-size: 60px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
  font-style: italic;
  font-family: inherit;
  cursor: pointer;
`;
const StyledSpase = styled.span`
  font-size: 60px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
  font-style: italic;
`;
export default Lang;
