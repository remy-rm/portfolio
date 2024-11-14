import { Github, Linkedin, Mail } from "lucide-react";

const SocialMedia = () => {
    return (
        <div className="flex gap-6 items-center">
            <a
                href="https://github.com/remy-rm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
                <Github size={24}/>
            </a>
            <a
                href="https://www.linkedin.com/in/rémymarquis/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
                <Linkedin size={24}/>
            </a>
            <a
                href="mailto:remy.marquis62121@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
                <Mail size={24}/>
            </a>
        </div>
    );
}

export default SocialMedia;
