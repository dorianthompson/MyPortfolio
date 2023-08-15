import CrwnClothing from '../../assets/Projects/CrwnClothing.png';
import NASAMissionControl from '../../assets/Projects/NASAMissionControl.png';
import Natours from '../../assets/Projects/Natours.png';
import PorfolioWebsite from '../../assets/Projects/PortfolioWebsite.png';
import Jobs from '../../assets/Projects/JobsAPI.jpeg'

export const projectsData = [
    {
        id: 1,
        image: Jobs,
        title: 'Jobs API',
        category: 'backend',
        link: "https://jobs-pr26.onrender.com/api-docs/"
    },
    {
        id: 2,
        image: PorfolioWebsite,
        title: 'Portfolio Website',
        category: 'frontend',
        link: "#"
    },
    {
        id: 3,
        image: CrwnClothing,
        title: 'CrwnClothing',
        category: 'fullstack',
        link: "https://chipper-llama-057977.netlify.app/"
    },
    {
        id: 4,
        image: NASAMissionControl,
        title: 'NASAMissionControl',
        category: 'backend',
        link: ""
    },
    {
        id: 5,
        image: Natours,
        title: 'Natours Landing Page',
        category: 'frontend',
        link: "https://natours-sigma-ten.vercel.app/"
    },
    
];

export const projectsNavigation = [
    {
        name: 'all'
    },
    {
        name: 'frontend'
    },
    {
        name: 'backend'
    },
    {
        name: 'fullstack'
    }
];