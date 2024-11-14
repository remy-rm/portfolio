import SocialMedia from "./SocialMedia.tsx";
import {gradientTitle} from "../style.ts";

const contact = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-100" id="contact">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className={`text-3xl font-bold mb-8 ${gradientTitle}`}>Contact</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    N'hésitez pas à me contacter pour discuter de projets ou d'opportunités de collaboration.
                </p>
                <a
                    href="mailto:remy.marquis62121@gmail.com"
                    className="text-purple-600 hover:text-purple-700 text-xl font-medium"
                >
                    remy.marquis62121@gmail.com
                </a>
            </div>
            <div className="flex justify-center mt-6">
                <SocialMedia/>
            </div>
        </section>
    )
}
export default contact;