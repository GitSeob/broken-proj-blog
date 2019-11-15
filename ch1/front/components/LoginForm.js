import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd'
import Link from 'next/link';
import { useInput }from '../pages/signup';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
// import { loginAction } from '../reducers/user';

const LoginForm = () => {
    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('');
    const { isLoggedIn } = useSelector(state=>state.user);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
            id, password
        });
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                userId: id,
                password
            }
        });
    }, [id, password]);

    return (
        <Form onSubmit={onSubmitForm} style={{ padding: '10px'}}>
            <div style={{marginBottom: '10px'}}>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <Button type="primary" htmlType="submit" loading={isLoggedIn} style={{marginRight: '20px'}}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div> 
        </Form>
    );
};

export default LoginForm;