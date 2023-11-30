import { LeftOutlined, EyeInvisibleOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { LoginApi } from '../../services/UserServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import {useContext} from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loadingApi, setLoadingApi] = useState(false);
    const navigate = useNavigate();
    const { loginContext} = useContext(UserContext);

    // useEffect(() => {
    //     let token = localStorage.getItem('token');
    //     if (token) {
    //         navigate('/')
    //     }
    // }, [])

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error('Email or password is empty!');
            return;
        }
        setLoadingApi(true);
        let res = await LoginApi(email.trim(), password);
        // console.log('check res', res);
        if (res && res.token) {
            loginContext(email,res.token);
            navigate('/');

        } else {
            if (res && res.status === 400) {
                toast.error(res.data.error);
            }
        }
        setLoadingApi(false)
    }

    const handlePressEnter = async(event)=>{
        if(event && event.key ==='Enter'){
            await handleLogin();
        }
    }

    const handleGoBack = () => {
        navigate('/');
    
      }

    return (
        <div className="login-container col-12 col-sm-4">
            <div className="title">Log in</div>
            <div className="text">Email or username:(eve.holt@reqres.in)</div>
            <input type="text" placeholder="Email or username...(email ở trên)"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className='password'>
                <input type={isShowPassword === true ? 'text' : 'password'} placeholder="Password...(tùy)"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={(event)=>{handlePressEnter(event)}}
                />
                <i className={isShowPassword === true ? 'eye' : 'un-eye'} onClick={() => setIsShowPassword(!isShowPassword)}>
                    {isShowPassword === true ? <EyeOutlined className='eye' /> : <EyeInvisibleOutlined className='un-eye' />}
                </i>
            </div>
            <button
                className={email && password ? 'active' : ''}
                disabled={email && password ? false : true}
                onClick={() => { handleLogin() }}
            >
                {loadingApi && <LoadingOutlined />}
                &nbsp;&nbsp;Login
            </button>
            <div className="back " onClick={handleGoBack}>
                <LeftOutlined className='icon-back' />
                Go back
            </div>
        </div>
    )
}

export default Login