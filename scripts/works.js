const works = [
  {
    img: "/img/works/mediheal.png",
    title: "Mediheal",
    subtitle: "Hospital Management and Booking Application",
    description:
      "Mediheal is a full-featured hospital management platform designed with dedicated modules for users, doctors, and administrators. The application enables patients to book doctor appointments online, manage accounts, and communicate directly with healthcare professionals via real-time chat and video calls. Doctors and admins are provided with personalized dashboards to manage patients, appointments, and hospital operations efficiently.",
    features: [
      "Secure signup and login using OAuth and OTP verification for enhanced security",
      "JWT authentication with refresh tokens for session management and continuous access.",
      "Personalized user accounts with wallet management, booking history, and profile editing.",
      "Appointment booking with online payments powered by Stripe",
      "Real-time chat and video consultation using Socket.IO and ZEGOCLOUD",
      "Image upload and management via Cloudinary for efficient storage",
      "Repository Pattern for scalable and maintainable backend architecture",
      "Doctor dashboard for patient management, appointment history, and prescription generation",
      "Admin dashboard for doctor onboarding, user management, bed space allocation, and overall hospital operations control.",
    ],
    tech: {
      Frontend: ["React.js", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      Authentication: ["JWT", "OAuth", "OTP"],
      RealTime: ["Socket.IO", "ZEGOCLOUD"],
      Payments: ["Stripe"],
      Cloud: ["Cloudinary"],
      Architecture: ["Repository Pattern"],
    },
    link: "https://mediheal.sinan-dev.in/home",
  },
];
