import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'CareerConnect - Job Portal',
        description: "I developed a dynamic job platform that connects job seekers with potential employers, allowing job seekers to search and apply for positions, while enabling employers to post job openings. The platform distinguishes between two user roles—Employer and Job Seeker—providing customized functionalities for each. To enhance user engagement, I implemented automated email notifications using node-cron and nodemailer, which notify job seekers when relevant job postings go live. Additionally, I designed a matching system that aligns job postings with job seekers' interests, ensuring timely and targeted job alerts. This system streamlines the job search process, improving both the experience and efficiency for users.",
        tools: ['Express', 'MongoDB', 'Node', 'React', 'Node Mailer', 'Node-Cron', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: '',
        demo: 'demo',
        image: crefin,
    },
    {
        id: 2,
        name: 'AIQuizzer - Intelligent Quiz Application',
        description: "AIQuizzer is an intelligent quiz application developed with Groq AI, MERN stack, React-Redux, ShadCN, and Tailwind CSS, designed to provide students with a personalized learning experience. It generates quiz questions dynamically based on user-defined parameters, offering subject-specific quizzes and eliminating the time-consuming search for practice materials. The platform's real-time feedback feature validates user responses instantly, enhancing engagement and reinforcing learning. With a responsive, visually appealing interface, AIQuizzer streamlines the study process and supports efficient, interactive learning across multiple subjects.",
        tools: ['Express', 'MongoDB', 'Node', 'React','Groq AI','Shad CN', 'Node Mailer', 'Node-Cron', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Chatify ChatApp',
        description: 'Chatify ChatApp is a real-time chat application. It supports one-on-one and group messaging, enabling seamless communication through real-time updates. The app also includes file-sharing capabilities, allowing users to exchange files within chat sessions to improve collaboration. With Zustand for efficient state management, Chatify ensures a smooth user experience across various chat functionalities. ShadCN and Tailwind CSS contribute to a dynamic, responsive UI, providing a visually appealing and intuitive interface for users.',
        tools: ['Express', 'MongoDB', 'Node', 'React','Zustand','Shad CN', 'Socket.io', 'Tailwind CSS'],
        code: '',
        role: 'Personal Project',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },