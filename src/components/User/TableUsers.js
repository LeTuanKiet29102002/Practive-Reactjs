import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../../services/UserServices';
import ReactPaginate from 'react-paginate';

const TableUsers = () => {
    const [listUsers, setlistUsers] = useState([]);
    const [TotalUsers, setTotalUsers] = useState(0);
    const [TotalPage, setTotalPage] = useState(0);

    useEffect(() => {
        getUsers(1);
    }, []);

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setTotalUsers(res.total);
            setTotalPage(res.total_pages);
            setlistUsers(res.data);
        }
    }
    const handlePageClick =(event)=>{
        getUsers(+event.selected+1);
    }

    return (
        <div className='mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>First Name</th>
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
                                    <td><img style={{ borderRadius: '50%', height: '30px', width: '30px' }} src={item.avatar} /></td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>Action</td>
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
        </div>
    )
}

export default TableUsers