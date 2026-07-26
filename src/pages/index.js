import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Galleries from '@/components/sections/Galleries';
import Pricing from '@/components/sections/Pricing';
import BookingCalendar from '@/components/sections/BookingCalendar';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Or Paull Photography - Newborn & Family Photography</title>
        <meta name="description" content="Professional newborn, maternity, and family photography sessions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Or Paull Photography" />
        <meta property="og:description" content="Beautiful newborn & family photography" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <Navigation />

      <main>
        <Hero />
        <Galleries />
        <Pricing />
        <BookingCalendar />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
