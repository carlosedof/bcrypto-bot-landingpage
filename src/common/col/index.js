import React from 'react';
import './styles.css';

export default ({
  onClick,
  children,
  responsive,
  fullWidthResponsive,
  reverse,
  style,
  ...rest
}) => (
  <div
    onClick={onClick}
    className={`${responsive ? 'col-responsive' : ''} ${
      reverse ? 'col-reverse-common' : 'col-common'
    } ${fullWidthResponsive ? 'full-width-responsive' : ''}
     ${onClick ? 'hoverable' : ''}`}
    style={{ ...style }}
    {...rest}>
    {children}
  </div>
);
