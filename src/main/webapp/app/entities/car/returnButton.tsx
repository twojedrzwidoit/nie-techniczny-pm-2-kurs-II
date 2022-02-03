import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReturnCarButton = ({ func }) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (<div><Col style={{textAlign: 'right'}}>
    <div style={{height: 150, marginTop: 55}}>
      <Button color="primary" onClick={toggle}>
        {' '}
        <FontAwesomeIcon icon="home"/> Zwróć wcześniej
      </Button>
    </div>
  </Col>
  <Modal isOpen={modal} toggle={toggle}>
    <ModalBody>
      <div> Potwierdź zwrot samochodu. Pojazd należy odprowadzić do najbliższego punktu w ciągu 24h.</div>
      <div style={{marginTop: 10}}>
        <Button onClick={func} color="primary">
          {' '}
          <FontAwesomeIcon icon="home"/> Potwierdzam zwrot
        </Button>
      </div>
    </ModalBody>
  </Modal></div>)
}
export default ReturnCarButton;

