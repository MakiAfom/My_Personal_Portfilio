import powerBI from "../assets/projects/powerBI.jpg";
import Walmart from "../assets/projects/walmart.jpg";
import Mitadwebsite from "../assets/projects/Mitad website.jpg";
import blogApp from "../assets/projects/blogApp.jpg";
import gender from "../assets/projects/gender.jpg";
import bakery from "../assets/projects/bakery.jpg";

export const BIO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, SupaBase, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Supabase, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: " Full Stack Developer",
    company: "Naamal Agency and Equal Reach",
    description: `Levrage developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Backendend Developer",
    company: "Na'amal Agency",
    description: `Designed and developed user interfaces  Portal for web applications using and React.js. Worked closely with Software  developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized Frontend and Backend performance.`,
    technologies: ["HTML", "CSS", "Vue.js"],
  },
  {
    year: "2021 - 2022",
    role: "Entry Level Full Stack Developer",
    company: "DOT Ethopia",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "HTML", "CSS", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Data Science ",
    company: "Gig works",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Exccel", "Python", "Django", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Optimizing Solar Cooking Efficiency",
    description:
      "A project focused on creating a solar-powered cooking solution to reduce wood usage.",
    githubUrl:
      "https://github.com/MakiAfom/Optimizing-Solar-Cooking-Efficiency.git",
    githubUrl3:
      "https://github.com/MakiAfom/Optimizing-Solar-Cooking-Efficiency/blob/main/ModelTestingPYTHON.ipynb",
    image: Mitadwebsite,
    technologies: ["Python", "Matplotlib", "Data Analysis"],
  },
  {
    id: 2,
    title: "Data-Driven Restaurant Recommendation System",
    description:
      "This project enhances customer experience by analyzing restaurant ratings and creating a personalized recommendation system.",
    githubUrl: "https://github.com/MakiAfom/RestaurantAnalysis.git",
    githubUrl3:
      "https://github.com/MakiAfom/RestaurantAnalysis/blob/main/mikal_data_analysis.ipynb",
    image: blogApp,
    technologies: [
      "Python(Pandas, NumPy)",
      "SQL",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    id: 3,
    title: "Empowering Employee Learning through Power BI in Rural Eritrea",
    description:
      "A development initiative to enhance workforce efficiency through data-driven training programs in rural Eritrea.",
    githubUrl:
      "https://github.com/MakiAfom/Empowering-Employment-Through-Power-BI-in-Eritrea.git",
    githubUrl3:
      "https://github.com/MakiAfom/Empowering-Employment-Through-Power-BI-in-Eritrea/blob/main/ModelTestingPYTHON.ipynb",
    image: powerBI,
    technologies: ["Excel", "PowerBI", "Python", "Tailwind"],
  },
  {
    id: 4,
    title: "Walmart Sales Prediction",
    description:
      "Predict Walmart's sales to optimize inventory, improve marketing strategies, and manage seasonal demand.",
    githubUrl: "https://github.com/MakiAfom/walmart-sales-prediction.git",
    image: Walmart,
    technologies: [
      "EDA",
      "Box Plots",
      "Data Wrangling",
      "Heatmap",
      "Random Forest Regression",
    ],
  },
  {
    id: 5,
    title: "Bakery Website",
    description:
      "A platform for selling bakery items, homemade desserts, and cookies.",
    githubUrl: "https://github.com/MakiAfom/My_Bakery_website.git",
    image: bakery,
    technologies: ["JavaScript", "TypeScript", "CRUD API", "jQuery"],
  },
];
export const CONTACT = {
  address: "North Carolina, CH 28212 ",
  phoneNo: "+9804579962 ",
  email: "mikalafewerki14@gmail.com",
};
