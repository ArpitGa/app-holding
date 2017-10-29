import React from 'react';
import Footer from './components/presentation/footer';

class Page extends React.Component {

  render () {
    return (
      <main role='main'>
        <div className='main-content'>
          <Footer />
        </div>
      </main>
    )
  }

}


export default Page;
