import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Col, Row } from 'reactstrap';

/* jhipster-needle-add-route-import - JHipster will add routes here */

const CarArchiveRow = ({ imageUrl, model, from, to, status, statusMessage }) => (
  <Row style={{ marginTop: 10, height: 180, backgroundColor: '#FFCC00' }}>
    <Col>
      <img src={imageUrl} width="200" height="150" style={{ marginTop: 15 }} />
    </Col>
    <Col md="6">
      <div style={{ height: 150, marginTop: 25 }}>
        <div>
          <b>Model:</b> {model}
        </div>
        <div>
          <b>Data Wypożyczenia:</b>
        </div>
        <div>
          {' '}
          {from} - {to}
        </div>
        <div style={{ backgroundColor: statusMessage ? 'red' : 'green', padding: 5, marginTop: 10 }}>
          <div>
            <b>Status:</b>
          </div>
          <div> {status} </div>
        </div>
      </div>
    </Col>
    <Col style={{ textAlign: 'right' }}></Col>
  </Row>
);

export default CarArchiveRow;
