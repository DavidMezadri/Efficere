import React, { useState, useEffect } from 'react';

const carouselItems = [
    { img: '/images/b014b38f-4dba-4349-8e7e-81530b4c1055.jpg', title: 'Consultoria', desc: 'Apoio especializado em legislação pública', text: 'Tira Dúvidas Nova Lei de Licitação AMASBi' },
    { img: '/images/fac76bdf-e22a-46df-9fde-2cab52eb283d.jpg', title: 'Parcerias', desc: 'Fortalecendo municípios com conhecimento', text: 'Tira Dúvidas Nova Lei de Licitação para municípios associados na AMASBI' },
    { img: '/images/IMG-20251025-WA0005.jpg', title: 'Treinamento', desc: 'Aprendizado contínuo para servidores', text: 'Capacitação Nova Lei de Licitação servidores da Secretaria de Saúde de Ibirubá' },
    { img: '/images/IMG-20251025-WA0006.jpg', title: 'Qualificação', desc: 'Capacitação estratégica para saúde pública', text: 'Capacitação servidores da Secretaria de Saúde do município de Ibirubá' },
    { img: '/images/IMG-20251025-WA0009.jpg', title: 'Capacitação em Licitações', desc: 'Capacitação em boas práticas administrativas', text: 'Capacitação em Gestão de Contratos no município de Ibatiba-ES.' },
    { img: '/images/IMG-20251025-WA0010.jpeg', title: 'Atualização Legislativa', desc: 'Aperfeiçoamento constante em gestão pública', text: 'Capacitação Nova Lei de Licitações no município de Santa Teresa-ES.' },
    { img: '/images/IMG-20251025-WA0011.jpeg', title: 'Gestão de Contratos', desc: 'Conhecimento especializado para os gestores públicos', text: 'Capacitação em Gestão e Fiscalização de Contratos no município de Santa Teresa-ES.' },
    { img: '/images/IMG-20251025-WA0012.jpeg', title: 'Fiscalização e Gestão', desc: 'Melhorando a gestão e fiscalização de contratos públicos', text: 'Capacitação em Gestão e Fiscalização de Contratos no Município de Santa Teresa- ES' },
    { img: '/images/IMG-20251025-WA0013.jpeg', title: 'Implementação Legislativa', desc: 'Implantação da Nova Lei de Licitações com excelência', text: 'Comissão de Implantação da Nova Lei de Licitações do município de Fontoura Xavier - RS' },
];

// Note: Responsive logic 
// Desktop: 3 items
// Tablet: 2 items
// Mobile: 1 item

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3); // Desktop: 3 items
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2); // Tablet: 2 items
            } else {
                setItemsPerView(1); // Mobile: 1 item
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex >= carouselItems.length - itemsPerView) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(carouselItems.length - itemsPerView);
        } else {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const openModal = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    return (
        <section id="gallery" className="min-h-screen bg-bg-dark relative flex items-center justify-center py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-light mb-4">Nossa Atuação</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
                </div>

                <div className="relative group h-full">
                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black/50 hover:bg-primary text-white p-3 rounded-full backdrop-blur-sm transition-all disabled:opacity-0"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-black/50 hover:bg-primary text-white p-3 rounded-full backdrop-blur-sm transition-all"
                    >
                        ›
                    </button>

                    {/* Track */}
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {carouselItems.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ minWidth: `${100 / itemsPerView}% ` }}
                                    className="p-2 relative aspect-[4/5] cursor-pointer group/slide"
                                    onClick={() => openModal(item)}
                                >
                                    <div className="w-full h-full relative overflow-hidden rounded-xl border border-white/10">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-2 group-hover/slide:translate-y-0 transition-transform">
                                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                            <p className="text-gray-300 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && selectedItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-bg-dark border border-white/10 rounded-2xl overflow-hidden animate-scaleIn"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors"
                            onClick={() => setModalOpen(false)}
                        >
                            ✕
                        </button>
                        <div className="grid md:grid-cols-2">
                            <div className="h-64 md:h-96">
                                <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-primary-light mb-4">{selectedItem.title}</h3>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {selectedItem.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Carousel;
