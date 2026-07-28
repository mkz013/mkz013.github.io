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
        githubLink: 'https://github.com/mkz013/Lucy',
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
        githubLink: 'https://github.com/mkz013/websecurity-honeypot',
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
        githubLink: 'https://github.com/mkz013/iplisse',
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
        title: 'Network System Pentesting — Course Audit Report',
        description:
            'Full technical audit of a custom, segmented network accessed via VPN, covering reconnaissance, vulnerability validation, and CVSS-based remediation guidance.',
        techStack: ['Nmap', 'Wireshark', 'Burp Suite', 'CVSS', 'Reporting', 'Network Scanning'],
        githubLink: 'https://github.com/mkz013/NSPAudit',
        liveLink: '#',
        category: 'Penetration Testing',
        year: '2025',
        featured: true,
        isStudentProject: true,
        details:
            'Recon-to-root engagement against a custom lab network: service enumeration, exploitation of misconfigured services, Linux privilege escalation, and cross-subnet lateral movement, with phased remediation guidance for stakeholders. Sensitive credentials and third-party details redacted from the public report.',
    },
    {
        id: 5,
        title: 'Mobile Security Analysis Suite',
        description:
            'Static and dynamic Android analysis work using reverse engineering and mobile security tooling for application review.',
        techStack: ['Ghidra', 'IDA Pro', 'JADX', 'APKTool', 'MobSF', 'Android', 'Java', 'Kotlin'],
        githubLink: 'https://github.com/mkz013/mobile-security',
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
        githubLink: 'https://github.com/mkz013/honeypot-ctf',
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
        githubLink: 'https://github.com/mkz013/labyrinth-game',
        liveLink: '#',
        category: 'Web Development',
        year: '2023',
        featured: false,
        isStudentProject: true,
        details:
            'An early project that helped build strong foundations in JavaScript, rendering, and interaction logic.',
    },
    {
        id: 8,
        title: 'Magic: The Gathering (MTG) Blazor Suite',
        description:
            'Interactive C# Blazor web application featuring Entity Framework Core, card filtering/search, custom collections, and session-state management.',
        techStack: ['.NET 8', 'Blazor Server', 'C#', 'Entity Framework Core', 'LINQ', 'SQL Server', 'Bootstrap'],
        githubLink: 'https://github.com/mkz013/blazor-mtg-server',
        liveLink: '#',
        category: 'Web Development',
        year: '2024',
        featured: true,
        isStudentProject: true,
        details:
            'Built during an intensive 2-sprint academic module at Howest focusing on modern .NET fundamentals. Features a full relational data pipeline with EF Core/LINQ, interactive Blazor server UI, custom session management, and complex MTG card search/collection management.',
    },
    {
        id: 9,
        title: 'Ransomware & Wiper File Recovery Simulation',
        description:
            'A practical incident recovery project featuring malware attack simulations (AES-CBC, Base64, Wiper corruption), custom password brute-force scripts, and forensic file recovery.',
        techStack: ['Python', 'AES-128', 'SHA-256', 'Linux', 'TestDisk', 'PhotoRec', 'Forensics', 'Cryptography'],
        githubLink: 'https://github.com/mkz013/SSM_Scripts',
        liveLink: '#',
        category: 'Security Engineering',
        year: '2025',
        featured: true,
        isStudentProject: true,
        details:
            'Developed as a Use Case Demonstration Paper (UCDP) project simulating file recovery after malware, ransomware, and wiper attacks on Linux environments. Demonstrates custom AES-CBC encryption/decryption, wordlist-driven brute-force attacks via SHA-256 key derivation, and forensic recovery using TestDisk, PhotoRec, extundelete, and ext4magic.',
    },
]