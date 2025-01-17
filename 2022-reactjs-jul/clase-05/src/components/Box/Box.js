import "./Box.css";

import { useNavigate } from 'react-router-dom';

function Box({ id, img, name, last }) {
    const navigate = useNavigate();

    const loadUserDetails = () => {
        console.log(' UserId > ', id);
        navigate('/users/' + id);
    }

    return (
        <div className="user-box">
            <img src={img} />
            <span className="user-id">ID: {id}</span>
            <span>{`${name} ${last}`}</span>

            <button onClick={loadUserDetails}>Ver detalles</button>
        </div>         
    );
}

export default Box;
