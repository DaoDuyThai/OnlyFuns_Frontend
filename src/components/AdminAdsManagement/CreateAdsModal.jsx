import Modal from 'react-modal';
import '../../style/AdminAdsManager/CreateAdsModal.css';

// eslint-disable-next-line react/prop-types
function CreateAdsModal({ modalIsOpen, onSelect }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <div>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="create-ads">
                    <div className="create-ads-header mb-4">
                        <div className="d-flex justify-content-between">
                            <h4>Create Ads</h4>
                            <button className="close-btn" onClick={onSelect}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="create-ads-body">
                        <form>
                            <div>
                                <div className="form-group mb-2">
                                    <label
                                        htmlFor="ads-name"
                                        className="form-label"
                                    >
                                        Ads Name
                                    </label>
                                    <input
                                        type="text"
                                        id="ads-name"
                                        className="form-control"
                                        placeholder="Enter Ads Name"
                                    />
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="form-group col-6">
                                    <div>
                                        <label
                                            htmlFor="ads-begin"
                                            className="form-label"
                                        >
                                            Begin
                                        </label>
                                        <input
                                            type="datetime-local"
                                            id="ads-begin"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <div>
                                        <label
                                            htmlFor="ads-end"
                                            className="form-label"
                                        >
                                            End
                                        </label>
                                        <input
                                            type="datetime-local"
                                            id="ads-end"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="form-group col-6">
                                    <label
                                        htmlFor="banner-submit"
                                        className="form-label"
                                    >
                                        Banner Img
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="banner-submit"
                                    />
                                </div>
                                <div className="form-group col-6">
                                   <label htmlFor='active' className='form-label'>Active</label>
                                   <select id='active' className='form-control'>
                                       <option value="true">True</option>
                                       <option value="false" selected>False</option>
                                   </select>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <button className='submit-ads'>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CreateAdsModal;
