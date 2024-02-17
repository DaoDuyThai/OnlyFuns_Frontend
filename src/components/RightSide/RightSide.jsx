// import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from '../TrendCard/TrendCard';
import RightSideBanner from '../RightSideBanner/RightSideBanner';

// import ShareModal from "../ShareModal/ShareModal";
const RightSide = () => {
    // const [modalOpened, setModalOpened] = useState(false);

    return (

        <div className="RightSide">
            {/* TrendCard */}
            <TrendCard />

            {/* Share buttong
                <button className="button r-button" onClick={() => setModalOpened(true)}>
                    Share
                </button>
                <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
            <RightSideBanner />
        </div>




    )
}
export default RightSide