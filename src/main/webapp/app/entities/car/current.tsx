import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import { Button, Col, Row } from 'reactstrap';

/* jhipster-needle-add-route-import  */
import { Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';

const CarCurrentRow = ({ imageUrl, model, status, statusMessage, func, from, to }) => {
  return (
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
            <b>Status:</b> {status}
          </div>
          <div>
            <b>Od:</b> {from}
          </div>
          <div>
            <b>Do:</b> {to}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CarCurrentRow;
