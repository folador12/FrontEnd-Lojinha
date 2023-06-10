import { Outlet } from "react-router-dom";
import Navigator from "./Components/Navigator";

function App() {
  return (
    
   <div>
      <Navigator/>
      <Outlet/>
   </div>
      
    
  );
}

export default App;
