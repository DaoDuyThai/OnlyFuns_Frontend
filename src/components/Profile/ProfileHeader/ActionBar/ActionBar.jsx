import './ActionBar.css';
import { Link } from 'react-router-dom';
const ActionBar = () => {
    return (
        <div className="actionBar">
            <nav>
                <button>
                    <Link
                        to="/profile"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        Timeline
                    </Link>
                </button>
                <button>
                    <Link
                        to="/connections"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        Connections
                    </Link>
                    <span>9,567</span>
                </button>
            </nav>
        </div>
    );
};
export default ActionBar;
