import React, {useState} from "react";
import { Base64 } from "js-base64";
import "../../Design/login.css";
import FormsApi from "../../../api/api";
import user from "../../../app.config";


import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Button,
  Link,
} from "@mui/material";
import LoginImg from "../../../assets/hostel.webp";
import HostelCards from "../../../Components/cards";
import Navheader from "../../../Components/Navheader";
import Footer from "../../../Components/Footer";


function Login() {
    const [rememberMe, setRememberMe] = useState(true);
    const [apiFeedBackError, setApiFeedBackError] = useState(false);
    const [submit, setSubmit] = useState(false);
    const form_submit = async(e)=>{
      e.prevetDefault();
      setSubmit(true);
      const fd = new FormData(e.target);
      let formcontent = {};
      fd.forEach((value, key)=>{
        formcontent[key] = value;
      })
        let api = new FormsApi();
        let res = await api.post("/user/login", formcontent);
        if (res === "Error") {
          setApiFeedBackError(true);
          setSubmit(false);
          return;
        }
        if (res.status === false) {
      setApiFeedBackError(true);
      setSubmit(false);
    } else {
      if (rememberMe) {
        const data = Base64.encode(JSON.stringify(res.user));
        localStorage.setItem("token", data);
        setSubmit(false);
      } else {
        const data = Base64.encode(JSON.stringify(res.user));
        sessionStorage.setItem("token", data);
        setSubmit(false);
      }
      window.location.reload();
    }
  };
  if (user) return <HostelCards/>;

  return (
    <>
      <Navheader />
      <main>
        <div className="login-container">
          <div>
            <div className="form-container">
              <form className="login-form" onSubmit={form_submit}>
                <h3>Login to Your Beacon Account</h3>
                <div className="login-inputs-">
                  <TextField
                    error={apiFeedBackError}
                    helperText={
                      apiFeedBackError
                        ? "Wrong Phone number"
                        : "Fill in your Phone number"
                    }
                    variant="outlined"
                    label="Phone Number"
                    type="text"
                    name="id"
                    fullWidth
                    style={{ margin: "20px 0px" }}
                  />
                  <TextField
                    error={apiFeedBackError}
                    helperText={
                      apiFeedBackError
                        ? "Wrong Password or some network error"
                        : "Fill in your password"
                    }
                    variant="outlined"
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    style={{ margin: "20px 0px" }}
                  />
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          name="rem_me"
                          checked={rememberMe}
                          onChange={() => {
                            setRememberMe(!rememberMe);
                          }}
                        />
                      }
                      label="Remember Me On this Device"
                    />
                  </FormGroup>
                </div>
                <div className="login-btn">
                  <Button
                    color="primary"
                    variant={submit ? "outlined" : "contained"}
                    type="submit"
                    style={{
                      width: "100%",
                      margin: "20px 0px",
                      padding: "0.5rem",
                    }}
                  >
                    <CircularProgress
                      size={15}
                      thickness={10}
                      style={{
                        marginRight: "20px",
                      }}
                    />
                    Login
                  </Button>
                </div>
                <div>
                  Not Registered?
                  <Link to="/register">
                    <span
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        marginLeft: "5px",
                      }}
                    >
                      Register Here
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Login;
