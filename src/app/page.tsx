'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState(0);
  
  const logos = [
    { 
      png: '/sst1.png',
      svg: '/sst1.svg',
      title: 'Logo Tasarım 1',
      description: 'Klasik ve zarif tasarım'
    },
    {
      png: '/sst2.png',
      svg: '/sst2.svg',
      title: 'Logo Tasarım 2',
      description: 'Güzelvadi Detay 1'
    },
    {
      png: '/sst3.png',
      svg: '/sst3.svg',
      title: 'Logo Tasarım 3',
      description: 'Güzelvadi Detay 2'
    },
    {
      png: '/sst4.png',
      svg: '/sst4.svg',
      title: 'Logo Tasarım 4',
      description: 'Kırmızı Siyah Alternatif'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Logo Tasarım Portfolyosu</h1>
          <p className="text-xl text-gray-300 mb-12">Şehit Servet Tomak Ortaokulu için Özel Logo Tasarımları</p>
        </motion.div>
      </section>

      {/* Logo Showcase */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all cursor-pointer"
              onClick={() => setSelectedLogo(index)}
            >
              <div className="relative h-64 mb-4">
                <Image
                  src={selectedLogo === index ? logo.svg : logo.png}
                  alt={`Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{logo.title}</h3>
              <p className="text-gray-400">{logo.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Hasan Özdemir</h2>
              <p className="text-gray-400 mb-2">Flutter | Dart Uygulama Geliştirme</p>
              <p className="text-gray-400">Turkey</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:develophasan@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    develophasan@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://black4rts.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    black4rts.com
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/black4rtsdotco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    @black4rtsdotco
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/ozdmrhassn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    @ozdmrhassn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Hasan Özdemir. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 