import React from "react";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom b-1-primary mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <span className="px-1">Siguenos</span>
          <i className="bi-github px-1" role="img" aria-label="GitHub"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-meta px-1"></i>
          <i className="bi bi-whatsapp"></i>
        </div>
        <span className="text-muted">2021 &copy; </span>
      </div>
    </footer>
  );
}
