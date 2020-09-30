import React from 'react';

const Items = [
    { id: 1, CourseName: 'Full Stack Web Development Course', instructor: "Bruce Bayne", CoursePrice: 6000, CourseImg: 'https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5198daeb8d45.small.jpg' },
    { id: 4, CourseName: 'Full Stack Web Development Course', instructor: "Bruce Bayne", CoursePrice: 4500, CourseImg: 'https://cdn-media-1.freecodecamp.org/images/1*LMEECiXhk715h-VCFyb-GA.jpeg' },
    { id: 2, CourseName: 'Full Stack Web Development Course', instructor: "Bruce Bayne", CoursePrice: 6500, CourseImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSH5dIptMYZ5l6mQGO9VTP2fjSDiyEiE_v4A&usqp=CAU' },
    { id: 3, CourseName: 'Full Stack Web Development Course', instructor: "Bruce Bayne", CoursePrice: 7000, CourseImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1cm6_uhdcPns_nRv8kq3JVlQimp9kMYkknQ&usqp=CAU' },
    { id: 5, CourseName: 'Full Stack Web Development Course', instructor: "Bruce Bayne", CoursePrice: 6000, CourseImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSH5dIptMYZ5l6mQGO9VTP2fjSDiyEiE_v4A&usqp=CAU' },
    { id: 6, CourseName: 'Full Stack Web Development Course', instructor: "Bruce Bayne", CoursePrice: 3000, CourseImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSH5dIptMYZ5l6mQGO9VTP2fjSDiyEiE_v4A&usqp=CAU' }
]

const Courselist = (props) => {
    return (
        <div>
            <img src='https://www.onlineseminar.nl/Portals/0/EasyDNNnews/15/img-online-test-final-afbeelding.jpg' id="courselistImg" alt='...' />
            <h3 className="ml-3 mt-5 float-left" id="courseh3">Choose from large variety of courses</h3>
            <div className="d-flex w-100" id='courses' >
                {
                    Items.map(item => (
                        <div className='m-3' id="course" key={item.id} >
                            <img src={item.CourseImg} id="courseImg" alt="..." />
                            <h6>{item.CourseName}</h6>
                            <p style={{ color: "grey" }}>{item.instructor}</p>
                            <h6 style={{ color: "grey" }}>Rs.{item.CoursePrice}</h6>
                        </div>
                    ))
                }
            </div>
            <div id="aboutus">
                <h2>About Us</h2>
            </div>
            <hr />
            <div id="footer" className="d-flex">
                <div id="footercontent">
                    <h6>Top Courses</h6>
                    <a href="/">Python</a>
                    <a href="/">React.js</a>
                    <a href="/">Java</a>
                </div>
                <div id="footercontent" >
                    <h6>More</h6>
                    <a href="/">Terms</a>
                    <a href="/">Privacy</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Help</a>
                    
                </div>
            </div>
            <h6>&copy; 2020 Excel Inc. All rights reserved.</h6>
        </div>
    );
}

export default Courselist;