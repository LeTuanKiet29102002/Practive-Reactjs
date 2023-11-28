import { LeftOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div className="login-container col-12 col-sm-4">
            <div className="title">Log in</div>
            <div className="text">Email or username</div>
            <input type="text" placeholder="Email or username..."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className='password'>
                <input type={isShowPassword === true ? 'text' : 'password'} placeholder="Password..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <i className={isShowPassword === true ? 'eye' : 'un-eye'} onClick={() => setIsShowPassword(!isShowPassword)}>
                    {isShowPassword===true ? <EyeOutlined className='eye' /> : <EyeInvisibleOutlined className='un-eye' />}
                </i>
            </div>
            <button className={email && password ? 'active' : ''}
                disabled={email && password ? false : true}
            >Login</button>
            <div className="back ">
                <LeftOutlined className='icon-back' />
                Go back
            </div>
        </div>
    )
}

export default Login