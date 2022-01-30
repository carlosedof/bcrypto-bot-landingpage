import React, {useMemo} from 'react';
import './styles.css';

const Row = ({
  onClick,
  children,
  responsive,
  reverse,
  fullWidthResponsive,
                  className,
  style,
}) => {

  const getClasses = useMemo( () => {
    let classname = '';
    if (responsive && !fullWidthResponsive) {
      classname = classname.concat('row-responsive');
    }
    if (reverse) {
      classname = classname.concat(' row-reverse-common');
    } else {
      classname = classname.concat(' row-common');
    }
    if (responsive && fullWidthResponsive) {
      classname = classname.concat(' row-responsive-full');
    }
    if (!responsive && fullWidthResponsive) {
      classname = classname.concat(' row-full');
    }
    classname = classname.concat(` ${className}`)
    return classname;
  }, [reverse, responsive, fullWidthResponsive, className]);
  return (
      <div
          role="button"
          tabIndex={0}
          onClick={onClick}
          className={getClasses}
          style={{ ...style }}>
        {children}
      </div>
  );
};

export default Row;
