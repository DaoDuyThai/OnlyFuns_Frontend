import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
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
        <div className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input 
                className='form-control'
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch} className='btn btn-primary'>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </button>
        </div>
    );
}

export default Search;
