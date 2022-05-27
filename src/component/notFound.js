import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const path = '/kasir';

export default function Error() {
  const navigate = useNavigate();

  if (localStorage.getItem('token') !== '') {
    navigate(path);
  } else {
    return (
      <Container
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ height: '80vh' }}
      >
        <h1>Not Found</h1>
        <h4>400</h4>
        <p className="fw-light fs-4">Input Matched Url</p>
      </Container>
    );
  }
}
