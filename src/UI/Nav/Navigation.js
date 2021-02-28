import logo from '../../Images/logo.png';
import classes from './nav.module.css';

function Navigation() {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Brand}>
                <b>My Restaurants</b>
            </div>
            <img src={logo} height="50" width="100" alt='logo' />
            <nav>
                <ul className={classes.navigationItems}>
                    <li className={classes.navigationItem}><a href="df">HOME</a></li>
                    <li className={classes.navigationItem}><a href="df">DUMMY</a></li>
                    <li className={classes.navigationItem}><a href="df">Developer</a></li>
                    <li className={classes.navigationItem}><a href="df">References</a></li>
                </ul>
            </nav>
            <p>Router remaining</p>
        </header>

    );
}

export default Navigation;
