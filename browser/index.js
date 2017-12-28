import React from 'react';
import Footer from './components/presentation/footer';
import Header from './components/presentation/header';
import PrimaryCarousel from './components/presentation/carousel/primaryCarousel';
import SecondaryCarousel from './components/presentation/carousel/secondaryCarousel';
import Cards from './components/presentation/cards';
import Contact from './components/presentation/contact';
import About from './components/presentation/about';

class Page extends React.Component {

  render () {
    return (
      <main role='main'>
        <div className='main-content'>
          <Header />
          <PrimaryCarousel />
          <About />
          <Cards />
          <Contact />
          <Footer />
        </div>
      </main>
    )
  }

}


export default Page;
