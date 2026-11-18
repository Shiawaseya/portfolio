// All the text on the site lives here. Edit this file to update your portfolio.
export const PROFILE = {
  name: "Gerald Fajardo Peralta",
  initials: "GP",
  photo: "",                        // e.g. "photo.jpg" (put the file next to index.html)
  title: "BSIT student and aspiring software developer",
  email: "peraltagerald97@gmail.com",
  phone: "0910 477 3877",
  github: "https://github.com/Shiawaseya",
  linkedin: "",                     // add your LinkedIn URL if you have one
  resume: "Gerald_Peralta_CV.pdf",
};

export const NAV = [["about","How I think"],["skills","Skills"],["education","Education"],["experience","Experience"],["projects","Projects"],["certifications","Certifications"],["beyond","Beyond tech"],["contact","Contact"]];

export const SKILLS = [
  ["Web development", [["JavaScript",3],["React",2],["TypeScript",2],["Tailwind CSS",2],["HTML and CSS",3]]],
  ["Back-end and data", [["PHP and REST APIs",2],["Node.js and Express",2],["MySQL",2],["Doctrine ORM",2],["Socket.IO",2]]],
  ["Mobile", [["React Native",1],["Ionic",1]]],
  ["Practices and tools", [["Git and GitHub",2],["MVC and MVVM patterns",2],["Feature-based React structure",2],["Networking and IoT security basics",1]]],
  ["Interpersonal", [["Self-directed learning",3],["Problem solving",2],["Teamwork",2],["Adaptability",2]]],
];
export const LEVELS = ["", "Learning", "Working knowledge", "Comfortable"];

export const SCHOOLS = [
  { school: "Nueva Ecija University of Science and Technology (NEUST)", detail: "BS Information Technology (BSIT)", when: "Currently enrolled, expected graduation 2027", now: true },
  { school: "Talabutab Norte National High School", detail: "Junior and Senior High School", when: "Graduated 2021" },
  { school: "Talabutab Norte Elementary School", detail: "Primary education", when: "" },
];

export const PROJECTS = [
  { title: "SAND Admin Dashboard",
    img: "",
    desc: "A web dashboard where an inventory owner manages items, stock, branches, employees and sales reports.",
    goal: "Replace paper and spreadsheet inventory tracking with one system that shows stock levels and sales at a glance.",
    tech: "React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Router, Query and Table, Zustand, Recharts, qrcode, jsbarcode",
    role: "Developer. I built the screens, data tables, dashboard charts and the QR code and barcode generation for items.",
    result: "A working dashboard connected to the REST API, covering items, variants, categories, brands, stock adjustments and reports.",
    link: "https://github.com/Shiawaseya", linkText: "GitHub profile" },
  { title: "SAND REST API",
    img: "",
    desc: "The back-end that stores inventory data and serves the dashboard, the POS and mobile clients.",
    goal: "Give every client one consistent, secure source of inventory, sales and user data.",
    tech: "PHP, Composer, Doctrine ORM, MySQL, PHPMailer",
    role: "Developer. I designed the layers (controllers, models, services, routes, middleware), authentication, roles, audit logs and password-reset emails. It applies lessons from a previous project where weak structure made the code hard to maintain.",
    result: "Endpoints for items, customers, employees, roles, sales, invoices, stock checks and dashboards, plus a written guide for connecting a React Native app.",
    link: "https://github.com/Shiawaseya", linkText: "GitHub profile" },
  { title: "SAND POS and Receipt Printing",
    img: "",
    desc: "A point-of-sale screen for cashiers, with live updates and printed receipts.",
    goal: "Let a cashier record a sale quickly and print the receipt on a dot-matrix printer.",
    tech: "React, Node.js, Socket.IO, PHP, ESC/P printer commands",
    role: "Developer. I built the POS interface, the real-time socket server and a small PHP print agent that runs on the cashier PC.",
    result: "A POS that updates in real time and sends formatted receipts to a dot-matrix printer.",
    link: "https://github.com/Shiawaseya", linkText: "GitHub profile" },
];

export const CERTS = [
  { name: "Legacy JavaScript Algorithms and Data Structures V7", by: "freeCodeCamp", date: "January 17, 2025", note: "Developer certification, about 300 hours of work." },
  { name: "Practical Networking: From Basic Set-Up to Advanced Configuration", by: "Ethel Programming Computer Programming Services", date: "July 31, 2026", note: "One-hour online webinar, certificate of participation." },
  { name: "IoT Cybersecurity: Protecting Devices, Data and Networks", by: "Ethel Programming Computer Programming Services", date: "August 31, 2026", note: "One-hour online webinar, certificate of participation." },
];
