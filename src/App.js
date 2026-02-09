import "./styles.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const developerProfiles = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack Developer",
    location: "San Francisco, USA",
    bio: "Passionate about building scalable web applications and APIs.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "JavaScript"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    title: "Front-End Developer",
    location: "Madrid, Spain",
    bio: "Focused on clean UI, accessibility, and responsive design.",
    skills: ["Vue.js", "JavaScript", "HTML5", "CSS3", "Figma"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 3,
    name: "Kenichi Tanaka",
    title: "DevOps Engineer",
    location: "Tokyo, Japan",
    bio: "Automating infrastructure and optimizing CI/CD pipelines.",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 4,
    name: "Sarah Chen",
    title: "Mobile App Developer",
    location: "Toronto, Canada",
    bio: "Building cross-platform mobile apps with great UX.",
    skills: ["React Native", "Flutter", "Firebase", "Android", "iOS"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    id: 5,
    name: "Liam O'Connor",
    title: "Backend Developer",
    location: "Dublin, Ireland",
    bio: "Designing robust backend systems and REST APIs.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 6,
    name: "Amina Yusuf",
    title: "UI/UX Engineer",
    location: "Addis Ababa, Ethiopia",
    bio: "Bridging design and code for intuitive user experiences.",
    skills: ["Figma", "CSS", "React", "Accessibility", "Design Systems"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 7,
    name: "David Müller",
    title: "Software Engineer",
    location: "Berlin, Germany",
    bio: "Writing clean, maintainable software with modern tools.",
    skills: ["Java", "Spring", "Microservices", "SQL", "Git"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 8,
    name: "Emily Carter",
    title: "React Developer",
    location: "Austin, USA",
    bio: "Specializing in React performance and component design.",
    skills: ["React", "TypeScript", "Redux", "Vite", "Jest"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 9,
    name: "Ravi Kumar",
    title: "Cloud Engineer",
    location: "Bangalore, India",
    bio: "Designing scalable and secure cloud architectures.",
    skills: ["AWS", "Azure", "Linux", "Networking", "Terraform"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/men/63.jpg",
  },
  {
    id: 10,
    name: "Sofia Martins",
    title: "Data Engineer",
    location: "Lisbon, Portugal",
    bio: "Building reliable data pipelines and analytics platforms.",
    skills: ["Python", "SQL", "Airflow", "Spark", "BigQuery"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    id: 11,
    name: "Michael Brown",
    title: "Security Engineer",
    location: "New York, USA",
    bio: "Ensuring application security and data protection.",
    skills: ["Cybersecurity", "OWASP", "Pen Testing", "Linux", "Python"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/men/74.jpg",
  },
  {
    id: 12,
    name: "Hana Park",
    title: "AI / ML Engineer",
    location: "Seoul, South Korea",
    bio: "Building intelligent systems using machine learning.",
    skills: ["Python", "TensorFlow", "PyTorch", "ML", "Data Science"],
    social: [
      { link: "https://github.com", icon: <FaGithub /> },
      { link: "https://linkedin.com", icon: <FaLinkedin /> },
      { link: "https://twitter.com", icon: <FaTwitter /> },
    ],
    image: "https://randomuser.me/api/portraits/women/71.jpg",
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>
        Meet well known <span>developers</span> in the world
      </h1>
    </header>
  );
}

function Main() {
  return (
    <div className="card-container">
      {developerProfiles.map((developer) => (
        <Card key={developer.id} developer={developer} />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      2025 &copy; Tinsae Zegeye. Demonstration of React challenge #1.
    </footer>
  );
}

function Card({ developer }) {
  return (
    <section className="card">
      <CardHeader
        name={developer.name}
        title={developer.title}
        image={developer.image}
      />
      <CardMain
        bio={developer.bio}
        location={developer.location}
        skills={developer.skills}
        socials={developer.social}
      />
      <CardFooter />
    </section>
  );
}

function CardHeader({ name, title, image }) {
  return (
    <div className="card-header">
      <div className="developer">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <img className="img" src={image} alt={name} />
    </div>
  );
}

function CardMain({ bio, location, skills, socials }) {
  return (
    <div className="main">
      <p>{bio}</p>
      <p className="location">{location}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>

      <div className="social">
        {socials.map((social, index) => (
          <Social key={index} social={social} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return <span className="skill">{skill}</span>;
}

function Social({ social }) {
  return (
    <a href={social.link} target="_blank" rel="noreferrer">
      {social.icon}
    </a>
  );
}

function CardFooter() {
  return <button className="btn">Contact Using Email</button>;
}
