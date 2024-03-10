import React from 'react';
import theme from './theme';


const commonStyle = {
  
  textTransform: 'uppercase',
  fontSize: '14px',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  padding: '10px',
  fontFamily: 'inherit',
  textShadow: 'none',
  userSelect: 'none',
  transition: 'all .1s ease-in',
  marginBottom: '20px',
  backgroundColor: `${theme.colors.background}`,
};

const JotformPopup = () => {
  const openPopupForm = () => {
    window.open('https://form.jotform.com/240304264206141', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500');
  };

  const inlineStyle = {
    marginTop: '16px',
    backgroundColor: '#fe3845', // Your primary color
    border: '1px solid #fe3845', // Your primary color
    color: 'white',
    textAlign: 'center', // Center the text
  };

  const mergedStyles = { ...commonStyle, ...inlineStyle };

  return (
    <div style={{ textAlign: 'center', backgroundColor: `${theme.colors.background}`  }}>
      <button
        onClick={openPopupForm}
        style={mergedStyles}
      >
        New Quote Request
      </button>
    </div>
  );
};

export default JotformPopup;
