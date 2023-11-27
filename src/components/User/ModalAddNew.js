import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import {postCreateUser} from '../../services/UserServices'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalAddNew = (props) => {

    const [name , setName]= useState("");
    const [job , setJob] = useState("");

    const { show, handleClose, listUsers,handleListUsersChild } = props;

    const handleSaveUser = async()=>{
        let res = await postCreateUser(name, job)
        console.log("check state ", res);
        if(res&&res.id){
            handleClose();
            toast.success('Add new user successfully!');
            setName('');
            setJob('');
             let newdata = {
                first_name : res.name,
                last_name : res.name,
                id: +res.id,
                email: res.job,
                avatar:`https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg`
             }
                handleListUsersChild([newdata,...listUsers]);
        }
        else{
            toast.error('Add new user error!');

        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} 
                            onChange={(event)=>{setName(event.target.value)}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" placeholder="Job" value={job} onChange={(event)=>{setJob(event.target.value)}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;