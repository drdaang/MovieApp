import React,{useRef,useState} from 'react';
import NavLinks from './NavLinks';

import './MainNavbar.css';
import Lottie,{LottieRefCurrentProps} from "lottie-react";
import movieAnimation from '../movieAnimation'
const MainNavBar = () => {
    // const [movieAOS, setMovieAOS] = useState(true);
    // const movieRef = useRef<LottieRefCurrentProps>(null);
    // function MovieAOSHandler() {
    //     if (movieAOS === true) {
    //         setMovieAOS(false);
    //         movieRef.current?.stop();
    //     }
    //     else {
    //         setMovieAOS(true);
    //         movieRef.current?.play();
    //     }
    // }
    return (
        <nav className="main_navbar">
            <div className="left-container">
            <div className="movie-animation">
                    <Lottie animationData={ movieAnimation} loop={true} />
            </div>
                <h1>MovieApp</h1>
            </div>
            <nav>
            <NavLinks />
            </nav>
            
        </nav>
    );
}
export default MainNavBar;