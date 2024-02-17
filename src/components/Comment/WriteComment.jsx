import './Comment.css'

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des input box to write a comment
*/
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