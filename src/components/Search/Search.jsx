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
        <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">

            <input className='form-control'
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch} className='btn btn-primary'>
                <div>
                    <i className="fas fa-search fa-lg mb-1"></i>
                </div>
            </button>
        </form>
    );
}

export default Search;

<form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">

    <button className="btn btn-primary" type="button" data-mdb-ripple-color="dark">
        <div>
            <i className="fas fa-search fa-lg mb-1"></i>
        </div>
    </button>
</form>
