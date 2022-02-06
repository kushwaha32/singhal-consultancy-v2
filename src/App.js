import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/jqvmap/jqvmap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.css";
import "admin-lte/plugins/summernote/summernote-bs4.min.css";
import "./index.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import People from "./pages/people";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoutes from "./routes/protectedRoute";
import Dashbord from "./pages/admin/dashbord";
import Thefirmadmin from "./pages/admin/thefirm";
import Areaofexpertise from "./pages/admin/areaofExpertise";
import Loader from "./components/loader/loader";
import Login from "./pages/login";
import ThefirmForm from "./pages/admin/thefirmForm";
import ThefirmUpdate from "./pages/admin/thefirmUpdate";
import AreaOfExperseForm from "./pages/admin/areaofExpertiseForm";
import AreaofexpertiseEdit from "./pages/admin/areaofExpertiseEdit";
import IndustrySector from "./pages/admin/industrysector";
import IndustrySectorCreate from "./pages/admin/industrysectorForm";
import IndustrysectorEdit from "./pages/admin/industrysectorEdit";
import Partners from "./pages/admin/partners";
import PartnersCreate from "./pages/admin/partnersForm";
import PartnersEdit from "./pages/admin/partnersEdit";
import Associates from "./pages/admin/associates";
import AssociatesCreate from "./pages/admin/associatesForm";
import AssociatesEdit from "./pages/admin/associatesEdit";
import InformationtechnologyCreate from "./pages/admin/informationtechnologyForm";
import Informationtechnology from "./pages/admin/informationtechnology";
import InformationtechnologyEdit from "./pages/admin/informationtechnologyEdit";

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  if (load) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route exact={true} path="/admin" element={<Dashbord />} />
              <Route
                exact={true}
                path="/admin/thefirm"
                element={<Thefirmadmin />}
              />
              <Route
                exact={true}
                path="/admin/areaofexpertise"
                element={<Areaofexpertise />}
              />
              <Route
                exact={true}
                path="/admin/areaofexpertise/create"
                element={<AreaOfExperseForm />}
              />
              <Route
                exact={true}
                path="/admin/areaofexpertise/edit/:id"
                element={<AreaofexpertiseEdit />}
              />
              <Route
                exact={true}
                path="/admin/industrysector"
                element={<IndustrySector />}
              />
              <Route
                exact={true}
                path="/admin/industrysector/create"
                element={<IndustrySectorCreate />}
              />
              <Route
                exact={true}
                path="/admin/industrysetor/edit/:id"
                element={<IndustrysectorEdit />}
              />
              <Route
                exact={true}
                path="/admin/thefirm/create"
                element={<ThefirmForm />}
              />
              <Route
                exact={true}
                path="/admin/thefirm/edit/:id"
                element={<ThefirmUpdate />}
              />
              <Route
                exact={true}
                path="/admin/partners"
                element={<Partners />}
              />
              <Route
                exact={true}
                path="/admin/partners/create"
                element={<PartnersCreate />}
              />
              <Route
                exact={true}
                path="/admin/partners/edit/:id"
                element={<PartnersEdit />}
              />
              <Route
                exact={true}
                path="/admin/associates"
                element={<Associates />}
              />
              <Route
                exact={true}
                path="/admin/associates/create"
                element={<AssociatesCreate />}
              />
              <Route
                exact={true}
                path="/admin/associates/edit/:id"
                element={<AssociatesEdit />}
              />

              <Route
                exact={true}
                path="/admin/informationtechnology"
                element={<Informationtechnology />}
              />
              <Route
                exact={true}
                path="/admin/informationtechnology/create"
                element={<InformationtechnologyCreate />}
              />
              <Route
                exact={true}
                path="/admin/informationtechnology/edit/:id"
                element={<InformationtechnologyEdit />}
              />
            </Route>
            <Route exact={true} path="/" element={<Home />} />
            <Route exact={true} path="/people" element={<People />} />
            <Route exact={true} path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
};

export default App;
