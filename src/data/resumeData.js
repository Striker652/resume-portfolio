export const resumeData = {
  personal: {
    name: "Nomula Hemanth Reddy",
    address: "3-12-102, Ganesh Nagar, Ramanthapur, Hyd, TL, 500013",
    phone: "+91-9959562824",
    email: "hemanthreddy620@gmail.com"
  },
  summary: "Software Development Engineer with 3+ years of experience building scalable backend systems, RESTful microservices, and AI-powered applications using Java, Python, and AWS. Strong foundation in data structures, algorithms, and system design. Experienced in delivering high-throughput distributed systems with a focus on ownership, operational excellence, and customer impact.",
  skills: [
    { category: "Programming Languages", items: ["C", "C++", "Java", "Python (Numpy, Pandas)", "SQL"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "ASP.NET", "AJAX", "Web Services", "jQuery", "JSON", "XML"] },
    { category: "Web Frameworks", items: ["AngularJS", "Node.js", "Flask", "Spring Framework", "Django", "Express.js"] },
    { category: "Databases", items: ["MySQL", "NoSQL", "SQL PLUS", "MongoDB", "Google Firebase", "Oracle", "Redshift"] },
    { category: "Cloud Services", items: ["AWS", "Azure", "Apache Tomcat", "Heroku"] },
    { category: "Technologies", items: ["Git", "Docker", "Jenkins", "Tableau", "PowerBI", "Tensorflow", "VS Code", "PyCharm", "Hibernate", "Pytorch", "Jira", "Trello", "Swagger", "Terraform", "Cassandra"] }
  ],
  experience: [
    {
      company: "Xnode Inc.",
      location: "Seattle, WA",
      role: "Software Development Engineer",
      period: "May 2024 – Present",
      achievements: [
        "Architected a GenAI-powered full-stack application using Angular, Spring Boot, and Kafka Streams for real-time analytics, reducing data processing latency by 30% and supporting 10k+ events/sec throughput.",
        "Designed and optimized Apache Cassandra data models with efficient partitioning and clustering strategies, achieving 40% improvement in read/write throughput for high-volume distributed workloads.",
        "Engineered AI-driven data annotation pipelines for large-scale training datasets, improving labeling fidelity by 25% and accelerating LLM fine-tuning cycles.",
        "Collaborated in Agile sprints with cross-functional teams to deliver production-ready microservices on schedule, reducing post-release defects by 20% through unit testing and code reviews."
      ]
    },
    {
      company: "Software Concepts LLC",
      location: "Carrollton, TX",
      role: "Software Engineer",
      period: "Nov 2023 – Apr 2024",
      achievements: [
        "Built Flask REST APIs integrated with PostgreSQL via SQLAlchemy ORM, increasing data retrieval speed by 40% and reducing server load by 25% through query optimization and connection pooling.",
        "Developed real-time event-driven data pipelines using Apache Kafka, enabling scalable processing of 50k+ messages/sec across distributed microservices.",
        "Deployed containerized applications on Amazon EC2 using Docker; implemented Hibernate caching with Redis, reducing database round-trips by 30% and improving API response times under peak load."
      ]
    },
    {
      company: "OneStopD Solutions Inc.",
      location: "Phoenix, AZ (Remote)",
      role: "Full Stack Developer",
      period: "Jan 2023 – Oct 2023",
      achievements: [
        "Developed RESTful microservices using Spring Boot and Spring MVC, reducing inter-service coupling by 30% and improving system modularity.",
        "Managed 5TB of structured data on Amazon S3 with versioning and lifecycle policies, reducing annual storage costs by 20%.",
        "Built automated ETL workflows in Informatica, increasing data integration efficiency by 40%; integrated Hibernate with Spring Transaction Management to eliminate data inconsistency across 3 critical workflows."
      ]
    },
    {
      company: "Lorvent Solutions",
      location: "Hyderabad, India",
      role: "Junior Software Developer",
      period: "Jun 2020 – Jul 2021",
      achievements: [
        "Integrated Apache Cassandra with Apache Spark for distributed batch processing of 1TB+ datasets and managed Amazon RDS instances (MySQL, PostgreSQL) supporting ETL pipelines into data warehouses.",
        "Designed Tableau and Power BI dashboards that drove a 20% boost in sales conversions and a 15% reduction in churn rate."
      ]
    }
  ],
  projects: [
    {
      name: "DocxChat – AI-Powered Legal Document Automation",
      techStack: "Python, FastAPI, React.js, OpenAI, LangChain",
      period: "Nov 2025",
      description: "Built an AI system converting legal .docx templates into conversational fillable documents, reducing manual completion time by 60%; achieved 95%+ field detection accuracy using LLM reasoning and document parsing heuristics.",
      highlights: [
        "Designed a chat-based workflow using OpenAI function calling with step-by-step validation, reducing user errors by 40%.",
        "Developed a FastAPI backend managing document sessions, chat state, and secure .docx rendering."
      ]
    },
    {
      name: "Kirana.ai – Gen-AI Voice Inventory Management",
      techStack: "Next.js, FastAPI, LangChain, Whisper, Groq, Phidata",
      period: "Jan – Mar 2025",
      description: "Built a voice-activated inventory management system for Kirana shops using Next.js and FastAPI, integrating Whisper-large-v3-turbo for multilingual voice transcription in regional Indian languages.",
      highlights: [
        "Deployed DeepSeek-R1 LLM on Groq Cloud for accelerated NLP.",
        "Used LangChain and Phidata to manage AI agents for real-time order tracking, reducing stockouts by 30% and overstocking by 20%."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science, Computer Science",
      university: "New Jersey Institute of Technology, Newark, NJ",
      period: "June 2023"
    },
    {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      university: "GITAM University, Hyderabad, India",
      period: "June 2020"
    }
  ]
};
