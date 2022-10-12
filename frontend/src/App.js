import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.css";
import "font-awesome/css/font-awesome.min.css";
import HomePage from "./components/HomePage";
import PersonDetails from "./components/PersonDetails";
import Login from "./components/Login";
import NewPerson from "./components/NewPerson";

function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
  window.location.reload(false);
}

function getToken() {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/persons/:id" element={<PersonDetails />} />
        <Route path="/new" element={<NewPerson />} />
      </Routes>
    </div>
  );
}

export default App;
