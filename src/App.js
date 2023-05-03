import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import { useState } from "react";
import SideBar from "./components/SideBar";
import LogInSection from "./components/LogInSection";
import styled from "styled-components";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";
import ResultPage from "./components/ResultPage";
import useToken from "./hooks/useToken";
import useData from "./hooks/useData";

const AppStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(true);
  };
  const closeMenu = () => {
    setMobileMenu(false);
  };

  const [openLogIn, setopenLogIn] = useState(false);

  const toggleOpenLogIn = () => {
    setopenLogIn(true);
  };

  const { token, setToken } = useToken();
  const { data, setData } = useData();

  const [auth, setAuth] = useState();

  const [search, setSearch] = useState(true);

  const toggleSearch = () => {
    setSearch(false);
    console.log("watsUp");
  };

  const logOut = () => {
    // setAuth(!auth);
    setToken(!token);
  };

  const [succes, setSucces] = useState(true);

  const succesfull = () => {
    setSucces(false);
  };

  return (
    <AppStyle>
      {mobileMenu ? (
        <SideBar toggleOpenLogIn={toggleOpenLogIn} closeMenu={closeMenu} />
      ) : (
        <>
          {!token ? (
            <>
              <Header
                toggleMenu={toggleMenu}
                toggleOpenLogIn={toggleOpenLogIn}
                auth={!auth}
              />
              {openLogIn ? (
                <LogInSection setToken={setToken} />
              ) : (
                <Main auth={!auth} />
              )}

              <Footer />
            </>
          ) : (
            <>
              <Header
                toggleMenu={toggleMenu}
                toggleOpenLogIn={toggleOpenLogIn}
                auth={auth}
                logOut={logOut}
              />
              {search ? (
                <Main auth={auth} toggleSearch={toggleSearch} />
              ) : (
                <>
                  {succes ? (
                    <SearchForm setData={setData} succesfull={succesfull} />
                  ) : (
                    <ResultPage />
                  )}
                </>
              )}
              <Footer />
            </>
          )}
        </>
      )}
    </AppStyle>
  );
}

export default App;
