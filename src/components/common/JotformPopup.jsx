import React from 'react';

const JotformPopup = () => {
  const openPopupForm = () => {
    window.open('https://form.jotform.com/240304264206141', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500');
  };

  return (
    <div>
      <button
        onClick={openPopupForm}
        style={{
          marginTop: '16px',
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
          backgroundColor: '#FFA500',
          border: '1px solid #FFA500',
          color: '#FFFFFF',
        }}
      >
        New Quote Request
      </button>
    </div>
  );
};

export default JotformPopup;
