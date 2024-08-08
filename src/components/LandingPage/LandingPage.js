// import React from 'react'
// import './LandingPage.css'
// import NavBar from '../NavBar/NavBar'

// const LandingPage = () => {
//     return (
//         <div className='image'>
//             <NavBar />

//             <div class="container-land ">

//                 <div class="text-container">
//                     <div>
//                         <div class="background-box"></div>
//                         <div class="text-content" alt="first">
//                             <div>
//                                 <div className='text-1'>Helping People Communicate</div>
//                                 <div className='text-2'>Complete Technology Solutions Provider</div>
//                                 <div className='btns'>
//                                     <button type="submit" class="submit-btnk ">What We Do</button>
//                                     <button type="submit" class="submit-btns submit-btnc">See Our Work</button>
//                                     <button type="submit" class="submit-btns1 su submit-btn margine">Contact Us</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default LandingPage

import React from 'react'
import './LandingPage.css'
import NavBar from '../NavBar/NavBar'
import Aes from '../../assets/aes.mp4'
import Room from '../../assets/room.jpg'

const LandingPage = () => {
    return (
        <div className='video-background'>
            {/* <video autoPlay loop muted className='background-video'>
                <source src={Aes} type='video/mp4' />
                Your browser does not support the video tag.
            </video> */}

            {/* <img src={Room} /> */}
            <NavBar />

            <div className="container-land">
                <div className="text-container">
                    <div>
                        <div className="background-box"></div>
                        <div className="text-content" alt="first">
                            <div>
                                <div className='text-1'>Helping People Communicate</div>
                                <div className='text-2'>Complete Technology Solutions Provider</div>
                                <div className='btns'>
                                    <button type="submit" className="submit-btnk">What We Do</button>
                                    <button type="submit" className="submit-btns submit-btnc">See Our Work</button>
                                    <button type="submit" className="submit-btns1 su submit-btn margine">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
