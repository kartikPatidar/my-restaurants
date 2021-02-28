import logo from '../../Images/logo.png';
import classes from './nav.module.css';

function Navigation() {
    return (
        <header class={classes.Toolbar}>
            <div class={classes.Brand}>
                <b>My Restaurants</b>
            </div>
            <img src={logo} height="50" width="100" />
            <nav>
                <ul class={classes.navigationItems}>
                    <li class={classes.navigationItem}><a href="index.html">HOME</a></li>
                    <li class={classes.navigationItem}><a href="#">DUMMY</a></li>
                    <li class={classes.navigationItem}><a href="#">Developer</a></li>
                    <li class={classes.navigationItem}><a href="#">References</a></li>
                </ul>
            </nav>
            <p>Router remaining</p>
        </header>

    );
}

export default Navigation;
