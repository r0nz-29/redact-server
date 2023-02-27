import React from "react";
import Header from "./components/Header/index.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import AuthPage from "./pages/Auth/index.jsx";
import Guard from "./components/Protected.jsx";
import Lists from "./pages/Lists/index.jsx";
import List from "./pages/List/index.jsx";
import {Box} from "@mui/material";
import Search from "./pages/Search/index.jsx";

function App() {
  const {pathname} = useLocation();
  //
  // useEffect(() => {
  // 	document.body.style.background = "#121212";
  // }, []);

  return (
    <Box className="App" sx={{bgcolor: theme => theme.palette.background.paper}}>
      {
        pathname !== "/" && (
          <Header/>
        )
      }
      <Routes>
        <Route exact path="/" element={<AuthPage/>}/>
        <Route exact path="/lists" element={
          <Guard>
            <Lists/>
          </Guard>
        }/>
        <Route exact path="/lists/:listId" element={
          <Guard>
            <List/>
          </Guard>
        }/>
        <Route exact path="/search" element={
          <Guard>
            <Search/>
          </Guard>
        }/>
      </Routes>
    </Box>
  );
}

export default App;