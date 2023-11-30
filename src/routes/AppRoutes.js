import { Route, Routes } from "react-router-dom";
import ModalDetailUser from '../components/User/ModalDetailUser';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import PrivateRoute from "./PrivateRoutes";
import TableUsers from "../components/User/TableUsers";

const AppRouters = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users/:id" element={<ModalDetailUser />} />
                <Route path="/users" element={
                    <PrivateRoute >
                        <TableUsers />
                    </PrivateRoute>} />
            </Routes>

        </div>
    )
}

export default AppRouters;