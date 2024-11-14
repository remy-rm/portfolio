
import {gradientTitle} from "../style.ts";
const handleDownload = () => {

    const link = document.createElement('a');
    link.href = 'public/assets/cv/remymarquis.pdf';
    link.download = 'remymarquisCv.pdf';
    link.click();
    document.body.removeChild(link);
};

const about = () => {
    return (
        <section className="py-16 md:py-24" id="about">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold mb-12 ${gradientTitle}`}>À Propos</h2>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Bonjour ! Je suis un développeur web passionné par la création d'applications web modernes et
                        intuitives.
                        Je suis constamment en train d'apprendre et de me perfectionner.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Ma curiosité et ma détermination me poussent à explorer de nouvelles technologies et à relever
                        des défis
                        techniques stimulants.
                    </p>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleDownload}
                            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Télécharger mon CV
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default about;