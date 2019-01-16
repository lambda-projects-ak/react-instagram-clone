import React from 'react';
import './NavigationContainer.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavButtons from './NavButtons';

const NavigationContainer = props => {
  return (
    <div className="navigation-container">
      <Logo />
      <SearchBar
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
        preventDefault={props.preventDefault}
      />
      <NavButtons />
    </div>
  );
};

export default NavigationContainer;
