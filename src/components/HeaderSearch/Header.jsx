
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css';
import { Link } from 'react-router-dom';
import OnlyFunsShortIcon from '../../assets/logo/OnlyFunsShortIcon.png';
import OnlyFunsLongIcon from '../../assets/logo/OnlyFunsLongIcon.png';


/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des navbar/header for the entire website
*/
const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);


    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='Header' >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "64px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            width="50px"
                            height="50px"
                            className="img-circle"
                            // src="src\assets\logo\OnlyFunsShortIcon.png"
                            src={OnlyFunsShortIcon}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                        {/* <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    fontSize: "17px",
                                    border: "none",
                                    outline: "none"
                                }} />
                            <button className="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                                <div>
                                    <i className="fas fa-search fa-lg mb-1"></i>
                                </div>
                            </button>
                        </form> */}
                        <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                        </ul>
                        <ul className="navbar-nav me-auto ms-auto d-flex flex-row mt-3 mt-lg-0">
                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <img
                                    height="50px"
                                    className="rounded-circle"
                                    // src="src/assets/logo/OnlyFunsLongIcon.png"
                                    src={OnlyFunsLongIcon}
                                />
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Dropdown >
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        <div style={{ height: "25px" }} className="nav-link">
                                            <i className="fas fa-message fa-lg mb-1"></i>
                                            <span className="badge rounded-pill badge-notification bg-danger">11</span>
                                        </div>
                                        Messages
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item><center>View all</center></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Link to="/" >

                                </Link>

                            </li>
                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Dropdown >
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        <div style={{ height: "25px" }} className="nav-link">
                                            <i className="fas fa-bell fa-lg mb-1"></i>
                                            <span className="badge rounded-pill badge-notification bg-danger">11</span>
                                        </div>
                                        Notifications
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                                <div className="postUser">
                                                    <img
                                                        className="postAvatar"
                                                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                                                    />
                                                    <span className='messageDropdown'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        {/* `${.substring(0, 35)}...` */}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item><center>Mark all as read</center></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Link to="/" className="nav-link">

                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#!">
                                    <div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                <img
                                                    height="35px"
                                                    className="avatar-img rounded-circle"
                                                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/318135943_1321200128668980_1721583373262765542_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=HXCk9brqwrAAX-UkCtN&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDdX4hSgNzqIWBXBHW--Sc2-ufqoTn-bRv7Sfybmjl-cw&oe=65D3605B"
                                                />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/">My Profile</Dropdown.Item>
                                                <Dropdown.Item href="/">Settings</Dropdown.Item>
                                                <Dropdown.Item href="/">Administration</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/"><center><button className='btn btn-danger'>Logout</button></center></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    );
};

export default Header;