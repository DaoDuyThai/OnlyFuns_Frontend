import ReportedPost from './ReportedPost.jsx';
import '../../style/list-report/ReportedContent.css';
import { useEffect, useState } from 'react';
import { getReportsPost } from '../../service/PostService.js';

function ReportedContent() {
    const [reportPosts, setReportPosts] = useState(null);
    useEffect(() => {
        getReportsPost('post/report')
            .then((res) => setReportPosts(res.data))
            .catch((e) => console.log(e));
    }, []);
    return (
        <div className="reported-content">
            <div className="report-header d-flex justify-content-center">
                <h3>Reported Content</h3>
            </div>
            <div className="d-flex justify-content-center">
                {reportPosts ? (
                    reportPosts.map((post) => <ReportedPost post={post} />)
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default ReportedContent;
