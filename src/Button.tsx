import React from "react";

const Button = () => {
  return (
    <div className="flex gap-6">
      <button className="btn btn-outline btn-info">Info</button>
      <button className="btn btn-outline btn-success">Success</button>
      <button className="btn btn-outline btn-warning">Warning</button>
      <button className="btn btn-outline btn-error">Error</button>
    </div>
  );
};

export default Button;
