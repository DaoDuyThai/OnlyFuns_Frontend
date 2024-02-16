import ReportedPost from './ReportedPost.jsx';
import '../../style/list-report/ReportedContent.css';

function ReportedContent() {
    return (
        <div className="reported-content">
            <div className="report-header">
                <h3 className="container">Reported Content</h3>
            </div>
            <ReportedPost />
        </div>
    );
}

export default ReportedContent;
