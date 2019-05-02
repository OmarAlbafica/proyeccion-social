import React from "react";
import Perfiles from "../Perfiles/Perfiles";
import Sidebar from "../layouts/Sidebar";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Perfiles />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
