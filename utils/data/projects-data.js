import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Automatic Number Plate Recognition (ANPR) System',
        description: "This project implements a robust Automatic Number Plate Recognition (ANPR) system using Python, leveraging deep learning and OCR technologies for real-time video analysis. The workflow includes detecting vehicles and license plates from video streams with YOLOv8, tracking vehicles across frames via the SORT algorithm, and reading the license plates using EasyOCR. The project also utilizes OpenCV for video processing, NumPy/Pandas/SciPy for data management and interpolation, and outputs CSV reports along with visualizations. Results are accurate, missing data is interpolated, and all detections are visualized frame-by-frame.",
        tools: ['Python', 'YOLOv8', 'EasyOCR', 'OpenCV', 'NumPy', 'Pandas', 'SciPy', 'SORT'],
        role: 'Personal Project',
        code: 'https://github.com/yourusername/your-anpr-repo', // Replace with your actual GitHub link
        demo: '', // Optional: provide if a demo is available
        image: crefin, // Replace with your actual image import or variable reference
    },    
    {
        id: 2,
        name: 'College ERP System',
        description: "This project is a comprehensive College ERP (Enterprise Resource Planning) System designed to manage and automate academic and administrative processes in a college environment. It provides role-based dashboards and workflows for students, teachers, and administrators, enabling efficient management of attendance, marks, timetables, user accounts, and more. Features include role-based authentication, attendance and marks management, dynamic timetables, user and report management, and REST API integration.",
        tools: ['Django', 'Django REST Framework', 'Django Admin', 'SQLite', 'PostgreSQL', 'MySQL', 'Djoser', 'HTML', 'CSS'],
        role: 'Personal Project',
        code: 'https://github.com/yourusername/your-college-erp-repo', // Replace with your actual GitHub link
        demo: '', // Optional: provide if a demo is available
        image: crefin // Replace with your actual image import or variable reference
    },
    
    {
        id: 3,
        name: 'BidSync - Where Bids Meet Transparency',
        description: "BidSync is a modern auction platform designed to simplify the buying and selling of new and used items. Built with a user-friendly interface, BidSync enables auctioneers to easily create auctions, while bidders can participate with a seamless bidding process. The platform enhances transparency by automatically notifying winning bidders via email, ensuring clarity for all parties involved. Automation tools like Node-Cron handle commission payments, minimizing manual effort, while Nodemailer and EmailJS power automated email updates, keeping users engaged and informed. BidSync combines efficiency, transparency, and convenience to provide a reliable auction experience for both sellers and buyers.",
        tools: ['Express', 'MongoDB', 'Node', 'React', 'Node Mailer', 'Node-Cron','EmailJS', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: 'https://github.com/MitanshJoshi/Auction_Platform',
        demo: 'https://auction-platform-frontend.vercel.app/',
        image: crefin,
    },
    {
        id: 4,
        name: 'CareerConnect - Job Portal',
        description: "I developed a dynamic job platform that connects job seekers with potential employers, allowing job seekers to search and apply for positions, while enabling employers to post job openings. The platform distinguishes between two user roles—Employer and Job Seeker—providing customized functionalities for each. To enhance user engagement, I implemented automated email notifications using node-cron and nodemailer, which notify job seekers when relevant job postings go live. Additionally, I designed a matching system that aligns job postings with job seekers' interests, ensuring timely and targeted job alerts. This system streamlines the job search process, improving both the experience and efficiency for users.",
        tools: ['Express', 'MongoDB', 'Node', 'React', 'Node Mailer', 'Node-Cron', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: 'https://github.com/MitanshJoshi/JobSearchingAndPostingPlatform',
        demo: 'https://job-frontend-cki1.onrender.com/',
        image: crefin,
    },
    {
        id: 5,
        name: 'AIQuizzer - Intelligent Quiz Application',
        description: "AIQuizzer is an intelligent quiz application developed with Groq AI, MERN stack, React-Redux, ShadCN, and Tailwind CSS, designed to provide students with a personalized learning experience. It generates quiz questions dynamically based on user-defined parameters, offering subject-specific quizzes and eliminating the time-consuming search for practice materials. The platform's real-time feedback feature validates user responses instantly, enhancing engagement and reinforcing learning. With a responsive, visually appealing interface, AIQuizzer streamlines the study process and supports efficient, interactive learning across multiple subjects.",
        tools: ['Express', 'MongoDB', 'Node', 'React','Groq AI','Shad CN', 'Node Mailer', 'Node-Cron', 'Redux', 'Tailwind CSS'],
        role: 'Personal Project',
        code: 'https://github.com/MitanshJoshi/Aiquizzer',
        demo: '',
        image: travel,
    }
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