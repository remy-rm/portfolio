
import SocialMedia from "./SocialMedia.tsx";

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-frandroid-pink via-frandroid-blue to-frandroid-green">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Rémy Marquis</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Développeur Web
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Passionné par les langages de programmation, je me suis orienté vers le développement web après une carrière variée. Mon autonomie et ma rigueur sont des atouts précieux dans ce domaine en constante évolution.            </p>
            <div className="flex gap-6">
              <SocialMedia />
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50">
                <img
                  src="assets/img/portrait.jpg"
                  alt="Portrait placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;