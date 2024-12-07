import React from "react";

function Banner({ status, actionTitle, action, children }) {
  return (
    <div>
      <div className={`banner ${status}`}>
        {children}
        <button className="reset-button" onClick={() => action()}>
          {actionTitle}
        </button>
      </div>
    </div>
  );
}

export default Banner;
