import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideBar/SideMenu";
import Dashboard from "./components/Dashboard/Dashoard";
import { Component } from "react";
import { render } from "@testing-library/react";
import ChangeTicket from "./components/ChangeTicket/ChangeTicket";
import ManagementTicket from "./components/ManagementTicket/ManagementTicket";
import ServicePack from "./components/ServicePack/ServicePack";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SideMenu />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/change-ticket" element={<ChangeTicket />} />
            <Route path="/management-ticket" element={<ManagementTicket />} />
            <Route path="/setting/service-pack" element={<ServicePack />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
