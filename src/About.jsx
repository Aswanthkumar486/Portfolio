import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import './About.css';

export default function About() {
    const [activeTab, setActiveTab] = useState(true); // Fixed camelCase issue

    return (
        <div className='about text-sm-center bg-color-light containers text-lg-start'>
            <NavigationBar />
            <h2 className='text-light'>About</h2>
            <p className='text-secondary section section-text'>
                Aspiring Front-End Developer with knowledge of HTML, CSS, JavaScript, React.js, and basic Java.<br />
                Eager to contribute to user-friendly web applications while gaining hands-on experience in modern front-end technologies. <br />
                Seeking an entry-level role in a collaborative team environment to develop and refine my skills.
            </p>

            <span className='text-center d-flex justify-content-center'>
                <h5 
                    onClick={() => setActiveTab(true)} 
                    className={`text-light me-2 subtitle ${activeTab ? 'fw-bold' : ''}`}
                >
                    Skills
                </h5>
                <h5 
                    onClick={() => setActiveTab(false)} 
                    className={`text-light ms-2 subtitle ${!activeTab ? 'fw-bold' : ''}`}
                >
                    Education
                </h5>
            </span>

            {activeTab ? (
                <div className="d-flex justify-content-center">
    <ul className="list-group w-50 w-md-75 w-sm-50">
        <li className="list-group-item list-group-item-success custom-li skill-li">HTML</li>
        <li className="list-group-item list-group-item-success custom-li skill-li">CSS</li>
        <li className="list-group-item list-group-item-success custom-li skill-li">JavaScript</li>
        <li className="list-group-item list-group-item-success custom-li skill-li">React.js</li>
        <li className="list-group-item list-group-item-success custom-li skill-li">Core Java</li>
        <li className="list-group-item list-group-item-success custom-li skill-li">SQL</li>
    </ul>
</div>

            ) : (
                <div className="d-flex justify-content-center">
    <ul className="list-group w-50 w-md-50 w-sm-50">
        <li className="list-group-item list-group-item-danger custom-li">
            <span className="fw-bold p-sm-3">10th - 12th:</span> National Academy
        </li>
        <li className="list-group-item list-group-item-danger custom-li education-li">
            <span className="fw-bold p-sm-3">B.Sc IT: Syed Ammal Arts and Science</span> 
        </li>
    </ul>
</div>


            )}
        </div>
    );
}
