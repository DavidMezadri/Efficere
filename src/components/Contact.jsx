import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <section id="contact" className="h-screen bg-bg-darker relative flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold text-primary-light mb-10">Entre em Contato</h2>
                <p className="text-gray-400 text-xl mb-16">
                    Estamos prontos para transformar a gestão pública do seu município.
                </p>

                <div className="grid md:grid-cols-3 gap-10 mb-16">
                    <div className="bg-bg-card border border-white/5 rounded-2xl p-10 hover:border-primary/30 transition-colors">
                        <div className="text-4xl mb-6 grayscale hover:grayscale-0 transition" aria-label="Email">
                            <MdEmail className="mx-auto text-primary" size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                        <a href="mailto:contato@efficerelicitacoes.com.br" className="text-primary hover:text-primary-light transition-colors">
                            contato@efficerelicitacoes.com.br
                        </a>
                    </div>

                    <a
                        href="https://wa.me/555499668936?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Efficere."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-bg-card border border-white/5 rounded-2xl p-10 hover:border-primary/30 transition-all hover:bg-bg-card/80 hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="text-4xl mb-6 grayscale hover:grayscale-0 transition" aria-label="WhatsApp">
                            <FaWhatsapp className="mx-auto text-green-500" size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                        <p className="text-primary hover:text-primary-light transition-colors">Clique para conversar</p>
                    </a>

                    <a
                        href="https://www.instagram.com/efficere_assessoria/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-bg-card border border-white/5 rounded-2xl p-10 hover:border-primary/30 transition-all hover:bg-bg-card/80 hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="text-4xl mb-6 grayscale hover:grayscale-0 transition" aria-label="Instagram">
                            <FaInstagram className="mx-auto text-pink-500" size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                        <p className="text-primary hover:text-primary-light transition-colors">@efficere_assessoria</p>
                    </a>
                </div>

                <a
                    href="mailto:contato@efficerelicitacoes.com.br"
                    className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-[0_4px_20px_rgba(174,168,152,0.4)] hover:shadow-[0_6px_30px_rgba(174,168,152,0.6)] transform hover:-translate-y-1 transition-all duration-300"
                >
                    Entre em Contato
                </a>
            </div>
        </section>
    );
};

export default Contact;
