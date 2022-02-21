import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer fixed-bottom b-1-primary mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="col-md-6 d-inline-flex">
          <span className="me-4">Siguenos</span>
          <div className="me-4">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size="1.4em" color="black" />
            </Link>
          </div>
          <div className="me-4">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="1.4em" color="black" />
            </Link>
          </div>
          <div>
            <Link
              to="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size="1.4em" color="black" />
            </Link>
          </div>
        </div>
        <span className="text-muted">Fix Hogar - 2022 &copy; </span>
      </div>
    </footer>
  );
}
