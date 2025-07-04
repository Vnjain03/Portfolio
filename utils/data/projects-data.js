import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Careerly.ai - Your AI-Powered Career Copilot',
        description: "Careerly.ai is an intelligent career navigation platform designed to help users discover, plan, and execute their ideal career paths. It offers four powerful AI tools—Career Q&A Chat, Resume Analyzer, Roadmap Generator, and Cover Letter Builder—that dramatically reduce the time and effort needed for career planning. Inngest powers background workflows with contextual memory for personalized suggestions, while Clerk enables secure authentication and billing with support for both free and premium users. The platform integrates ImageKit for optimized media delivery and uses NeonDB (PostgreSQL) for efficient data management. Careerly.ai merges modern AI capabilities with clean UX to deliver a focused and empowering career growth experience.",
        tools: ['Next.js', 'Inngest', 'NeonDB (PostgreSQL)', 'ImageKit', 'Clerk Auth & Billing', 'ShadCN UI'],
        role: 'Personal Project',
        code: 'https://github.com/MitanshJoshi/Careerly.ai',
        demo: 'https://careerly-ai-syyi.vercel.app/',
        image: crefin, // Replace with actual image import or variable
    }, 
    {
        id: 2,
        name: 'GitBuddy CLI - Automate Your Git Workflow',
        description: "GitBuddy CLI is a developer-focused tool designed to simplify and automate complex Git workflows. It helps users create branches, generate AI-powered commit messages, manage stashes, merge changes, and even create pull requests with a single command. The CLI leverages OpenAI (or local LLMs) for intelligent commit summaries and uses the GitHub API for seamless integration with repositories. With support for multi-account management and pre-configured workflows, GitBuddy eliminates repetitive Git commands and makes version control accessible even for beginners.",
        tools: ['Node.js', 'TypeScript', 'Inquirer.js', 'OpenAI API', 'GitHub GraphQL API', 'Chalk'],
        role: 'Personal Project',
        code: 'https://github.com/MitanshJoshi/GitBuddy',
        demo: 'https://www.npmjs.com/package/gitbuddy-cli',
        image: crefin, // Replace with actual image import or variable
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