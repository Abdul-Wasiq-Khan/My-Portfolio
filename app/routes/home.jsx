import About from "../components/about";
import Hero from "../components/Hero.jsx";

export function meta({}) {
  return [
    { title: "Abdul Wasiq Khan's Profile" },
    { name: "description", content: "Welcome to Abdul Wasiq Khan's profile!" },
  ];
}

export default function Home() {
  return <>
    <Hero
      backgroundImage="./pictures/background.jpg"
      title="Abdul Wasiq Khan"
      description="Specializing in software-driven robotic systems, full-stack web development, and embedded systems."
    />
    <About />
  </>;
}
