import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* jhipster-needle-add-route-import - JHipster will add routes here */
import { Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';

const CarCurrentRow = ({ imageUrl, model, status, statusMessage, func, from, to }) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

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
      <Col style={{ textAlign: 'right' }}>
        <div style={{ height: 150, marginTop: 55 }}>
          <Button color="primary" onClick={toggle}>
            {' '}
            <FontAwesomeIcon icon="home" /> Zwróć wcześniej
          </Button>
        </div>
      </Col>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div> Potwierdź zwrot samochodu. Pojazd należy odprowadzić do najbliższego punktu w ciągu 24h.</div>
          <div style={{ marginTop: 10 }}>
            <Button onClick={func} color="primary">
              {' '}
              <FontAwesomeIcon icon="home" /> Potwierdzam zwrot
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Row>
  );
};

export default CarCurrentRow;
