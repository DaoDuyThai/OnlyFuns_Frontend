import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import Logo from "/src/assets/logo/OnlyFunsShortIcon.png";
import { Link, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Sidebar({ setSearchTerm }) {
    const location = useLocation();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        setSearchValue(q);
    }, [location.search]);

    const handleSearch = () => {
        setSearchTerm(searchValue);
    };

    return (
        <nav className='sidebar'>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
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
                        <li className="nav-link">
                            <Link to={'/search'}>
                                <FontAwesomeIcon icon={faEnvelope} className="icons" />
                                <span className="text nav-text">All</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={`/search/people?q=${searchValue}`}>
                                <FontAwesomeIcon icon={faUser} className="icons" />
                                <span className="text nav-text">Friends</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={`/search/posts?q=${searchValue}`}>
                            <FontAwesomeIcon icon={faPenToSquare} className="icons"/>
                                <span className="text nav-text">Post</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
