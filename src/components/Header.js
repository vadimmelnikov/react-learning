import React from 'react';
import PropType from 'prop-types';
const Header = props => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="head-line">
            <span>{props.tagline}</span>
        </h3>
    </header>
);
Header.propTypes = {
    tagline: PropType.string.isRequired
};
export default Header;