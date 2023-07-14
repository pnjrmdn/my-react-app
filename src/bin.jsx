import React from "react";

// component create by class
class Button extends React.Component{
  render() {
    return(
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
       Buy now
    </button>
    )
  };
}

// component create by function
function ButtonBlack(){
  return(
    <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
       Buy now
    </button>
    );
}