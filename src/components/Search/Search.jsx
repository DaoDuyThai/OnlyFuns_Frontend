import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        setSearchValue(q);
    }, [location.search]);

    const handleSearch = (event) => {
        event.preventDefault();
        if (!searchValue) {
            return;
        }
        setSearchValue(searchValue);
        navigate(`/search/top?q=${searchValue}`);
    };

    return (
        <div>
            <li className="search-bar">
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={handleSearch} className='custom-button'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </li>
        </div>
    );
}

export default Search;
