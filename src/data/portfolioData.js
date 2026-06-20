import {
  FaPython, FaReact, FaPhp, FaNodeJs, FaDocker, FaGitAlt, FaAws,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiTypescript, SiLaravel, SiDjango, SiPostgresql, SiSupabase,
  SiKalilinux, SiFigma, SiTrello,
} from 'react-icons/si'

export const personalInfo = {
  name: 'Godwin D. Luna-an',
  location: 'Philippines',
  phone: '09617249313',
  email: 'godwin.lunaan.10@gmail.com',
  title: 'IT Graduate | Full-Stack Developer | Ethical Hacker',
  tagline: 'Building secure, impactful solutions through disciplined code.',
}

export const summary = `Dynamic and disciplined IT graduate with a strong foundation in Python, React.js, Tailwind CSS, TypeScript, PHP, Laravel and a robust security-first mindset. Cisco Ethical Hacking certified, with practical experience using Kali Linux for vulnerability assessment. A detail-oriented and productive collaborator who thrives in team environments, committed to delivering high-quality, secure code through disciplined development practices and proactive problem-solving.`

export const skills = {
  techStack: [
    { name: 'Python (Django)', icon: FaPython },
    { name: 'React.js', icon: FaReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'PHP', icon: FaPhp },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Django', icon: SiDjango },
  ],
  security: [
    { name: 'Kali Linux', icon: SiKalilinux },
    { name: 'Vulnerability Assessment', icon: null },
    { name: 'Ethical Hacking (Cisco)', icon: null },
  ],
  tools: [
    { name: 'Git / GitHub', icon: FaGitAlt },
    { name: 'Docker', icon: FaDocker },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Railway', icon: null },
    { name: 'Hostinger', icon: null },
    { name: 'AWS', icon: FaAws },
    { name: 'VS Code', icon: null },
    { name: 'Figma', icon: SiFigma },
    { name: 'Trello', icon: SiTrello },
  ],
  methodologies: ['Agile / Scrum', 'Security-by-Design', 'Test-Driven Development (TDD)'],
}

export const experience = {
  company: 'Local Government Unit (LGU) – Manolo Fortich',
  role: 'IT Intern',
  period: 'March 2026 – May 2026 (486 Hours)',
  department: 'Local Youth Development Office (LYDO)',
  highlights: [
    'Completed a 486-hour intensive internship with the Local Youth Development Office (LYDO).',
    'Developed and deployed a Youth Profiling System for 22 barangays using PHP and Laravel.',
    'Conducted system analysis and vulnerability assessments to ensure the security of regional demographic data.',
  ],
}

export const education = [
  {
    school: 'University of Science and Technology of Southern Philippines',
    degree: 'Bachelor of Science in Information Technology',
    honors: "Dean's List (1st Semester, 1st Year; 2nd Semester, 2nd Year)",
  },
  {
    school: 'Bugo National High School',
    degree: 'Senior High School Graduate',
    honors: null,
  },
]

export const projects = [
  {
    title: 'Integrated Retail Management System (RG28)',
    role: 'Lead Developer',
    description:
      'Developed a retail platform using Frappe and ERPNext, with a Vue.js frontend. Managed cloud deployment on DigitalOcean and implemented real-time inventory tracking.',
    tech: ['Frappe', 'ERPNext', 'Vue.js', 'DigitalOcean'],
  },
  {
    title: 'Youth Profiling System',
    role: 'Full-Stack Developer',
    description:
      'Production-ready system serving 22 barangays to improve data collection for the Local Youth Development Office (LYDO). Built with PHP and Laravel.',
    tech: ['PHP', 'Laravel', 'PostgreSQL'],
    highlights: true,
  },
]

export const achievements = [
  {
    title: 'Regional Technical Impact',
    description:
      'Developed and deployed a production-ready Youth Profiling System serving 22 barangays to improve data collection for the Local Youth Development Office (LYDO).',
  },
  {
    title: 'Professional Milestone',
    description:
      'Completed a 486-hour intensive IT internship at LGU Manolo Fortich, demonstrating advanced system analysis and full-stack development skills.',
  },
]

export const certifications = [
  'Certificate of Completion: 486-Hour IT Internship | LGU Manolo Fortich (May 2026)',
  'Cisco Networking Academy Certification 1 & 2',
  'Ethical Hacker (Cisco Verified)',
  'Cybersecurity Essentials',
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
