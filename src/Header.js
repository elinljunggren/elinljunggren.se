import React, { Component } from 'react';
import './header.css';

export function Header() {
  return (
    <header className='page-header'>
      <Logo />
      <h1>Hi there!</h1>
    </header>
  );
}

export function Logo() {
  return (
    <div id="logo">
      <span id="acronym">EL</span>
    </div>
  )
}
