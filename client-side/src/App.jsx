import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPg from "./pages/loginPg/loginPg";

import SignIn from "./pages/signin/signIn";

import HomePg from "./pages/homePg/home";
import ResultPg from "./componnents/results/results.jsx";
import SearchResult from "./componnents/results/results.jsx";
import UserDashboard from "./pages/Dashboard/userDashoard.jsx";
import { UserProvider } from "./componnents/context/userContext.jsx";
import TravelResult from "./pages/Travels/travelResult.jsx";
import HeaderCp from "./componnents/header/headerCp.jsx";
import UserInfo from "./componnents/userInfo/userInfo.jsx";
//import BodySearch from "./componnents/bodySearch/bodySearch.jsx";

//import Last from "./componnents/last";

//import HomePg from "./pages/homePg/home";

//import HomePg from "./pages/homePg/home";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<HomePg/>}></Route>
          <Route path='/userInfo' element={<UserInfo/>}></Route>
          <Route path='/login' element={<LoginPg/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/search-result' element={<SearchResult/>}></Route>
          <Route path='/travel-result' element={<TravelResult/>}></Route>
          <Route path='/dashboard' element={<UserDashboard/>}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
