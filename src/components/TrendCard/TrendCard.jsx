// import React from 'react'
import './TrendCard.css'
// import {TrendData} from '../../Data/TrendData.js'

const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>TOP TRENDING</h3>
            <div className="trend">
                <h4>#Trend1</h4>
                <span className='numberOfShare'>100k shared</span>
            </div>
            <div className="trend">
                <h4>#Trend2</h4>
                <span className='numberOfShare'>100k shared</span>
            </div>
            <div className="trend">
                <h4>#Trend3</h4>
                <span className='numberOfShare'>100k shared</span>
            </div>
            <div className="trend">
                <h4>#Trend4</h4>
                <span className='numberOfShare'>100k shared</span>
            </div>
            <div className="trend">
                <h4>#Trend5</h4>
                <span className='numberOfShare'>100k shared</span>
            </div>
            <div className="trend">
                <h4>#Trend6</h4>
                <span className='numberOfShare'>100k shared</span>
            </div>
        </div>
    )
}
export default TrendCard