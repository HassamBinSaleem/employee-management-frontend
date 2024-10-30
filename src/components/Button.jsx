import React from 'react';
import clsx from 'clsx';


const Button = ({ primary, secondary, disabled, children }) => {
  const buttonClasses = clsx(
    'button', 
    primary && 'button--primary',
    secondary && 'button--secondary',
    disabled && 'button--disabled'
  );

  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
