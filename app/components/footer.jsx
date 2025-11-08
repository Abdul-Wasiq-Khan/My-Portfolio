import { useState } from "react";

export default function Footer() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-neutral-800 text-center transition-all duration-300 ease-in-out z-10">
            <div 
                className="py-4 cursor-pointer hover:bg-neutral-700"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <p className="text-gray-400 inline-block">
                    &copy; {new Date().getFullYear()} Abdul Wasiq Khan. 
                </p>
                <span className="text-gray-400 text-sm">
                    {isExpanded ? ' ▼ Click to collapse' : ' ▲ Click to expand'}
                </span>
            </div>
            
            {isExpanded && (
                <div className="px-4 pb-4 bg-neutral-800 border-t border-neutral-600">
                    <div className="max-w-4xl mx-auto flex justify-between items-start gap-8 text-gray-300 text-sm">
                        <div className="flex-1">
                            <h4 className="font-semibold mb-2">Contact</h4>
                            <p><a href="mailto:abdulwasiqkhan@gmail.com">Email: abdulwasiqkhan595@gmail.com</a></p>
                            <p>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-2">Social Links</h4>
                            <p><a href="https://www.linkedin.com/in/your-profile">LinkedIn: /in/your-profile</a></p>
                            <p><a href="https://github.com/Abdul-Wasiq-Khan">GitHub: Abdul-Wasiq-Khan</a></p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-2">Quick Links</h4>
                            <p>About</p>
                            <p>Projects</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}