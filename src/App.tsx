// // App.jsx
// import MapViewComponent from "./components/MapView";
// import UploadPanel from "./components/UploadPanel";

// export default function App() {
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>

//       {/* Sidebar */}
//       <div style={{ width: "250px", padding: "10px", background: "#f4f4f4" }}>
//         {/* <UploadPanel /> */}
//       </div>

//       {/* Map Canvas */}
//       <div style={{ flex: 1 }}>
//         <MapViewComponent />
//       </div>

//     </div>
//   );
// }

import { useState } from "react";
import MapViewComponent from "./components/MapView";
import UploadPanel from "./components/UploadPanel";
import "./styles.css";

export default function App() {
  const [showUpload, setShowUpload] = useState(false);
  return (
    <div className="app">
      {/* HEADER */}
      <div className="header">
        <div className="left-header">
          <div className="menu">
            <span className="active">Dashboard</span>
            <span>Assets</span>
            <span>Fill</span>

            <span
              onClick={() => setShowUpload(true)}
              style={{ cursor: "pointer" }}
            >
              Upload
            </span>

            <span>Insights</span>
            <span>Vendors</span>
          </div>
        </div>
        <div className="right-header">
          <span className="connected">● Connected</span>
          <button>Export</button>
        </div>
      </div>

      {/* Modal */}
      {showUpload && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Choose KMZ/KML file</h3>
              <button onClick={() => setShowUpload(false)}>✖</button>
            </div>

            <UploadPanel />
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="container">
        {/* TITLE + KPI */}
        <div className="top-row">
          <h2>
            Network Dashboard <span className="live">LIVE</span>
          </h2>

          <div className="kpis">
            <div className="kpi green">
              NETWORK COVERAGE
              <br />
              <b>100%</b>
            </div>
            <div className="kpi blue">
              ACTIVE ROUTES
              <br />
              <b>3,838</b>
            </div>
            <div className="kpi orange">
              TOTAL COST
              <br />
              <b>$6.0K</b>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="layout">
          {/* CENTER */}
          <div className="center">
            <div className="mini-row">
              <div className="mini blue">Owned Network</div>
              <div className="mini orange">Annual Lease Cost</div>
              <div className="mini purple">Route Miles</div>
              <div className="mini green">Miles Planned</div>
            </div>
            <br />

            <div className="map">
              <MapViewComponent />
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <div className="card">
              <h4>Network Composition</h4>
              <div className="donut">
                <div className="center-text">19,989</div>
              </div>
              <div className="legend">
                <div>Other 66%</div>
                <div>Waves 29%</div>
                <div>Leased 4%</div>
              </div>
            </div>

            <div className="card">
              <h4>Vendor Cost Comparison (Annual)</h4>
              <div className="bar blue"></div>
              <div className="bar purple"></div>
            </div>
            <div className="card">
              <ol>
                <details>
                  <summary>
                    <b>Cost Per Mile Heatmap Table</b>
                  </summary>

                  <div className="table">
                    <ul>
                      <li className="row">
                        <b className="finance">Route A:</b>
                        <span className="green">$233</span>{" "}
                      </li>
                      <li className="row">
                        <b className="finance">Route B:</b>{" "}
                        <span className="red">$87</span>
                      </li>
                      <li className="row">
                        <b className="finance">Route C:</b>{" "}
                        <span className="red">$72</span>
                      </li>
                      <li className="row">
                        <b className="finance">Route D:</b>{" "}
                        <span className="red">$55</span>
                      </li>
                    </ul>
                  </div>
                </details>

                <details>
                  <summary>
                    <b>Financial & Growth Overview</b>
                  </summary>
                  <ul className="table">
                    <li className="row">
                      <b className="finance">Annual Lease Cost:</b>
                      <span className="green"> $6.0K</span>
                    </li>
                    <li className="row">
                      <b className="finance">Cost per Mile:</b>
                      <span className="red"> $0</span>
                    </li>
                    <li className="row">
                      <b className="finance">Expansion:</b>
                      <span className="green"> 450 mi</span>
                    </li>
                    <li className="row">
                      <b className="finance">Budget:</b>
                      <span className="red"> $5.2M</span>
                    </li>
                  </ul>
                </details>
              </ol>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-left">
            <p>© 2024 Network Management Systems. All rights reserved.</p>
          </div>

          <div className="footer-right">
            <div className="status-indicator">
              <span className="dot blue-pulse"></span>
              System Status: <b>Optimal</b>
            </div>
            <div className="links">
              <span>Support</span>
              <span>Privacy Policy</span>
              <span>API Docs</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
