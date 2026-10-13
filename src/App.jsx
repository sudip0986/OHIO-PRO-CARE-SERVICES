import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="shell">
      <header>
        <TopBar />
        <Navbar onOpenModal={handleOpenModal} />
      </header>

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Services onOpenModal={handleOpenModal} />
        <Process />
        <Gallery onOpenModal={handleOpenModal} />
        <Contact />
      </main>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={selectedService}
      />
    </div>
  );
}
