
import React from "react";
import Button from "./Components/Button";

function App() {
  return (
    <div className='flex justify-center bg-slate-600 min-h-screen items-center'>

      <div className="flex gap-x-5">
        <p>this is button red</p>
        <Button variant="bg-blue-500"> Sign in</Button>
        <Button variant="bg-green-500"> Sign up</Button>
        <Button></Button>
      </div>

    </div>)
}

export default App;
