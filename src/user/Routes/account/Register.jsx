import React, { useState, useEffect } from "react";
import "../../Design/register.css";
import { Base64 } from "js-base64";
import user from "../../../app.config";
import { Link, useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormsApi from "../../../api/api";

import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import Login from "./login";
import Home from "../../../Components/home";
import Navheader from "../../../Components/Navheader";
import Footer from "../../../Components/Footer";

export default function Register() {
  const nav = useNavigate();

  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState("");
  const [submit, setSubmit] = useState(false);
  const [samePassword, setSamePassword] = useState(true);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [termsCheckBox, setTermsCheckBox] = useState(true);
  const [apiPhoneUsed, setApiPhoneUsed] = useState(false);
  const handleChange = (event) => {
  setDepartment(event.target.value);
  };
    const handleChange2 = (event) => {
      setGender(event.target.value);
    };
    const form_submit = async (e) => {
      e.preventDefault();
      setSubmit(true);
      const fd = new FormData(e.target);
      let formcontent = {};
      fd.forEach((value, key) => {
        formcontent[key] = value;
      });
      if (formcontent.confirm_password !== formcontent.password) {
        setSamePassword(false);
        setApiFeedBackError(true);
        setSubmit(false);
        return;
      }
      let api = new FormsApi();
      let res = await api.post("/user/new", formcontent);
      if (res === "Error") {
        setApiFeedBackError(true);
        setSubmit(false);
        return;
      }
      if (res.status === false) {
        if (res.data === "phone") {
          setApiPhoneUsed(true);
          setSubmit(false);
          return;
        } else {
          setApiFeedBackError(true);
          setSubmit(false);
          return;
        }
      } else {
        const data = Base64.encode(JSON.stringify({ ...res.result }));
        localStorage.setItem("token", data);
        setSubmit(false);
        nav("/");
      }
    };
  return (
    <>
      <Navheader />
      <div className="register-container">
        <div>
          <form className="reg-fm" onSubmit={form_submit}>
            <h3>Register with Beacon Hostels</h3>
            <p>We are the Beacon Hostels, We value Students welfare</p>
            <div className="comb_cntr">
              <div>
                <TextField
                  label="Full Name"
                  name="user_name"
                  variant="outlined"
                  color="primary"
                  style={{ width: "100%", margin: "10px 0px" }}
                />
              </div>
              <div className="devided-fields">
                <TextField
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                  helperText={apiPhoneUsed ? "Phone Number already in use" : ""}
                />
                <TextField
                  label="University email"
                  name="email"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                />
              </div>
            </div>
            <div className="comb_cntr">
              <div className="half-fields">
                <TextField
                  label="Program"
                  name="program"
                  variant="outlined"
                  color="primary"
                  style={{ width: "100%", margin: "10px 0px" }}
                />
              </div>
              <div className="devided-fields">
                <FormControl style={{ width: "48%" }}>
                  <InputLabel id="dept-input">Department</InputLabel>
                  <Select
                    labelId="dept"
                    id="department"
                    value={department}
                    label="Department"
                    name="department"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Health Sciences</MenuItem>
                    <MenuItem value={20}>Management sciences</MenuItem>
                    <MenuItem value={30}>Education</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ width: "48%" }}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    name="gender"
                    onChange={handleChange2}
                  >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="devided-fields">
                <TextField
                  label="Set a Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                  helperText={samePassword ? "" : "Passwords Don't Match"}
                  error={!samePassword}
                />
                <TextField
                  label="Confirm Password"
                  name="confirm_password"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                  helperText={
                    samePassword ? "Dont Mismatch" : "Passwords Don't Match"
                  }
                  error={!samePassword}
                />
              </div>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="t-and-c"
                      checked={termsCheckBox}
                      onChange={() => {
                        setTermsCheckBox(!termsCheckBox);
                      }}
                    />
                  }
                  label="I agree to T&C of Beacon Hostels"
                />
              </FormGroup>
            </div>
            <div>
              <Button
                variant="outlined"
                type="submit"
                color={apiFeedBackError ? "secondary" : "primary"}
                style={{
                  width: "100%",
                  margin: "15px 0px",
                  fontSize: "11.5px",
                }}
                disabled={!termsCheckBox}
              >
                <CircularProgress
                  size={15}
                  thickness={10}
                  style={{
                    display: submit ? "inline-block" : "none",
                    marginRight: "20px",
                  }}
                />
                {submit
                  ? "Please Wait..."
                  : apiFeedBackError
                  ? "Something Went Wrong, Try again "
                  : "Submit "}
                Register
              </Button>
            </div>
            <div style={{ width: "100%", marginBlock: "10px" }}>
              Already having an account?
              <Link to="/login">
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    marginLeft: "5px",
                  }}
                >
                  Sign in here
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
