import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPg from "./pages/loginPg/loginPg";

import SignIn from "./pages/signin/signIn";

import HomePg from "./pages/homePg/home";
import ResultPg from "./pages/results/results.jsx";
import SearchResult from "./pages/results/results.jsx";
//import BodySearch from "./componnents/bodySearch/bodySearch.jsx";

//import Last from "./componnents/last";

//import HomePg from "./pages/homePg/home";

//import HomePg from "./pages/homePg/home";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePg/>}></Route>
      <Route path='/login' element={<LoginPg/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/search-result' element={<SearchResult/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
