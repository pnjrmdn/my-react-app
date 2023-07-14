
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

const ButtonRed = () => {
  return(
    <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">
       Buy now
    </button>
    );
}

function App() {
  return (
    <div className='flex justify-center bg-blue-600 min-h-screen items-center'>
      
      <div className="flex gap-x-5">
      <Button></Button>
      <Button></Button>
      <Button></Button>

      <p>this is button black</p>
      <ButtonBlack></ButtonBlack>

      <p>this is button red</p>
      <ButtonRed></ButtonRed>
      </div>

    </div>)
}

export default App;
