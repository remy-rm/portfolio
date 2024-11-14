import {Code2, Database, Palette, Terminal} from "lucide-react";
import {gradientTitle} from "../style.ts";

const competence =( ) => {
    return (
        <section className="py-16 md:py-24" id="skills">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold mb-12 ${gradientTitle}`}>Compétences Techniques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <Code2 className="w-12 h-12 mb-6 text-purple-600"/>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Langages</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                HTML/CSS
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Java
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                JavaScript/TypeScript
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                SQL
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <Terminal className="w-12 h-12 mb-6 text-purple-600"/>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Frameworks</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                React
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Angular
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Spring
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <Database className="w-12 h-12 mb-6 text-purple-600"/>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Outils</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Git / GitHub
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Figma
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Trelllo
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                VS Code / IntelliJ IDEA
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <Palette className="w-12 h-12 mb-6 text-purple-600"/>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Design</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                Responsive Design
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                UI/UX Basics
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default competence;