import React from 'react';
import Footer from './components/presentation/footer';
import Header from './components/presentation/header';

class Page extends React.Component {

  render () {
    return (
      <main role='main'>
        <div className='main-content'>
          <Header />
          <Footer />
        </div>
      </main>
    )
  }

}


export default Page;
