import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-bg-darker">
            {/* Background Gradient & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-gradient-brand opacity-10 blur-3xl rounded-full animate-float"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] bg-primary-dark/5 opacity-5 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-primary font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
                    Efficere | Assessoria & Capacitação
                </h2>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent animate-fade-in-up delay-100">
                    Assessoria que fala <br />
                    <span className="text-primary-light">a língua dos gestores e servidores </span>municipais!
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                    Lidar com a burocracia e os desafios da Administração Pública exige
                    conhecimento técnico, planejamento e execução qualificada.
                </p>

                <a
                    href="#contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-lg shadow-[0_0_20px_rgba(174,168,152,0.3)] hover:shadow-[0_0_30px_rgba(174,168,152,0.5)] transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-300"
                >
                    Entre em Contato
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
