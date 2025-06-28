"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';

const PortfolioPage = () => {
    // Update document title
    useEffect(() => {
        document.title = "Our Projects Portfolio - UKB Plumbing";
    }, []);

    // State for managing displayed projects
    const [visibleProjects, setVisibleProjects] = useState(9);

    // Sample project data
    const projects = [
        {
            id: 1,
            image: "/lovable-uploads/portfolio1.jpg",
        },
        {
            id: 2,
            image: "/lovable-uploads/portfolio2.jpg",
        },
        {
            id: 3,
            image: "/lovable-uploads/portfolio3.jpg",
        },
        {
            id: 4,
            image: "/lovable-uploads/portfolio4.jpg",
        },
        {
            id: 5,
            image: "/lovable-uploads/portfolio5.jpg",
        },
        {
            id: 6,
            image: "/lovable-uploads/portfolio6.jpg",
        },
        {
            id: 7,
            image: "/lovable-uploads/portfolio7.jpg",
        },
        {
            id: 8,
            image: "/lovable-uploads/portfolio8.jpg",
        },
        {
            id: 9,
            image: "/lovable-uploads/portfolio9.jpg",
        },
        {
            id: 10,
            image: "/lovable-uploads/portfolio10.jpg",
        }
    ];

    // Load more projects handler
    const handleLoadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 3, projects.length));
    };

    // Show less projects handler
    const handleShowLess = () => {
        setVisibleProjects(9);
    };

    return (
        <div className="min-h-screen bg-white">
            <AnnouncementBar/>
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-20 bg-ukb-lightblue">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 py-[30px] my-[20px]">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ukb-darkblue">
                                Our Projects
                            </h1>
                            <div className="text-sm text-ukb-blue mb-4">
                                Home → Projects
                            </div>

                            <div className="space-y-4 text-ukb-darkgray">
                                <p>
                                    At UKB Gas and Heating Ltd, we take pride in delivering top-quality
                                    plumbing and heating solutions across Southampton. Our projects range
                                    from residential boiler installations and central heating upgrades to
                                    large-scale commercial plumbing works.
                                </p>
                                <p>
                                    With a team of Gas Safe registered engineers, we ensure every project
                                    meets the highest standards of safety, efficiency, and reliability.
                                </p>
                                <p>
                                    From emergency plumbing repairs to full heating system installations,
                                    we handle every job with professionalism and attention to detail. We
                                    work closely with homeowners, landlords, and businesses to provide
                                    tailored solutions that suit their needs and budget.
                                </p>
                                <p>
                                    Explore our completed projects to see how we've helped our clients with
                                    expert plumbing and heating services, ensuring comfort, safety, and
                                    long-term performance in every home and business we serve.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/lovable-uploads/portfolioHero.png"
                                alt="Plumber with tools"
                                className="w-full h-auto mt-10 mr-20"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Showcase Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-ukb-blue font-medium mb-2">Our Awesome Project</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-4">
                            Check This Our Showcase of<br />
                            Completed Projects
                        </h2>
                    </div>

                    {/* Project Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {projects.slice(0, visibleProjects).map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`Project ${project.id}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-ukb-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center text-white p-4">
                                            <div className="flex justify-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More/Show Less Buttons */}
                    <div className="text-center flex justify-center gap-4">
                        {visibleProjects < projects.length && (
                            <Button
                                onClick={handleLoadMore}
                                className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-8 py-3 rounded-md"
                            >
                                Load More
                            </Button>
                        )}
                        {visibleProjects > 9 && (
                            <Button
                                onClick={handleShowLess}
                                className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-8 py-3 rounded-md"
                            >
                                Show Less
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="py-16 bg-ukb-lightblue">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/3 mb-8 lg:mb-0">
                            <img
                                src="/lovable-uploads/portfolioFooterHero.jpg"
                                alt="Professional plumber"
                                className="w-full max-w-sm mx-auto lg:mx-0"
                            />
                        </div>

                        <div className="lg:w-2/3 lg:pl-12">
                            <p className="text-ukb-blue font-medium mb-2">We Ready 24 Hours!</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-6">
                                Your Best Choice for<br />
                                Plumbing & Heating<br />
                                Solutions!
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-6 py-3 rounded-md">
                                    Get a Quote
                                </Button>
                                <div className="flex items-center gap-2">
                                    <div className="bg-ukb-blue text-white p-2 rounded-full">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-ukb-darkgray">Emergency Call</p>
                                        <p className="font-bold text-ukb-blue">07359605766</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PortfolioPage;