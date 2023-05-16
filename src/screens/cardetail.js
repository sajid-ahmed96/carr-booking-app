import React from 'react'

function Cardetail() {
    return (
        <>
            <div>cardetail</div>
            <div>
                <img src="https://imgd.aeplcdn.com/1200x900/cw/ec/23799/Mitsubishi-Montero-Right-Front-Three-Quarter-74529.jpg?wm=0&q=75" alt="" width="500px" />
            </div>
            <div className="car-details">
                <h3>Car: <span>Mitsubishi</span></h3>
                <h3>Model: <span>Montero</span></h3>
            </div>
            <div className="features">
                <div>
                    <h2>Features</h2>
                </div>
                <div>
                    <label htmlFor="ac">
                        <input type="checkbox" checked disabled name="" id="ac" /> AC
                    </label>
                </div>
                <div>
                    <label htmlFor="gps">
                        <input type="checkbox" checked disabled name="" id="gps" /> GPS
                    </label>
                </div>
                <div>
                    <label htmlFor="bluetooth">
                        <input type="checkbox" checked disabled name="" id="bluetooth" /> Bluetooth
                    </label>
                </div>
                <div>
                    <label htmlFor="usbport">
                        <input type="checkbox" checked disabled name="" id="usbport" /> USB Port
                    </label>
                </div>
            </div>
            <div className="reviews">
                <div>
                    <h2>Reviews & Ratings</h2>
                </div>
                <div>
                    <h3 className='user-name'>Username</h3>
                    <p className='rating'>rating</p>
                    <p className='description'>Description: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam consequatur eius labore rerum dolore. Quaerat!</span></p>
                </div>
            </div>
            <div className="availability">
                <div>
                    <h2>Available On</h2>
                </div>
                <div>
                    <p>Monday</p>
                    <p>Thurday</p>
                    <p>Friday</p>
                </div>
            </div>
        </>
    )
}

export default Cardetail