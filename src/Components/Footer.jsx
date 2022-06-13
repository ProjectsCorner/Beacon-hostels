import React from 'react';
import "../Design/footer.css";
import { Button, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import BeaconLogo from "../assets/beacon logo8.jpg";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-one">
          <div className="footer-sub1">
            <div className="footer-logo">
              <img src={BeaconLogo} alt="" />
              <div className="text">
                <p>
                  Beacon Hostels is the online hostel booking system
                  <br /> for Lira University that enables students to book their
                  <br /> prefered hostels from any part of the world.
                  <br />
                  This is one of the leading sites in Uganda and Africa as A
                  whole.
                  <br />
                  You are all welcome to Lira University the center of
                  innovation.
                </p>
              </div>
            </div>
            <div className="footer-handles">
              <div>Follow Us On Our Social Media handles</div>
              <span>
                <FacebookIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
              <span>
                <LinkedInIcon />
              </span>
              <span>
                <YouTubeIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
              <span>
                <WhatsAppIcon />
              </span>
              <span>
                <TelegramIcon />
              </span>
            </div>
          </div>

          <div className="footer-sub4">
            <div className="footer-heading">Quick Links</div>
            <div className="footer-link">About Us</div>
            <div className="footer-link">Featured Hostels</div>
            <div className="footer-link">Login</div>
            <div className="footer-link">Register</div>
            <div className="footer-link">Home</div>
            <div className="footer-link">My Profile</div>
            <div className="footer-link">How to Book</div>
          </div>
          <div className="footer-sub2">
            <div className="footer-heading">Feed back</div>
            <div className="footer-feedback">
              <form autoComplete="off">
                <TextField
                  label="Write to us..."
                  name="user_name"
                  variant="outlined"
                  color="primary"
                  style={{ width: "100%", margin: "10px 0px" }}
                />
                <br />
                <TextField
                  label="Email"
                  name="user_name"
                  variant="outlined"
                  color="primary"
                  style={{ width: "100%", margin: "15px 0px" }}
                />
                <br />
                <Button
                variant='contained'>submit</Button>
                <br />
              </form>
            </div>
          </div>
        </div>
        <div className="footer-two">
          <div>{new Date().getFullYear()} &copy; Beacon Hostels Lirauni</div>
          <div>Brought to you by @peter and gaston</div>
        </div>
      </div>
    </footer>
  );
}
