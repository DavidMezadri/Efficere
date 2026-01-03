import React from 'react';
import { FaGraduationCap } from "react-icons/fa";

const Profile = () => {
    return (
        <section id="profile" className="min-h-screen bg-bg-darker relative overflow-hidden flex items-center justify-center py-8 md:py-12">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-3xl font-bold text-primary-light mb-2">Nossa Fundadora</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Photo Column */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-card">
                            <img
                                src="/images/perfil/Karina Doninelli-1.jpg"
                                alt="Karina Doninelli - CEO e Fundadora"
                                className="w-full h-auto max-h-[500px] md:max-h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                                <h3 className="text-2xl font-bold text-white mb-1">Karina Doninelli</h3>
                                <p className="text-primary-light font-medium">CEO e Fundadora</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-6">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
                            <p>
                                Com sólida experiência em gestão pública e profundo conhecimento em direito administrativo,
                                <strong> Karina Doninelli</strong> fundou a <strong>Efficere</strong> com a missão de transformar
                                a administração pública brasileira.
                            </p>

                            <p>
                                Sua trajetória reúne <strong>mais de 12 anos de atuação direta em órgãos públicos</strong>,
                                com experiência em <strong>licitações, contratos, gestão de processos, planejamento e
                                    desenvolvimento de políticas públicas</strong>, atuando como <strong>gestora de contratos,
                                        pregoeira e assessora jurídica</strong>, além de projetos em <strong>consórcios intermunicipais
                                            e inovação pública</strong>.
                            </p>

                            <p>
                                À frente da <strong>Efficere</strong>, lidera projetos de consultoria e assessoria que promovem
                                melhorias concretas na gestão municipal, estadual e federal, com foco em uma administração
                                pública <strong>mais eficiente, estratégica e orientada a resultados</strong>.
                            </p>

                            <p>
                                Essa vivência prática permite compreender os desafios enfrentados diariamente por gestores
                                e servidores, especialmente em <strong>municípios de pequeno e médio porte</strong>.
                                <br />
                                <strong>Eficiência não é discurso: é prática aplicada.</strong>
                            </p>

                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 gap-2 mt-3">
                            <a
                                href="http://lattes.cnpq.br/7402715061485415"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-bg-card border border-white/5 rounded-xl p-3 backdrop-blur-sm hover:border-primary/30 transition-all group/card hover:bg-bg-card/80 cursor-pointer"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="text-4xl grayscale group-hover/card:grayscale-0 transition" aria-label="Formação"><FaGraduationCap /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 group-hover/card:text-primary-light transition-colors">Formação Especializada</h4>
                                        <p className="text-primary text-sm hover:text-primary-light transition-colors">Ver currículo Lattes →</p>
                                    </div>
                                </div>
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
