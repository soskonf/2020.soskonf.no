//@flow
import * as React from 'react';
import './Banner.less';
import SOSLogo from '../../assets/logo/sos-logo-flat-invert-1860x142.png';

function Banner() {
    return (
        <div className="banner">
            <div className='logos'>
                <img className='soslogo' src={SOSLogo} alt="SoS" />
                {/*<h1 className='sostext'>Sikkerhet og Sårbarhet 2020</h1>*/}
            </div>

            <div className="logo-text">
                <h2>Pirsentert 28.-29. April. 2020, Trondheim</h2>
            </div>
        </div>
    );
}

export default Banner;
