import { stringify } from "postcss";
import React from "react";

const Button = (props) => {
    // distructturing consep
    // eslint-disable-next-line react/prop-types
    const { children = "Button", variant = "bg-slate-500" } = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white" type="submit`}>
      {children}
      </button>
    );
  }

  export default Button;
