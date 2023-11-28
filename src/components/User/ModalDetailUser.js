import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { deleteUser } from '../../services/UserServices'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalDetailUser = (props) => {


    const { show, handleClose, dataUserDelete,handleDeleteUserFromModal } = props;
    const handleConfirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.id);
        if (res && +res.statusCode === 204) {
            toast.success('Delete user successfully!');
            handleClose();
            handleDeleteUserFromModal(dataUserDelete);
        }else{
            toast.error('Error deleting user!')
        }
        console.log('check res', res);

    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete a new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h5>Are you sure you want to delete, email :</h5> <br></br>
                        <strong >{dataUserDelete.email}</strong>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDetailUser;