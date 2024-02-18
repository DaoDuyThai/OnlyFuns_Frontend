import './RightSideBanner.css'
import Carousel from 'react-bootstrap/Carousel';

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des right side banner for advertising
*/
const RightSideBanner = () => {
    return (
        <div className="rightSideBanner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="rightSideBannerImg"
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt="rightSideBannerImg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rightSideBannerImg"
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt="rightSideBannerImg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rightSideBannerImg"
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt="rightSideBannerImg" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default RightSideBanner;