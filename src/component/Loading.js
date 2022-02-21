import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading = ({ text }) => {
  return (
    <div>
      <Spinner animation="grow" role="status"></Spinner>
      <span>{`     ${text}...`}</span>
    </div>
  );
};
