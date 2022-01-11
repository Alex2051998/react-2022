import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Coments from "./Components/Coments/Coments";
function App() {
  return (
       <div>
           <div className={'wraper'}>
               <Users/>
               <Posts/>
           </div>
           <Coments/>

       </div>
  );
}

export default App;
