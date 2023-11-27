import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../../services/UserServices';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import { EditOutlined, DeleteOutlined, CheckOutlined, InfoCircleOutlined, SortDescendingOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { Button, Tooltip } from "antd";
import ModalEditUser from './ModalEditUser';
import _ from 'lodash';
import ModalConfirm from './ModalConfirm';

const TableUsers = () => {
    const [listUsers, setlistUsers] = useState([]);
    const [TotalUsers, setTotalUsers] = useState(0);
    const [TotalPage, setTotalPage] = useState(0);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showEditUser, setShowEditUser] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState({});
    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('id');

    const handleClose = () => {
        setShowAddUser(false);
        setShowEditUser(false);
        setShowDeleteUser(false);
    };
    const handleShow = () => {
        setShowAddUser(true);
    }

    useEffect(() => {
        getUsers(1);
    }, []);

    const handleEditUser = (user) => {
        setDataUserEdit(user);
        setShowEditUser(true);
    }
    const handleDeleteUser = (user) => {
        setShowDeleteUser(true)
        setDataUserDelete(user)
    }
    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setTotalUsers(res.total);
            setTotalPage(res.total_pages);
            setlistUsers(res.data);
        }
    }

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);
    }
    const handleListUsersChild = (newListUser) => {
        setlistUsers(newListUser)
    }
    const handleEditUserFromModal = (user) => {
        let cloneListUser = _.cloneDeep(listUsers);
        let index = listUsers.findIndex(item => item.id === user.id);
        cloneListUser[index].first_name = user.first_name;
        cloneListUser[index].email = user.email;
        setlistUsers(cloneListUser);

    }
    const handleDeleteUserFromModal = (user) => {
        let cloneListUser = _.cloneDeep(listUsers);
        cloneListUser = listUsers.filter(item => item.id !== user.id);
        setlistUsers(cloneListUser);

    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy);
        setSortField(sortField);
        let cloneListUser = _.cloneDeep(listUsers);
        cloneListUser = _.orderBy(cloneListUser, [sortField],[sortBy]);
        setlistUsers(cloneListUser);
    }
    console.log('check sort ', sortBy, sortField);


    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-between m-2'>
                <strong>List Users</strong>
                <button className='btn btn-primary' onClick={handleShow}>Add new user</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='d-flex justify-content-between'>
                            <span>ID</span>
                            <span>
                                <SortAscendingOutlined
                                    onClick={() => handleSort('asc', 'id')}
                                />
                                <SortDescendingOutlined
                                    onClick={() => handleSort('desc', 'id')}

                                />
                            </span>
                        </th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th className='d-flex justify-content-between'>
                            <span>First Name</span>
                            <span>
                                <SortAscendingOutlined
                                    onClick={() => handleSort('asc', 'first_name')}
                                />
                                <SortDescendingOutlined
                                    onClick={() => handleSort('desc', 'first_name')}

                                />
                            </span>
                        </th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td><img alt='avatar' style={{ borderRadius: '50%', height: '30px', width: '30px' }} src={item.avatar} /></td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td className='d-flex justify-content-around'>
                                        <Tooltip title="Xóa" >
                                            <Button
                                                shape="circle"
                                                icon={<DeleteOutlined />}
                                                onClick={() => { handleDeleteUser(item) }}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Sửa">
                                            <Button
                                                className="btn-action"
                                                shape="circle"
                                                icon={<EditOutlined />}
                                                onClick={() => handleEditUser(item)}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Chi tiết">
                                            <Button
                                                shape="circle"
                                                icon={<InfoCircleOutlined />}
                                                onClick={() => this.handleDetailUser(item)}
                                            />
                                        </Tooltip>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={TotalPage}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
            <ModalAddNew
                handleShow={handleShow}
                handleClose={handleClose}
                show={showAddUser}
                handleListUsersChild={handleListUsersChild}
                listUsers={listUsers}
            />
            <ModalEditUser
                handleClose={handleClose}
                show={showEditUser}
                dataUserEdit={dataUserEdit}
                handleEditUserFromModal={handleEditUserFromModal}

            />
            <ModalConfirm
                handleClose={handleClose}
                show={showDeleteUser}
                dataUserDelete={dataUserDelete}
                handleDeleteUserFromModal={handleDeleteUserFromModal}
            />
        </div>
    )
}

export default TableUsers