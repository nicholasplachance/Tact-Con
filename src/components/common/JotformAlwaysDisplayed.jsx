import React, { useEffect } from 'react';

const JotformAlwaysDisplayed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/static/feedback2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      initializeJotformFeedback();
    };

    document.body.appendChild(script);

    const initializeJotformFeedback = () => {
      if (window.JotformFeedback) {
        const JFL_240304264206141 = new window.JotformFeedback({
          formId: '240304264206141',
          base: 'https://form.jotform.com/',
          windowTitle: 'New Quote Request',
          backgroundColor: '#FFA500',
          fontColor: '#FFFFFF',
          type: 'false',
          height: 500,
          width: 700,
          openOnLoad: false
        });
      } else {
        console.error('JotformFeedback constructor not found');
      }
    };
  }, []);

  return (
    <div>
      <a
        className="btn lightbox-240304264206141"
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
          transition: 'all, .1s, ease-in',
          backgroundColor: '#FFA500',
          border: '1px solid #FFA500',
          color: '#FFFFFF'
        }}
      >
        New Quote Request
      </a>
    </div>
  );
};

export default JotformAlwaysDisplayed;
