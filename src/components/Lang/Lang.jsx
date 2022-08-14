import React from 'react';
import useLang from '../../hooks/useLang';
import styled from 'styled-components';

const Lang = () => {
  const { lang, switchLang } = useLang();
  console.log('inside lang' + lang);

  return (
    <StyledSwitch>
      <StyledLang
        onClick={switchLang}
        data={lang === 'ua' ? 'currentLang' : 'secondLang'}
        //   className={lang === 'ua' ? styles.currentLang : styles.lang}
      >
        UA
      </StyledLang>
      <StyledSpase> | </StyledSpase>
      <StyledLang
        onClick={switchLang}
        data={lang === 'en' ? 'currentLang' : 'secondLang'}
        //   className={lang === 'ru' ? styles.currentLang : styles.lang}
      >
        EN
      </StyledLang>
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flax;
  align-items: center;
  justify-content: center;
  background-color: #7cbbb0;
  width: 80px;
  height: 30px;
  border: 5px groove #1c6ea4;
  border-radius: 40px 40px 40px 40px;
  box-shadow: 6px 8px 4px #333333;
  cursor: pointer;
`;

const StyledLang = styled.span`
  text-decoration: ${({ data }) =>
    data === 'currentLang' ? ` underline` : `none`};
  font-size: ${({ data }) => (data === 'currentLang' ? ` 20px` : `17px`)};
  color: ${({ data }) => (data === 'currentLang' ? ` #210672` : `#7c7a7a`)};
  /* text-shadow: ${({ data }) =>
    data === 'currentLang' ? `4px 2px 4px #e9f999` : `none`}; */
  font-style: italic;
  font-family: inherit;
`;
const StyledSpase = styled.span`
  font-size: 20px;
  color: #210672;
  /* text-shadow: 4px 2px 4px #e9f999; */
`;
export default Lang;
