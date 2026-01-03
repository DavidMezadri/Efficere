import React from 'react';
import { FiTarget } from "react-icons/fi";
import { GoTelescope } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-bg-dark relative flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-light mb-4">Quem Somos</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
                        <p>
                            A <strong className="text-primary">Efficere</strong> nasce com o propósito de transformar a gestão pública por meio da assessoria,
                            consultoria e capacitação de servidores e gestores, atuando desde a estruturação das
                            políticas públicas e processos administrativos até a execução prática dos atos de gestão.
                        </p>
                        <p>
                            Nosso trabalho baseia-se na <strong>inovação</strong>, <strong>eficiência</strong> e <strong>legalidade</strong>,
                            promovendo o aprimoramento contínuo das equipes e a consolidação de uma Administração Pública moderna.
                        </p>
                        <p>
                            Com atuação voltada à realidade e às demandas locais, estamos preparados para atender
                            órgãos e entidades públicas em suas diversas necessidades, oferecendo soluções personalizadas.
                        </p>
                    </div>

                    <div className="bg-bg-card border border-white/5 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">Nossa Essência</h3>

                        <div className="space-y-8 relative z-10">

                            <div className="flex gap-4">
                                <div className="text-4xl grayscale group-hover:grayscale-0 transition" aria-label="Missão"><FiTarget /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 text-justify">Missão</h4>
                                    <p className="text-gray-400 text-sm">Tornar o serviço público mais eficiente, inovador e orientado a resultados, contribuindo para uma administração que gera valor real à sociedade.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl grayscale group-hover:grayscale-0 transition" aria-label="Visão"><GoTelescope /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Visão</h4>
                                    <p className="text-gray-400 text-sm text-justify">Ser referência nacional em assessoria e capacitação para a gestão pública, reconhecida por transformar estruturas administrativas em
                                        ambientes mais eficientes, transparentes e inovadores, contribuindo para o fortalecimento das instituições públicas e a entrega de resultados concretos à sociedade.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl grayscale group-hover:grayscale-0 transition" aria-label="Valores"><FaStar /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Valores</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {["Ética e Integridade",
                                            "Excelência Técnica",
                                            "Inovação e Eficiência",
                                            "Comprometimento com Resultados",
                                            "Valorização das Pessoas",
                                            "Colaboração e Parceria",
                                            "Responsabilidade Social"
                                        ].map(val => (
                                            <span key={val} className="text-xs px-3 py-1 rounded-full bg-[#aea898]/10 text-[#c4bfb0] border border-[#aea898]/20">
                                                {val}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
