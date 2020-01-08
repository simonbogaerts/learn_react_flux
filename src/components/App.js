import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";

const App = () => {
  const getPage = () => {
    let route = window.location.pathname;

    switch (route) {
      case "/about":
        return <AboutPage />;
      case "/courses":
        return <CoursesPage />;
      case "/home":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
