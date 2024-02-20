import '../../style/AdminAdsManager/AdsManager.css';
import { useState } from 'react';
import CreateAdsModal from './CreateAdsModal.jsx';

function AdsManagement() {
    const adsList = [
        {
            name: 'Coffee Ads',
            delivery: 'Active',
            result: 0,
            duration: '1 day',
        },
        {
            name: 'Ad 2',
            delivery: 'Inactive',
            result: 0,
            duration: '2 days',
        },
        {
            name: 'Ad 3',
            delivery: 'Inactive',
            result: 0,
            duration: '3 days',
        },
        {
            name: 'Ad 4',
            delivery: 'Inactive',
            result: 0,
            duration: '4 days',
        },
        {
            name: 'Ad 5',
            delivery: 'Inactive',
            result: 0,
            duration: '4 days',
        },
    ];
    const [ads, setAds] = useState(adsList);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className="ads-manage">
            <div className="ads-manager-header">
                <h3>ADS Management</h3>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="ads-manage-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4 className="fw-bold">Ads</h4>
                            <p>Ads activity is reported</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <button
                                className="ads-create-btn"
                                onClick={() => setModalIsOpen(!modalIsOpen)}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="ads-manage-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Delivery</th>
                                    <th>Result</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ads.map((ad, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a
                                                className="ads-to-detail"
                                                href="#"
                                            >
                                                {ad.name}
                                            </a>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className={
                                                        ad.delivery === 'Active'
                                                            ? 'ads-active me-2'
                                                            : 'ads-inactive me-2'
                                                    }
                                                ></div>
                                                {ad.delivery}
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>{ad.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CreateAdsModal
                modalIsOpen={modalIsOpen}
                onSelect={() => setModalIsOpen(!modalIsOpen)}
            />
        </div>
    );
}

export default AdsManagement;
