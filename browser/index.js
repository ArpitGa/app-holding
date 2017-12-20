import React from 'react';
import Footer from './components/presentation/footer';
import Header from './components/presentation/header';
import PrimaryCarousel from './components/presentation/carousel/primaryCarousel';
import SecondaryCarousel from './components/presentation/carousel/secondaryCarousel';
import Cards from './components/presentation/cards';

class Page extends React.Component {

  render () {
    return (
      <main role='main'>
        <div className='main-content'>
          <Header />
          <PrimaryCarousel />
          <Cards />
          <Footer />
        </div>
      </main>
    )
  }

}


export default Page;
