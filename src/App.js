import React from 'react';
import { Music, Video, BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
    <Icon className="w-8 h-8 text-gray-700 mb-4" />
    <h3 className="text-xl font-serif font-medium text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 font-serif">{description}</p>
  </div>
);

const StudioBWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner with staff lines */}
      <header className="w-full h-48 relative bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 flex flex-col justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-t border-gray-400 mt-4"></div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl tracking-widest font-serif">
            <span className="font-light text-gray-700">studio</span>
            <span className="font-semibold text-gray-800 ml-4">B</span>
          </h1>
        </div>
      </header>

      {/* Parallax Banner */}
      <div className="w-full mx-auto h-80 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: 'url("/brass-section.png")',
            backgroundPosition: 'center -200px',
            backgroundSize: 'cover'
          }}
        />
      </div>


      {/* Navigation */}
      <nav className="py-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <ul className="flex justify-center space-x-12 text-gray-600 font-serif text-lg">
            <li className="hover:text-gray-900 cursor-pointer">Lessons</li>
            <li className="hover:text-gray-900 cursor-pointer">Publications</li>
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Welcome Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-6 text-center">Welcome to Studio B</h2>
          <p className="text-gray-600 leading-relaxed font-serif mb-4">
                I'm Rich Barrieres, known to many of my students simply as "B". With over 30 years of teaching experience, I provide 
                expert music instruction for brass and band instruments. 
                From beginners to advanced players, my personalized approach helps students achieve their musical goals. 
          </p>
          <p className="text-gray-600 leading-relaxed font-serif mb-4">
                Students have the option of private lessons at my home studio in Stockholm NJ or virtually via Zoom.
                In addition to lessons, students may find opportunities to join ensembles like the Sussex County Youth Orchestra 
                and CCM Wind Ensemble, fostering their growth as musicians in a collaborative environment.
          </p>
          <p className="text-gray-600 leading-relaxed font-serif" mb-4>
                In addition to student opportunities, please inquire for publications, including original compositions for brass quintets, 
                woodwind quintets, and band arrangements. Sheet music is available for purchase.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-12 text-center">Music Education & Publishing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Music}
              title="Private Lessons"
              description="In-studio lessons for trumpet, euphonium (advanced) and all band instruments (beginner/intermediate). Located in Stockholm, NJ."
            />
            <ServiceCard 
              icon={Video}
              title="Virtual Lessons"
              description="Remote instruction available for students anywhere. Professional online setup for optimal learning experience."
            />
            <ServiceCard 
              icon={BookOpen}
              title="Publications"
              description="Original compositions for brass quintets, woodwind quintets, and band arrangements. Sheet music available for purchase."
            />
          </div>
        </section>

        {/* Rates Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-8 text-center">Lesson Rates</h2>
          <div className="max-w-lg mx-auto grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded font-serif">
              <span>30 minute lesson</span>
              <span className="font-medium">$30</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded font-serif">
              <span>45 minute lesson</span>
              <span className="font-medium">$40</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded font-serif">
              <span>60 minute lesson</span>
              <span className="font-medium">$50</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-8 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto grid grid-cols-1 gap-6">
            <div className="flex items-center space-x-4 text-gray-600 font-serif">
              <Mail className="w-5 h-5" />
              <a href="mailto:brassdynamics@yahoo.com" className="hover:text-gray-900">brassdynamics@yahoo.com</a>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 font-serif">
              <Phone className="w-5 h-5" />
              <a href="tel:862-368-2410" className="hover:text-gray-900">862-368-2410</a>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 font-serif">
              <MapPin className="w-5 h-5" />
              <span>66 Lakeside Ave, Stockholm, NJ 07460</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center font-serif text-sm text-gray-500">
            © 2024 Studio B. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudioBWebsite;