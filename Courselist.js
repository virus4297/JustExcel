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
            
            <h2 className="ml-4 float-left" id="courseh3">Choose from large variety of courses</h2>
            <div className="d-flex w-100" id='courses'>
                {
                    Items.map(item => (
                        <a href="/course" className='m-4' id="course" key={item.id} >
                            <img src={item.CourseImg} id="courselistImg" alt="..." />
                            <h6>{item.CourseName}</h6>
                            <p>{item.instructor}</p>
                            <p >Rs.{item.CoursePrice}</p>
                        </a>
                    ))
                }
            </div>
            <hr className="w-75 mb-5" color="lightblue"/>
            <div id="aboutus">
                <h2>About Us</h2>
                <div id="about">
                    Quis cillum laborum adipisicing culpa ut aliqua anim laboris velit culpa proident.
                    Proident nostrud do ut sit in labore labore incididunt eiusmod ex cillum est qui. 
                    Laboris cillum anim occaecat cupidatat reprehenderit excepteur ipsum officia dolor tempor. 
                    Consequat mollit nulla tempor velit eu pariatur aliqua ea anim pariatur dolor cillum amet Lorem. 
                    Occaecat ad dolore in tempor occaecat duis adipisicing. Qui in irure alicat.
                </div>
            </div>

            <div id="footer">
            <h6>&copy; 2020 Excel Inc. All rights reserved.</h6>
            </div>
        </div>
    );
}

export default Courselist;