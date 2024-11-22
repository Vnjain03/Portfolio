import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'BidSync - Where Bids Meet Transparency',
        description: "BidSync is a modern auction platform designed to simplify the buying and selling of new and used items. Built with a user-friendly interface, BidSync enables auctioneers to easily create auctions, while bidders can participate with a seamless bidding process. The platform enhances transparency by automatically notifying winning bidders via email, ensuring clarity for all parties involved. Automation tools like Node-Cron handle commission payments, minimizing manual effort, while Nodemailer and EmailJS power automated email updates, keeping users engaged and informed. BidSync combines efficiency, transparency, and convenience to provide a reliable auction experience for both sellers and buyers.",
        tools: ['Express', 'MongoDB', 'Node', 'React', 'Node Mailer', 'Node-Cron','EmailJS', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: '',
        demo: 'demo',
        image: crefin,
    },
    {
        id: 2,
        name: 'CareerConnect - Job Portal',
        description: "I developed a dynamic job platform that connects job seekers with potential employers, allowing job seekers to search and apply for positions, while enabling employers to post job openings. The platform distinguishes between two user roles—Employer and Job Seeker—providing customized functionalities for each. To enhance user engagement, I implemented automated email notifications using node-cron and nodemailer, which notify job seekers when relevant job postings go live. Additionally, I designed a matching system that aligns job postings with job seekers' interests, ensuring timely and targeted job alerts. This system streamlines the job search process, improving both the experience and efficiency for users.",
        tools: ['Express', 'MongoDB', 'Node', 'React', 'Node Mailer', 'Node-Cron', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: '',
        demo: 'demo',
        image: crefin,
    },
    {
        id: 3,
        name: 'AIQuizzer - Intelligent Quiz Application',
        description: "AIQuizzer is an intelligent quiz application developed with Groq AI, MERN stack, React-Redux, ShadCN, and Tailwind CSS, designed to provide students with a personalized learning experience. It generates quiz questions dynamically based on user-defined parameters, offering subject-specific quizzes and eliminating the time-consuming search for practice materials. The platform's real-time feedback feature validates user responses instantly, enhancing engagement and reinforcing learning. With a responsive, visually appealing interface, AIQuizzer streamlines the study process and supports efficient, interactive learning across multiple subjects.",
        tools: ['Express', 'MongoDB', 'Node', 'React','Groq AI','Shad CN', 'Node Mailer', 'Node-Cron', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Chatify ChatApp',
        description: 'Chatify ChatApp is a real-time chat application. It supports one-on-one and group messaging, enabling seamless communication through real-time updates. The app also includes file-sharing capabilities, allowing users to exchange files within chat sessions to improve collaboration. With Zustand for efficient state management, Chatify ensures a smooth user experience across various chat functionalities. ShadCN and Tailwind CSS contribute to a dynamic, responsive UI, providing a visually appealing and intuitive interface for users.',
        tools: ['Express', 'MongoDB', 'Node', 'React','Zustand','Shad CN', 'Socket.io', 'Tailwind CSS'],
        code: '',
        role: 'Personal Project',
        demo: '',
        image: realEstate,
    },
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