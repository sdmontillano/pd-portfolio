export const personalInfo = {
  name: 'Godwin D. Luna-an',
  initials: 'GL',
  title: 'IT Graduate / Full-Stack Developer / Ethical Hacker',
  location: 'PH',
  email: 'godwin.lunaan.10@gmail.com',
  phone: '+63 961 724 9313',
  tagline: 'Secure code. Clean architecture. Disciplined delivery.',
}

export const summary = `IT graduate with deep expertise in Python, React, Laravel, and TypeScript. Cisco Ethical Hacking certified with hands-on Kali Linux experience. I build production-ready systems that are secure by design, performant by default, and maintainable by discipline.`

export const skills = [
  { name: 'Python (Django)', level: 88 },
  { name: 'React.js', level: 85 },
  { name: 'Laravel', level: 82 },
  { name: 'PHP', level: 82 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 72 },
  { name: 'PostgreSQL', level: 78 },
  { name: 'Docker', level: 68 },
  { name: 'Git / GitHub', level: 88 },
  { name: 'Kali Linux', level: 75 },
  { name: 'Vulnerability Assessment', level: 72 },
]

export const experience = [
  {
    role: 'IT Intern',
    company: 'LGU Manolo Fortich — LYDO',
    period: 'Mar 2026 — May 2026',
    duration: '486 hours',
    highlights: [
      'Built and deployed a Youth Profiling System serving 22 barangays (PHP + Laravel)',
      'Conducted vulnerability assessments on regional demographic data systems',
      'Delivered production-ready code under an intensive internship program',
    ],
  },
]

export const education = [
  {
    school: 'University of Science and Technology of Southern Philippines',
    degree: 'BS Information Technology',
    year: '2022 — 2026',
    honors: "Dean's List (1st Sem Yr 1, 2nd Sem Yr 2)",
  },
  {
    school: 'Bugo National High School',
    degree: 'Senior High School Graduate',
    year: '2020 — 2022',
  },
]

export const projects = [
  {
    title: 'Integrated Retail Management System (RG28)',
    role: 'Lead Developer',
    description: 'Retail platform with real-time inventory, built on Frappe/ERPNext with Vue.js frontend, deployed on DigitalOcean.',
    tech: ['Frappe', 'ERPNext', 'Vue.js', 'PostgreSQL', 'DigitalOcean'],
  },
  {
    title: 'Youth Profiling System',
    role: 'Full-Stack Developer',
    description: 'Production profiling system for 22 barangays under LYDO. PHP/Laravel backend with PostgreSQL, hosted on Hostinger.',
    tech: ['PHP', 'Laravel', 'PostgreSQL', 'Hostinger'],
  },
]

export const services = [
  { name: 'Web Application Development', cmd: 'fullstack-build', desc: 'React/Laravel/Django apps from concept to deployment' },
  { name: 'Security Assessment', cmd: 'security-scan', desc: 'Vulnerability assessment and ethical hacking (Cisco verified)' },
  { name: 'System Architecture', cmd: 'arch-design', desc: 'Database design, API architecture, and system planning' },
]

export const stats = [
  { value: 486, unit: 'hours', label: 'internship' },
  { value: 22, unit: 'barangays', label: 'systems deployed' },
  { value: 4, unit: 'certs', label: 'earned' },
]

export const certifications = [
  { name: '486-Hour IT Internship', issuer: 'LGU Manolo Fortich', year: '2026' },
  { name: 'Cisco Networking Academy 1 & 2', issuer: 'Cisco', year: '2025' },
  { name: 'Ethical Hacker', issuer: 'Cisco Verified', year: '2025' },
  { name: 'Cybersecurity Essentials', issuer: 'Cisco', year: '2025' },
]

export const socials = {
  github: '#',
  linkedin: '#',
  email: 'godwin.lunaan.10@gmail.com',
}

export const navLinks = [
  { label: 'about', cmd: 'cat about.md' },
  { label: 'skills', cmd: 'ls /skills/' },
  { label: 'experience', cmd: 'cat experience.log' },
  { label: 'projects', cmd: './projects --list' },
  { label: 'certs', cmd: 'cat certs.asc' },
  { label: 'contact', cmd: 'mail --help' },
]
