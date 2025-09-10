// pages/index.js
import Head from 'next/head';
import Header from '@/components/landing-page/Header';
import Hero from '@/components/landing-page/Hero';
import Projects from '@/components/landing-page/Projects';
import Footer from '@/components/landing-page/Footer';
import { projectsData } from '../../../data/projectsData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#020c25] text-white">
      <Head>
        <title>Progress Harian Belajar GSAP</title>
        <meta name="description" content="Dokumentasi progress harian belajar GSAP" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Header />
      <Hero />
      <Projects projects={projectsData} />
      <Footer />
    </div>
  );
}