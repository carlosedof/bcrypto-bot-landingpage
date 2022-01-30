import React from 'react';
import './styles.css';

const Col = ({
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

export default Col;
