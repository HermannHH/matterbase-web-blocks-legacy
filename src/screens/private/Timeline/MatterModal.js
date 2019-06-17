import React from 'react'
import { Modal, Button } from 'react-bootstrap';

import MatterModalForm from 'screens/private/Timeline/MatterModal/MatterModalForm';

export default function MatterModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <MatterModalForm />
    </Modal>
  )
}
