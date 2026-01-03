import React from 'react';
import { GiInjustice } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FaGraduationCap, FaBook, FaLightbulb } from "react-icons/fa";

const servicesData = [
    { icon: <GiInjustice />, title: 'Assessoria e Consultoria Jurídico-Administrativa', desc: 'Apoio na análise de legalidade e conformidade de processos administrativos. Consultoria técnica para aplicação da Lei nº 14.133/2021 e demais normativas públicas. Revisão e atualização de legislações municipais, decretos, portarias e atos normativos. Elaboração de pareceres, notas técnicas, minutas e estudos jurídicos especializados.' },
    { icon: <GoGraph />, title: 'Planejamento e Gestão de Processos Públicos', desc: 'Estruturação de fluxos administrativos e padronização de procedimentos. Apoio na elaboração de ETP, DFD, TR, planos de trabalho e documentos de contratação. Implantação de práticas de governança, compliance e eficiência institucional. Gestão estratégica de projetos, indicadores e resultados públicos.' },
    { icon: <FaGraduationCap />, title: 'Capacitação e Treinamento de Servidores e Gestores', desc: 'Cursos, oficinas e workshops presenciais ou online. Treinamentos sobre licitações, planejamento, gestão pública, governança e inovação. Desenvolvimento de equipes com foco em resultados, liderança e atuação eficiente. Aplicação de metodologias práticas e estudos de casos reais da administração.' },
    { icon: <FaBook />, title: 'Desenvolvimento de Materiais Institucionais', desc: 'Produção de manuais, cartilhas, fluxos e guias operacionais. Elaboração de materiais de apoio para políticas públicas, programas e projetos. Criação de conteúdos técnicos e visuais para comunicação pública e institucional.' },
    { icon: <FaLightbulb />, title: 'Consultoria em Inovação Pública e Gestão Estratégica', desc: 'Implementação de práticas modernas de planejamento e gestão de projetos. Apoio à modernização administrativa e transformação digital. Utilização de tecnologias, como inteligência artificial, para otimização de processos.' },
];

const Services = () => {
    return (
        <section id="services" className="min-h-screen bg-bg-darker relative overflow-hidden flex items-center justify-center py-20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-light mb-4">Nossos Serviços</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Soluções completas para modernizar e qualificar a gestão pública municipal
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-bg-card border border-white/5 rounded-2xl hover:bg-bg-card-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary/50 transition-all duration-300"></div>

                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition" aria-label={service.title}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-primary-light transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-justify group-hover:text-gray-300 transition-colors">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
