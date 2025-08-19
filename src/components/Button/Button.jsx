// import React from "react";
// import "./Button.css";

// const Button = ({ text, href, onClick, className = "", target }) => {
//   const classes = `fancy-button ${className}`;

//   return href ? (
//     <a
//       href={href}
//       className={classes}
//       target={target}
//       rel="noopener noreferrer"
//     >
//       <span>{text}</span>
//     </a>
//   ) : (
//     <button className={classes} onClick={onClick}>
//       <span>{text}</span>
//     </button>
//   );
// };

// export default Button;
import React from "react";
import "./Button.css";

const Button = ({ text, href, onClick, className = "", target }) => {
  const classes = `fancy-button ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel="noopener noreferrer"
      >
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
