import {useRoutes} from "react-router-dom"
import router from "./routers";

function App() {
  const element =useRoutes(router)
  return element
}

export default App;
