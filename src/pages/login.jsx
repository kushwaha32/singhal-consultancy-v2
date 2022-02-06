import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/adminActions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const adminLoginInfo = useSelector((state) => state.adminLogin);
  let { loading, adminInfo } = adminLoginInfo;

  //const redirect = location?.search ? location?.search.split("=")[1] : "/admin";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {adminInfo ? (
        <Navigate to="/admin" />
      ) : (
        <div className="login_admin">
          <div className="login_form_parent">
            <div className="logo_brand">
              <a href="/#slide_top">
                <h2>singhal</h2>
                <h2>consultancy</h2>
              </a>
            </div>
            <form onSubmit={submitHandler}>
              <div className="login_form">
                <h4>Sign In</h4>
                <div className="input-group my-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <button
                  type="submit"
                  className="submit_btn_recog admin_sub_btn mt-4"
                >
                  {loading ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only" />
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                <p className="mt-3">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
