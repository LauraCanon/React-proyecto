import React, { useState } from "react";
import { SearchBar } from "../component/SearchBar";
import { CompLanding } from "../component/CompLanding";
import "../App.css";

export default function LandingPages() {
  return (
    <div>
      <main className="flex-shrink-0 container rounded">
        <div
          id="carouselExampleControls"
          className="carousel slide rounded"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded">
            <div
              className="carousel-item image-cover active"
              style={{ backgroundImage: "url(../img/232641266.jpg)" }}
            ></div>
            <div
              className="carousel-item image-cover rounded"
              style={{
                backgroundImage:
                  "url(../img/funny-electrician-installing-plug-with-screwdriver-carrying-mouth.jpg)",
              }}
            ></div>
            <div
              className="carousel-item image-cover rounded"
              style={{
                backgroundImage:
                  "url(../img/repairman-doing-air-conditioner-service.jpg)",
              }}
            ></div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <SearchBar />
        <CompLanding />
      </main>
    </div>
  );
}
