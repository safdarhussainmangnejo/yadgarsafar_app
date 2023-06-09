import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
  
    useEffect(()=>{
        localStorage.clear();
        navigate('/signin');
    },[])
    return (
        <>
        logout
        </>
    )

}
export default Logout;