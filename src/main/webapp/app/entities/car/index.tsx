import React from 'react';

import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarRow = ({ selector, isAuthenticated, imageUrl, model, range, petrol, available, func }) => (
  <Row style={{ marginTop: 10, height: 180, backgroundColor: '#FFCC00' }}>
    <Col>
      <img src={imageUrl} width="200" height="150" style={{ marginTop: 15 }} />
    </Col>
    <Col md="6">
      <div style={{ height: 150, marginTop: 35 }}>
        <div>
          <b>Model:</b> {model}
        </div>
        <div>
          <b>Przebieg:</b> {range}
        </div>
        <div>
          <b>Paliwo:</b> {petrol}
        </div>
        <div>
          <b>Dostępny:</b> {available ? "Tak" : "Nie"}
        </div>
      </div>
    </Col>
    <Col style={{ textAlign: 'right' }}>
      {isAuthenticated ? (
        <div style={{ height: 150, marginTop: 55 }}>
          <Button data-cy={selector} onClick={func}>
            {' '}
            <FontAwesomeIcon icon="home" /> Wypożycz
          </Button>
        </div>
      ) : null}
    </Col>
  </Row>
);

export default CarRow;
