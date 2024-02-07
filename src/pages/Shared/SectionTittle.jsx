import React from 'react';
import { useSpring, animated } from '@react-spring/web'
const SectionTittle = ({ heading, subHeading }) => {
    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, fontSize: '4px' },
            to: { opacity: 1, fontSize: '40px' },
            delay:700
        }),
        []
    )
    return (
        <div className='text-center my-4'>
            <div className="divider "></div>
            {subHeading && <p className='text-gray-500 mb-2 italic'>{subHeading}</p>}
            <animated.div style={props}>
                <h2 className='text-rose-400 font-bold uppercase text-4xl'>{heading}</h2>
            </animated.div>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTittle;