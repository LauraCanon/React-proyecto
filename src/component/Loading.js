import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div>
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
