import './App.css';
import {useEffect, useState} from "react";

function App() {
  let [fligtsList, setFligtsList] = useState([]);
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
         .then(value => value.json())
         .then(flights => {
            setFligtsList(flights.filter(flights => flights.launch_year !== '2020'));

        });
  },[])
  return (
   fligtsList.map(value => <div key={value.flight_number}>
     <div className={'fligts'}>
         <div className={'fligtsLeft'}>
             <h2>{value.mission_name}</h2>
             <p>{value.launch_year}</p>
         </div>
         <div className={'fligtsRight'}>
             <img src={value.links.mission_patch} alt="mission_patch"/>
         </div>

     </div>
     
   </div>)
  );
}

export default App;
