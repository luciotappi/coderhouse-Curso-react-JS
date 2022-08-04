import { Link, NavLink } from 'react-router-dom';

export default function About () {
    return (
        <div className="page">
            <h1>Este es el about!</h1>
            <div>
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/">Home</NavLink>
                {' '}
                <Link to="/users">Users</Link>
                {' '}
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/about-us">About Us</NavLink>
            </div>

        </div>
    );
}