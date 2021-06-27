import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage.js";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import UserDashboard from "./pages/UserDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
          <Route exact path="/user" component={UserDashboard} />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
