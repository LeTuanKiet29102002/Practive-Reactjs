import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { putUpdateUser } from '../../services/UserServices'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ModalEditUser = (props) => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;


    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job);
        if (res && res.updatedAt) {

            handleEditUserFromModal({
                first_name : name,
                id : dataUserEdit.id,
                email: job
            });
            handleClose();
            toast.success('Update user successfully!')
        }
        console.log('check ham',res);
    }
    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name);
            setJob(dataUserEdit.email);
        }
    }, [dataUserEdit])
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name}
                                onChange={(event) => { setName(event.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" placeholder="Job" value={job} onChange={(event) => { setJob(event.target.value) }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditUser;