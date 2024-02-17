import LineChart from '../charts/LineChart.jsx';
import '../../style/admin-dashboard/EngagementChart.css';
import { useMemo, useState } from 'react';
import { PostData } from '../../../Data.js';
import DateTimer from '../../utilities/DateCount.js';

// eslint-disable-next-line react/prop-types
function EngagementChart() {
    const [selected, setSelected] = useState('post');
    const data = useMemo(() => {
        switch (selected) {
            case 'post':
                return {
                    labels: DateTimer,
                    datasets: [
                        {
                            label: 'Post',
                            data: PostData.map((data) => data.post),
                            borderColor: ['#1877f2'],
                        },
                    ],
                };
            case 'comment':
                return {
                    labels: DateTimer,
                    datasets: [
                        {
                            label: 'Comment',
                            data: PostData.map((data) => data.comments),
                            borderColor: ['#54c7ec'],
                        },
                    ],
                };
            case 'all':
                return {
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
                };
            default:
                return null;
        }
    }, [selected]);
    const option = {
        responsive: true,
    };
    return (
        <div className="post-chart mb-2">
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
            <LineChart data={data} option={option} />
        </div>
    );
}

export default EngagementChart;
