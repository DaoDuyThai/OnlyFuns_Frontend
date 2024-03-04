// import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from '../TrendCard/TrendCard';
import RightSideBanner from '../RightSideBanner/RightSideBanner';
import HomeAdsBanner from '../ads-banner/HomeAdsBanner.jsx';

// import ShareModal from "../ShareModal/ShareModal";

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des right side of the home page
*/
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
            <HomeAdsBanner/>
        </div>




    )
}
export default RightSide