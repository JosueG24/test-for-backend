import Home from "./components/Home";
import { useState } from "react";

function App() {

  const [url, setUrl] = useState("")

function handleSubmit(e){
  e.preventDefault();
  setUrl(e.target.urlInp.value);
}
function defaultUrl(){
  setUrl("http://localhost:4000")
}


  return (
    <div className="w-full h-screen bg-emerald-900 flex justify-center items-center">
      {url === "" &&
        <div className="bg-emerald-500 w-1/3 p-5 text-white border-2 border-white flex flex-col items-center">
          <form onSubmit={handleSubmit} className="">
            <input type="text" name="urlInp" className="rounded-lg text-emerald-900 m-4 focus:outline-none"/>
            <button className="p-1 border-2 border-white rounded-md">Listo</button>
          </form>
          <button onClick={defaultUrl} className="p-1 border-2 border-white rounded-md mx-auto">LocalHost:4000</button>
        </div>
      }
      {url !== "" &&
        <Home url={url}/>
      }
    </div>
  );
}

export default App;
