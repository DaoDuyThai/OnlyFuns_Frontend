import './Comment.css'
const WriteComment = () => {
    return (
        <div className="WriteComment">
            <img
                src="https://www.w3schools.com/w3images/avatar1.png" className="" alt="BackgroundPicture"
            />
            <div>
                <input
                    type="text"
                    placeholder="What's happening?"
                    required
                //   ref={desc}
                />
            </div>
        </div>
    )
}

export default WriteComment;