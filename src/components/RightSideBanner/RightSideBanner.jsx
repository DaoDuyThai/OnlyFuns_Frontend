import './RightSideBanner.css'
import Carousel from 'react-bootstrap/Carousel';

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