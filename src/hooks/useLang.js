import { useContext } from 'react';

import { langContext } from '../LangContext';

const useLang = () => {
  const data = useContext(langContext);

  return data;
};

export default useLang;
