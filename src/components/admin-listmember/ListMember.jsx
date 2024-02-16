import UserCard from './UserCard.jsx';
import '../../style/admin-listmember/ListMember.css';

function ListMember() {
    return (
        <div className="list-member container">
            <div>
                <h4 className="fw-bold">Members</h4>
            </div>
            <div>
                <p>New people and Pages who join this group will appear here.</p>
            </div>
            <div className="search-bar">
                <form>
                    <input type="text" placeholder="Find a member" />
                </form>
            </div>
            <hr />
            <div>
                <UserCard />
            </div>
            <hr />
            <div>
                <h5>Admin & moderators</h5>
            </div>
            <div>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </div>
    );
}

export default ListMember;