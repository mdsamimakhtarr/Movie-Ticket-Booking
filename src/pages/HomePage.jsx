import React from 'react'
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import CourselSection from '../components/CourselSection';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CourselSection />
      <Section />
      <Footer/>
    </div>
  );
}

export default HomePage
