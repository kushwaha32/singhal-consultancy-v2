import { Link } from "react-router-dom";
import "./sidenav.css";

const Sidenav = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/admin" className="brand-link admin_brand_Link">
          <span className="brand-text font-weight-light">Singhal</span>
          <span className="brand-text font-weight-light">Consultancy</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
          <div className="os-resize-observer-host observed">
            <div
              className="os-resize-observer"
              style={{ left: 0, right: "auto" }}
            />
          </div>
          <div
            className="os-size-auto-observer observed"
            style={{ height: "calc(100% + 1px)", float: "left" }}
          >
            <div className="os-resize-observer" />
          </div>
          <div
            className="os-content-glue"
            style={{ margin: "0px -8px", width: 249, height: 216 }}
          />
          <div className="os-padding">
            <div
              className="os-viewport os-viewport-native-scrollbars-invisible"
              style={{ overflowY: "scroll" }}
            >
              <div
                className="os-content"
                style={{ padding: "0px 8px", height: "100%", width: "100%" }}
              >
                {/* Sidebar user panel (optional) */}
                {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img
                      src="dist/img/user2-160x160.jpg"
                      className="img-circle elevation-2"
                      alt="User Image"
                    />
                  </div>
                  <div className="info">
                    <Link to="/admin" className="d-block">
                      Abhishak shinghal
                    </Link>
                  </div>
                </div> */}

                <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column cu_nav">
                    <li className="nav-item">
                      <Link to="/admin/thefirm" className="nav-link ">
                        <i className="nav-icon fas fa-tachometer-alt mr-2" />
                        <p>The Firm</p>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav nav-pills nav-sidebar flex-column cu_nav">
                    <li className="nav-item">
                      <Link to="/admin/areaofexpertise" className="nav-link ">
                        <i className="nav-icon fas fa-tachometer-alt mr-2" />
                        <p>Area of Expertise</p>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav nav-pills nav-sidebar flex-column cu_nav">
                    <li className="nav-item">
                      <Link to="/admin/industrysector" className="nav-link ">
                        <i className="nav-icon fas fa-tachometer-alt mr-2" />
                        <p>Industry Sector</p>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav nav-pills nav-sidebar flex-column cu_nav">
                    <li className="nav-item">
                      <Link to="/admin/partners" className="nav-link ">
                        <i className="nav-icon fas fa-tachometer-alt mr-2" />
                        <p>Partners</p>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav nav-pills nav-sidebar flex-column cu_nav">
                    <li className="nav-item">
                      <Link to="/admin/associates" className="nav-link ">
                        <i className="nav-icon fas fa-tachometer-alt mr-2" />
                        <p>Associates</p>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav nav-pills nav-sidebar flex-column cu_nav">
                    <li className="nav-item">
                      <Link
                        to="/admin/informationtechnology"
                        className="nav-link "
                      >
                        <i className="nav-icon fas fa-tachometer-alt mr-2" />
                        <p>Information Technology</p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div>
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ width: "100%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ height: "15.9676%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar-corner" />
        </div>
        {/* /.sidebar */}
      </aside>
      <div id="sidebar-overlay"></div>
    </>
  );
};

export default Sidenav;
