import ReportedPost from './ReportedPost.jsx';
import '../../style/list-report/ReportedContent.css';

function ReportedContent() {
    return (
        <div className="reported-content">
            <div className="report-header d-flex justify-content-center">
                <h3>Reported Content</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <ReportedPost />
            </div>
        </div>
    );
}

export default ReportedContent;
