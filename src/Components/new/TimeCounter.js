import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

function TimeCounter() {
  return (
    <Countdown date={Date.now() + 10000} />
  );
}

export default TimeCounter
