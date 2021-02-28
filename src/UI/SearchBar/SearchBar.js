import { useState } from 'react';
import classes from './search.module.css';

function SearchBar() {

    const [query, setQuery] = useState('');

    function submitForm(e) {
        e.preventDefault();

    }

    return (
        <div className={classes.Top}>
            <form>
                <input onChange={(event) => setQuery(event.target.value)} type="text" />
                <button onClick={(event) => submitForm(event)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;