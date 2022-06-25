import "./App.css";
import data from "./helper/data.js";

import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";

function App() {
  console.log(data);

  return (
    <>
    <Nav />
    <Header />
    <div className="outer">
  {data.map((item) => {
        const { id, title, desc, image } = item;
        return <Card key={id} title={title} desc={desc} image={image} /> ;
      })}

    </div>

    

      
        
    </>
  );
}

export default App;
