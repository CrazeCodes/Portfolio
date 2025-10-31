import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Ecommerce Web Application",
    des: "A full-featured Ecommerce platform with secure authentication, product management, and payment integration.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongo.svg", "/vercel.svg"],
    link: "https://ecommerce-gamma-amber.vercel.app/",
    sourceCode: "https://github.com/CrazeCodes/Ecommerce",
  },
  {
    id: 2,
    title: "NSE Stock Price Predictor - ML Project",
    des: "A machine learning-based system that predicts NSE stock trends using regression models and real-time data visualization.",
    img: "/p2.jpg",
    iconLists: ["/py.svg", "/sk.svg", "/np.svg", "/pd.svg", "/plt.svg"],
    link: "https://www.kaggle.com/code/sumansaha2004/stockv6",
    sourceCode: "https://www.kaggle.com/code/sumansaha2004/stockv6",
  },
  {
    id: 3,
    title: "Parkinson’s Disease Detection - ML Project",
    des: "A voice-based machine learning model that detects early signs of Parkinson’s disease using feature extraction and classification models.",
    img: "/p3.jpg",
    iconLists: ["/py.svg", "/sk.svg", "/np.svg", "/pd.svg", "/ml.svg"],
    link: "https://www.kaggle.com/code/sumansaha2004/pd-detection-new",
    sourceCode: "https://www.kaggle.com/code/sumansaha2004/pd-detection-new",
  },

] as const;

export const testimonials = [
  {
    quote: `Working with ${links.ownerName} was a fantastic experience. His professionalism, quick turnaround, and clear communication made the entire process seamless. ${links.ownerName}'s deep understanding of both design and functionality helped us create a product that truly represents our brand.`,
    name: "Jordan Patel",
    title: "Founder of NovaPixel Labs",
  },
  {
    quote: `Collaborating with ${links.ownerName} exceeded all expectations. He brought creative ideas to every meeting and delivered top-quality results ahead of schedule. If you're looking for someone who’s passionate, skilled, and dependable, ${links.ownerName} is the perfect choice.`,
    name: "Maya Chen",
    title: "Creative Director at ByteCraft Studio",
  },
] as const;


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "FullStack Developer Intern - RMSSAD Pvt.Ltd",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/CrazeCodes",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanidhyy",
  },
] as const;

export const techStack = {
  stack1: ["MongoDB", "Express.js", "React.js", "Node.js"],
  stack2: ["Java", "SQL"],
} as const;

export const techStackIcons = [
  "/re.svg", // React
  "/node.svg", // Node
  "/mongo.svg", // MongoDB
  "/mysql.svg", // MySQL
  "/java.svg", // Java
  "/py.svg", // Python
  "/cloudName.svg", // Cloudinary (using cloud icon)
  "/tail.svg", // CSS
] as const;
