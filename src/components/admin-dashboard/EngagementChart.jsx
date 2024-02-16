import LineChart from '../charts/LineChart.jsx';
import '../../style/admin-dashboard/EngagementChart.css';
import { useState } from 'react';
import { PostData } from '../../../Data.js';
import DateTimer from '../../utilities/DateCount.js';

// eslint-disable-next-line react/prop-types
function EngagementChart() {
    const [selected, setSelected] = useState('post');
    const [postData, setPostData] = useState({
        labels: DateTimer,
        datasets: [
            {
                label: 'Post',
                data: PostData.map((data) => data.post),
                borderColor: ['#1877f2'],
            },
        ],
    });
    const [commentData, setCommentData] = useState({
        labels: DateTimer,
        datasets: [
            {
                label: 'Comment',
                data: PostData.map((data) => data.comments),
                borderColor: ['#54c7ec'],
            },
        ],
    });
    const [allData, setAllData] = useState({
        labels: DateTimer,
        datasets: [
            {
                label: 'Comment',
                data: PostData.map((data) => data.comments),
                borderColor: ['#54c7ec'],
            },
            {
                label: 'Post',
                data: PostData.map((data) => data.post),
                borderColor: ['#1877f2'],
            },
        ],
    });
    const option = {
        responsive: true,
    };
    return (
        <div className="post-chart container">
            <div className="d-flex justify-content-between">
                {selected === 'post' && <h5>Post</h5>}
                {selected === 'comment' && <h5>Comment</h5>}
                {selected === 'all' && <h5>All</h5>}
                <div className="chart-option d-flex">
                    <div
                        onClick={() => setSelected('post')}
                        style={
                            selected === 'post'
                                ? {
                                      backgroundColor: '#ebf5ff',
                                      color: '#0064d1',
                                  }
                                : {}
                        }
                    >
                        <p>Posts</p>
                    </div>
                    <div
                        onClick={() => setSelected('comment')}
                        style={
                            selected === 'comment'
                                ? {
                                      backgroundColor: '#ebf5ff',
                                      color: '#0064d1',
                                  }
                                : {}
                        }
                    >
                        <p>Comments</p>
                    </div>
                    <div
                        onClick={() => setSelected('all')}
                        style={
                            selected === 'all'
                                ? {
                                      backgroundColor: '#ebf5ff',
                                      color: '#0064d1',
                                  }
                                : {}
                        }
                    >
                        <p>All</p>
                    </div>
                </div>
            </div>
            <hr />
            {selected === 'post' ? (
                <LineChart data={postData} option={option} />
            ) : (
                <></>
            )}

            {selected === 'comment' ? (
                <LineChart data={commentData} option={option} />
            ) : (
                <></>
            )}

            {selected === 'all' ? (
                <LineChart data={allData} option={option} />
            ) : (
                <></>
            )}
        </div>
    );
}

export default EngagementChart;
