import {
  FaPython, FaReact, FaPhp, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaGithub, FaLinkedin, FaVuejs,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiTypescript, SiLaravel, SiDjango, SiPostgresql, SiSupabase,
  SiKalilinux, SiFigma, SiTrello, SiDigitalocean,
} from 'react-icons/si'

export const personalInfo = {
  name: 'Godwin D. Luna-an',
  initials: 'GL',
  location: 'Philippines',
  phone: '09617249313',
  email: 'godwin.lunaan.10@gmail.com',
  title: 'IT Graduate | Full-Stack Developer',
  subtitle: 'Ethical Hacker',
  tagline: 'Building secure, impactful solutions through disciplined code.',
}

export const summary = `Dynamic and disciplined IT graduate with a strong foundation in Python, React.js, Tailwind CSS, TypeScript, PHP, Laravel and a robust security-first mindset. Cisco Ethical Hacking certified, with practical experience using Kali Linux for vulnerability assessment. A detail-oriented and productive collaborator who thrives in team environments, committed to delivering high-quality, secure code through disciplined development practices and proactive problem-solving.`

export const quickStats = [
  { label: 'Internship Hours', value: '486+' },
  { label: 'Barangays Served', value: '22' },
  { label: 'Projects Delivered', value: '2' },
  { label: 'Certifications', value: '4' },
]

export const skills = [
  { name: 'Python (Django)', level: 85, icon: FaPython },
  { name: 'React.js', level: 80, icon: FaReact },
  { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
  { name: 'TypeScript', level: 70, icon: SiTypescript },
  { name: 'PHP', level: 80, icon: FaPhp },
  { name: 'Laravel', level: 80, icon: SiLaravel },
  { name: 'Node.js', level: 70, icon: FaNodeJs },
  { name: 'PostgreSQL', level: 75, icon: SiPostgresql },
  { name: 'Django', level: 80, icon: SiDjango },
  { name: 'Docker', level: 65, icon: FaDocker },
  { name: 'Git / GitHub', level: 85, icon: FaGitAlt },
  { name: 'Kali Linux', level: 70, icon: SiKalilinux },
]

export const experience = {
  company: 'Local Government Unit (LGU) – Manolo Fortich',
  role: 'IT Intern',
  period: 'March 2026 – May 2026',
  duration: '486 Hours',
  department: 'Local Youth Development Office (LYDO)',
  highlights: [
    'Developed and deployed a Youth Profiling System for 22 barangays using PHP and Laravel',
    'Conducted system analysis and vulnerability assessments to secure regional demographic data',
    'Completed a 486-hour intensive internship demonstrating advanced full-stack development skills',
  ],
}

export const education = [
  {
    school: 'University of Science and Technology of Southern Philippines',
    degree: 'Bachelor of Science in Information Technology',
    year: '2022 – 2026',
    honors: "Dean's List (1st Sem, 1st Yr; 2nd Sem, 2nd Yr)",
  },
  {
    school: 'Bugo National High School',
    degree: 'Senior High School Graduate',
    year: '2020 – 2022',
    honors: null,
  },
]

export const projects = [
  {
    title: 'Integrated Retail Management System (RG28)',
    role: 'Lead Developer',
    description:
      'A comprehensive retail platform built with Frappe and ERPNext, featuring a Vue.js frontend. Deployed on DigitalOcean with real-time inventory tracking and automated reporting.',
    tech: ['Frappe', 'ERPNext', 'Vue.js', 'DigitalOcean', 'PostgreSQL'],
    impact: 'Production-ready retail management system',
  },
  {
    title: 'Youth Profiling System',
    role: 'Full-Stack Developer',
    description:
      'A production-ready profiling system serving 22 barangays for the Local Youth Development Office. Streamlined youth data collection and demographic analysis across the region.',
    tech: ['PHP', 'Laravel', 'PostgreSQL', 'Hostinger'],
    impact: 'Serving 22 barangays under LYDO',
  },
]

export const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building production-ready web applications with React, Laravel, and Django. From concept to deployment with clean, maintainable code.',
    icon: 'code',
  },
  {
    title: 'Security Assessment',
    description: 'Cisco-certified ethical hacking with Kali Linux. Vulnerability assessment and security-first development practices to protect your data.',
    icon: 'shield',
  },
  {
    title: 'System Analysis & Design',
    description: 'End-to-end system analysis, database design, and architecture planning. Agile/Scrum methodology with security-by-design principles.',
    icon: 'gear',
  },
]

export const stats = [
  { value: '486+', label: 'Intern Hours' },
  { value: '22', label: 'Barangays' },
  { value: '2', label: 'Projects' },
  { value: '4', label: 'Certs' },
]

export const certifications = [
  '486-Hour IT Internship Certificate | LGU Manolo Fortich (2026)',
  'Cisco Networking Academy Certification 1 & 2',
  'Ethical Hacker (Cisco Verified)',
  'Cybersecurity Essentials',
]

export const socials = [
  { name: 'GitHub', icon: FaGithub, url: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
