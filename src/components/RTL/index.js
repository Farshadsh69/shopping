import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});
 function RTL({children}) {
  return <StylesProvider jss={jss}>{children}</StylesProvider>;
}

export default RTL