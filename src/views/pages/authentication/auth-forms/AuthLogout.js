import { logout } from 'services/apis/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(logout());
        navigate('/auth/login');
    }, []);

    return null;
};

export default Logout;
