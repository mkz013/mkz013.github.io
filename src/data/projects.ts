export interface Project {
    id: number
    title: string
    description: string
    techStack: string[]
    githubLink: string
    liveLink: string
    category:
        | 'AI & Voice'
        | 'Security Engineering'
        | 'Web Development'
        | 'Penetration Testing'
        | 'Mobile Security'
    year: string
    featured: boolean
    isStudentProject: boolean
    details: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Lucy AI Voice Assistant',
        description:
            'An experimental voice assistant project exploring speech-to-text, text-to-speech, wake-word ideas, and local AI interaction workflows.',
        techStack: ['Python', 'Whisper', 'Vosk', 'pyttsx3', 'PyAudio', 'JSON', 'NLP'],
        githubLink: 'https://github.com/yourusername/lucy-voice-assistant',
        liveLink: '#',
        category: 'AI & Voice',
        year: '2025',
        featured: true,
        isStudentProject: false,
        details:
            'This project was mainly a hands-on exploration of STT, TTS, neural models, and local voice workflows rather than a polished assistant product. It helped me experiment with tools such as Whisper, Vosk, and related speech pipelines while understanding their practical trade-offs.',
    },
    {
        id: 2,
        title: 'API Honeypot with ELK Stack',
        description:
            'Dockerized honeypot API with ELK Stack integration, real-time logging, dashboards, and reverse proxying for malicious request analysis.',
        techStack: ['Docker', 'ELK Stack', 'Grafana', 'Python', 'Nginx', 'REST API', 'PHP'],
        githubLink: 'https://github.com/yourusername/api-honeypot',
        liveLink: '#',
        category: 'Security Engineering',
        year: '2025',
        featured: false,
        isStudentProject: true,
        details:
            'Includes logging pipelines, test scripts, reverse-proxy configuration, and honeypot endpoint design.',
    },
    {
        id: 3,
        title: 'iPlisse - Next.js Web Application',
        description:
            'Full-stack web application built with Next.js, TypeScript, and Tailwind CSS, with middleware and modern application structure.',
        techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'ESLint', 'Middleware', 'Node.js'],
        githubLink: 'https://github.com/yourusername/iplisse',
        liveLink: '#',
        category: 'Web Development',
        year: '2025',
        featured: false,
        isStudentProject: true,
        details:
            'A student project focused on modern full-stack development patterns and cleaner application structure.',
    },
    {
        id: 4,
        title: 'Real-World Penetration Testing',
        description:
            'Security assessments with CVSS-based reporting for real environments, including network analysis, vulnerability validation, and remediation guidance.',
        techStack: ['Nmap', 'Wireshark', 'Burp Suite', 'CVSS', 'Reporting', 'Network Scanning'],
        githubLink: 'https://github.com/yourusername/pentest-reports',
        liveLink: '#',
        category: 'Penetration Testing',
        year: '2024',
        featured: true,
        isStudentProject: true,
        details:
            'Included practical auditing work, technical reporting, and mitigation-oriented communication with stakeholders.',
    },
    {
        id: 5,
        title: 'Mobile Security Analysis Suite',
        description:
            'Static and dynamic Android analysis work using reverse engineering and mobile security tooling for application review.',
        techStack: ['Ghidra', 'IDA Pro', 'JADX', 'APKTool', 'MobSF', 'Android', 'Java', 'Kotlin'],
        githubLink: 'https://github.com/yourusername/mobile-security',
        liveLink: '#',
        category: 'Mobile Security',
        year: '2024',
        featured: false,
        isStudentProject: true,
        details:
            'Focused on reverse engineering, permission review, code inspection, and vulnerability identification.',
    },
    {
        id: 6,
        title: 'Honeypot & CTF Platform',
        description:
            'A web platform combining honeypot behavior, challenge design, and monitoring dashboards in a controlled learning environment.',
        techStack: ['Docker', 'Grafana', 'Linux', 'Python', 'CTF', 'PHP', 'Nginx'],
        githubLink: 'https://github.com/yourusername/honeypot-ctf',
        liveLink: '#',
        category: 'Security Engineering',
        year: '2024',
        featured: false,
        isStudentProject: true,
        details:
            'Combined attack logging, challenge deployment, and service monitoring into one defensive training platform.',
    },
    {
        id: 7,
        title: 'Labyrinth Browser Game',
        description:
            'A browser-based board game built from scratch, with custom game logic, tile handling, and hand-crafted visuals.',
        techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Canvas'],
        githubLink: 'https://github.com/yourusername/labyrinth-game',
        liveLink: '#',
        category: 'Web Development',
        year: '2023',
        featured: false,
        isStudentProject: true,
        details:
            'An early project that helped build strong foundations in JavaScript, rendering, and interaction logic.',
    },
]