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
        title: 'PokeSec: Android Trojanization & Security Engineering',
        description:
            'A mobile security project focused on reverse engineering and trojanizing an Android application through Smali hook injection, payload integration, SSL pinning, root detection, and APK re-signing.',
        techStack: ['Android', 'Kotlin', 'Java', 'Smali', 'APKTool', 'Frida', 'Metasploit', 'Room DB', 'EncryptedFile'],
        githubLink: 'https://github.com/mkz013/PokeSecurity',
        liveLink: '#',
        category: 'Mobile Security',
        year: '2026',
        featured: true,
        isStudentProject: true,
        details:
            'Developed as part of the Mobile Security course. My primary contribution included architecting core application logic (repositories, Room DB interactions, authentication workflows, key pages) and implementing client-side defenses such as SSL pinning, root detection, and EncryptedFile storage. Additionally, I led the offensive analysis by backdooring the APK via APKTool, injecting a Metasploit payload at the Smali level, isolating execution in a dedicated background process (:pwned), and re-signing the trojanized application while preserving full functionality.',
    },
    {
        id: 6,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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