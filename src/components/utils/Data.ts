import {
    Image,
    LucideIcon,
    GraduationCap,
    Share2,
    Terminal,
    CloudyIcon,
    GitPullRequestClosedIcon,
    CalendarDays,
    LineChart,
    FilmIcon,
    Quote,
    XCircle,
    Calculator,
    Sigma,
    Puzzle,
    Frame,
} from "lucide-react";

export interface ISectionCardData {
    id: number;
    title: string;
    src: string;
    //exp: string;
    // snippetCount: number;
    progress: number;
    href?: string;
}

export interface IProjectSectionCardData {
    id: number;
    Icon: LucideIcon;
    title: string;
    bgColor: string;
    techStack: string;
    href?: string;
    url?: string;
    description?: string;
    isCompleted: boolean;
    isLive: boolean;
    isRepo?: boolean;
}

export const projectCard: IProjectSectionCardData[] = [
    {
        id: 1,
        title: "College Job Portal",
        techStack:
            "Next.Js 13, Bootstrap5, React.Js, Node..Js, Express, MongoDB, Mongoose, Nodemailer, Redux, Next-Auth.",
        Icon: GraduationCap,
        bgColor: "#264653",
        href: "https://github.com/Abhinav0115/JobPortal",
        url: "https://opju-job-portal.netlify.app/",
        description:
            "A job portal for students of OPJU. Students can apply for jobs, internships, and can also post jobs.",
        isCompleted: true,
        isRepo: true,
        isLive: true,
    },
    {
        id: 2,
        title: "Prompts.ai",
        techStack:
            "Next.Js 13, JavaScript, Tailwind CSS, React.Js, MongoDB, Mongoose, DaisyUI.",
        Icon: Terminal,
        bgColor: "#2a9d8f",
        href: "https://github.com/Abhinav0115/project_prompt",
        url: "https://promptsai-ab.vercel.app/",
        description:
            "Prompts.ai is an open-source AI prompting tool for modern world to discover, creare and share creative prompts.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 3,
        title: "File Sharing",
        techStack:
            "React.Js, Node..Js, Express, MongoDB, Git, Vercel, Mongoose, Tailwind CSS.",
        Icon: Share2,
        bgColor: "#e9c46a",
        href: "https://github.com/Abhinav0115/file-sharing",
        url:
            "https://file-sharing-app-su3e.onrender.com/" ||
            "https://file-sharing-henna.vercel.app/",
        description:
            "A Simple File Sharing Application with 7 days validity and 60Mb data sharing limits.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 4,
        title: "Weather App",
        techStack:
            "React.Js, BootStrap5, Axios, API, geoCitiesAPI, OpenWeatherMap API.",
        Icon: CloudyIcon,
        bgColor: "#ff2c55",
        href: "https://github.com/Abhinav0115/get-weather",
        url: "https://getweatherinfo.vercel.app/",
        description:
            "This app give weather information of searched location whose population more than 4 lakh (400k).",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 5,
        title: "Git Repo",
        techStack:
            "React.Js, BootStrap5, React-Context, Axios, API, Firebase, GitHub API.",
        Icon: GitPullRequestClosedIcon,
        bgColor: "#e76f51",
        href: "https://github.com/Abhinav0115/GitRepo",
        url: "https://abhinav0115.github.io/GitRepo/",
        description:
            "App that searches the Github public repository for a given username, built with React and Firebase. ",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 6,
        title: "Daily To Do",
        techStack:
            "React.Js, JavaScript, Bootstrap, TypeScript, API, LocalStorage, Git",
        Icon: CalendarDays,
        bgColor: "#933e05",
        href: "https://github.com/Abhinav0115/Daily-Habit",
        url: "https://daily-habit-0115.netlify.app/",
        description:
            "Daily To Do is web-based and browser-specific, and it uses cookies to store Habits in the browser. we can retrieve the same habits we inputted after refreshing or reloading the page.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 7,
        title: "Sorting Visualizer",
        techStack: "HTML, CSS, JavaScript, Bootstrap, Git",
        Icon: LineChart,
        bgColor: "#776B5D",
        href: "https://github.com/Abhinav0115/Sorting_Visualizer",
        url: "https://abhinav0115.github.io/Sorting_Visualizer/",
        description:
            "This program contains a Brief description and a graphical visualizer of different sorting algorithms.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 8,
        title: "Piximage",
        techStack: "React.Js, Axios, Bootstrap, JavaScript, Pexels API, Git",
        Icon: Image,
        bgColor: "#A3B763",
        href: "https://github.com/Abhinav0115/Piximage",
        url: "https://abhinav0115.github.io/Piximage/",
        description:
            "Daily Habits is web-based and browser-specific, and it uses cookies to store Habits in the browser. we can retrieve the same habits we inputted after refreshing or reloading the page.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 9,
        title: "Movie Search App",
        techStack: "React.Js, Axios, Bootstrap, JavaScript, TVMaze API, Git",
        Icon: FilmIcon,
        bgColor: "#C3ACD0",
        href: "https://github.com/Abhinav0115/Movie-App",
        url: "https://movie-search-app-s2k.netlify.app/",
        description: "Movie Search App", //TODO:
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 10,
        title: "TicTacToe Game",
        techStack:
            "React.Js, Bootstrap, JavaScript, HTML, CSS, Tostify, GitHub",
        Icon: XCircle,
        bgColor: "#CE5A67",
        href: "https://github.com/Abhinav0115/TicTacToe_Game",
        url: "https://abhinav0115.github.io/TicTacToe_Game/",
        description:
            "This is an online Tic Tac Toe game where 2 players take their chance as a 'cross' or 'circle' to win.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 11,
        title: "Random Quote Generator",
        techStack:
            "React.Js, Axios, Bootstrap, JavaScript, quotable.io API, Git",
        Icon: Quote,
        bgColor: "#706233",
        href: "https://github.com/Abhinav0115/Random_Quote",
        url: "https://abhinav0115.github.io/Random_Quote/",
        description:
            "Random famous Quote generator build using API (api.quotable.io).",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 12,
        title: "Basic Calculator",
        techStack: "HTML, CSS, JavaScript",
        Icon: Calculator,
        bgColor: "#748E63",
        href: "https://github.com/Abhinav0115/Basic-Calculator",
        url: "https://abhinav0115.github.io/Basic-Calculator/",
        description:
            "This is an online simple basic calculator built using JavaScript. You can click the buttons or type to perform calculations as you would on a physical calculator.",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 13,
        title: "Scientific Calculator",
        techStack: "HTML, CSS, JavaScript",
        Icon: Sigma,
        bgColor: "#495E57",
        href: "https://github.com/Abhinav0115/Scientific-Calculator",
        url: "https://abhinav0115.github.io/Scientific-Calculator/",
        description: "Scientific Calculator",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 14,
        title: "BMI Calculator",
        techStack: "HTML, CSS, JavaScript",
        Icon: Puzzle,
        bgColor: "#D6D46D",
        href: "https://github.com/Abhinav0115/BMI-Calculator",
        url: "https://abhinav0115.github.io/BMI-Calculator/",
        description: "BMI Calculator",
        isCompleted: true,
        isLive: true,
        isRepo: true,
    },
    {
        id: 15,
        title: "SignIn Form",
        techStack: "HTML, CSS, JavaScript",
        Icon: Frame,
        bgColor: "#687EFF",
        href: "",
        url: "https://abhinav-signup-signin-page.netlify.app/",
        description: "SignIn Form",
        isCompleted: true,
        isLive: true,
        isRepo: false,
    },
];

export const frontendCard: ISectionCardData[] = [
    {
        id: 1,
        title: "React.JS",
        src: "/tech/frontend/ReactJS.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "Next.JS 13",
        src: "/tech/frontend/nextjs13.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: "Redux",
        src: "/tech/frontend/redux.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 70,
    },

    {
        id: 4,
        title: "JavaScript",
        src: "/tech/frontend/js.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 85,
    },
    {
        id: 5,
        title: "TypeScript",
        src: "/tech/frontend/typescript.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 30,
    },
    {
        id: 6,
        title: "Tailwind CSS",
        src: "/tech/frontend/tailwind.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 7,
        title: "BootStrap",
        src: "/tech/frontend/bootstrap.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    // {
    //     id: 8,
    //     title: "HTML",
    //     src: "/tech/frontend/html.jpeg",
    //     //exp: "1 day ago",
    //     // snippetCount: 1128,
    //     progress: 90,
    //     href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    // },
    // {
    //     id: 9,
    //     title: "CSS",
    //     src: "/tech/frontend/css.jpeg",
    //     //exp: "1 day ago",
    //     // snippetCount: 1128,
    //     progress: 90,
    // },
];

export const backendCard: ISectionCardData[] = [
    {
        id: 1,
        title: "Node.Js",
        src: "/tech/backend/nodejs.webp",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "Express.Js",
        src: "/tech/backend/express.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: "Next Auth",
        src: "/tech/backend/nextauth.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 30,
    },
    // {
    //     id: 4,
    //     title: 'DenoJs',
    //     src: '/tech/backend/denojs.webp',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 60,
    // },
    // {
    //     id: 5,
    //     title: 'PHP',
    //     src: '/tech/backend/php.png',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 70,
    // },
];

export const databaseCard: ISectionCardData[] = [
    {
        id: 1,
        title: "MongoDB",
        src: "/tech/database/mongo.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "Mongoose",
        src: "/tech/database/mongoose3.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    // {
    //     id: 2,
    //     title: 'MySQL',
    //     src: '/tech/database/mysql.jpeg',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 80,
    // },
    // {
    //     id: 3,
    //     title: 'Redis',
    //     src: '/tech/database/redis.jpeg',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 70,
    // },
    // {
    //     id: 4,
    //     title: 'PostgreSQL',
    //     src: '/tech/database/postgres.png',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 70,
    // },
    // {
    //     id: 5,
    //     title: 'Elastic Search',
    //     src: '/tech/database/elasticSearch.png',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 70,
    // },
];

export const devopsCards: ISectionCardData[] = [
    {
        id: 1,
        title: "Docker",
        src: "/tech/devops/docker.webp",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "Kubernetes",
        src: "/tech/devops/k8s.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: "GIT",
        src: "/tech/devops/git.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 4,
        title: "Jenkins",
        src: "/tech/devops/jenkins.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 70,
    },
    {
        id: 5,
        title: "Terraform",
        src: "/tech/devops/terraform.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 60,
    },
];

export const web3Cards: ISectionCardData[] = [
    {
        id: 1,
        title: "Solidity",
        src: "/tech/web3/solidity.jfif",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: "Hardhat",
        src: "/tech/web3/hardhat.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: "Metamask",
        src: "/tech/web3/metamask.webp",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 4,
        title: "Chainlink",
        src: "/tech/web3/chainlink.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 5,
        title: "OpenZeppelin",
        src: "/tech/web3/openzeppelin.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 70,
    },
];

export const otherCards: ISectionCardData[] = [
    {
        id: 1,
        title: "Rest API",
        src: "/tech/others/rest.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "GIT",
        src: "/tech/others/git.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 60,
    },
    {
        id: 3,
        title: "GitHub",
        src: "/tech/others/github2.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    // {
    //     id: 4,
    //     title: 'GraphQl',
    //     src: '/tech/others/graphql.png',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 70,
    // },
];
export const languages: ISectionCardData[] = [
    {
        id: 3,
        title: "Python",
        src: "/tech/programming/python2.jpg",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 60,
    },
    {
        id: 2,
        title: "C++ Programming",
        src: "/tech/programming/CPP.png",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 70,
    },
    {
        id: 1,
        title: "C Programming",
        src: "/tech/programming/cprogram.png",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 70,
    },
];
