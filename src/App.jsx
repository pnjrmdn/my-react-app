
import React from "react";

// // component create by class
// class Button extends React.Component{
//   render() {
//     return(
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//        Buy now
//     </button>
//     )
//   };
// }

// // component create by function
// function ButtonBlack(){
//   return(
//     <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
//        Buy now
//     </button>
//     );
// }

const Button = (props) => {
  // distructturing consep
  const { children, variant} = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${ßvariant} text-white" type="submit`}>
    {children}
    </button>
  );
}

function App() {
  return (
    <div className='flex justify-center bg-slate-600 min-h-screen items-center'>

      <div className="flex gap-x-5">
        <p>this is button red</p>
        <Button variant="bg-blue-500"> Sign in</Button>
        <Button variant="bg-green-500"> Sign up</Button>
      </div>

    </div>)
}

export default App;
