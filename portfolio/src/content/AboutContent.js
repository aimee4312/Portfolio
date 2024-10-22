import Header from '../components/Header';
import '../styles/content.css'
function AboutContent() {
    return (

      <div className='container'>
        <Header/>
        <div className='aboutme'>
          <div className='left'>
            Aimee Mai
          </div>
          <div className='divider'></div>
          <div className='right'>
            <img src="/images/me.png" className="me"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutContent;