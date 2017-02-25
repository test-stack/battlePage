import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// Our views are rendered inside the #content div
ReactDOM.render(
  Routes,
  document.getElementById('content')
);
