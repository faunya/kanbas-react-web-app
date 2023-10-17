import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function App() {
   return (
      <HashRouter>
         <div>
            <Routes>
               <Route path="/" element={<Navigate to="/Labs" />} />
               <Route path="/hello" element={<HelloWorld />} />
               <Route path="/Labs/*" element={<Labs />} />
               <Route path="/Kanbas/*" element={<Kanbas />} />
            </Routes>
         </div>
      </HashRouter>
   );
}
export default App;
library.add(fab, fas, far)