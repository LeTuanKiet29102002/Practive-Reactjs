import { Route, Routes } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { useContext, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const PrivateRoute = (props) => {
    const { user } = useContext(UserContext);
    if (user && !user.auth) {
        return <>
            <Alert variant="danger" >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You ko yes quyen truy cap router nay khi chua login
                </p>
            </Alert>
        </>

    }


    return (
        <>
           {props.children}
            
        </>
    )

}

export default PrivateRoute;