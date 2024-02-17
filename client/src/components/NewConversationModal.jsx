import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewConversationModal({ closeModal }) {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}></Form>
      </Modal.Body>
    </>
  )
}

NewConversationModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
}
