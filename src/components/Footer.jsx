import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-bg-darker border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-500 mb-2">
                    &copy; {new Date().getFullYear()} Efficere Consultoria. Todos os direitos reservados.
                </p>
                <p className="text-gray-400 text-sm">
                    Conhecimento técnico, planejamento e apoio especializado.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
