import { useState, useEffect, memo } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { deleteUser, getAUser } from '../../services/UserServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
const ModalDetailUser = (props) => {
    const [dataAUser, setDataAUser] = useState({});
    const navigate = useNavigate();
    const { detailId } = props
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await getAUser(id);
                console.log('check ressss', res);
                if (res && res.data && res.data.id) {
                    const dataDetail = res.data;
                    console.log('check', dataDetail);
                    setDataAUser(dataDetail)
                    // setDataAUser(dataDetail);
                    toast.success('Get detail user successfully!');
                } else {
                    toast.error('Error getting detail user!');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('An error occurred while getting detail user.');
            }
        };

        fetchData();
    }, [detailId]);

    const handleBack = () => {
        navigate('/users');
    }


    return (
        <div className='detail-user-container'>
            <h5 className='text-center'>Detail User</h5>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <div >
                    <div>Hello world from detail user with id: {dataAUser.id}</div>
                    <div>User's name: {dataAUser.first_name} {dataAUser.last_name}</div>
                    <div>Gmail: {dataAUser.email} </div>
                    <div>
                        <img alt='' src={dataAUser.avatar} style={{ height: '300px', width: '300px', borderRadius: '6px' }} />
                    </div>
                </div>
            </div>
            <div className='col-12 d-flex justify-content-center align-items-center'>
                <button className='mt-3 btn btn-primary '
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>

        </div>
    );
}

export default ModalDetailUser;