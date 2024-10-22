import Header from './Header';
import '../styles/content.css'
function AboutContent() {
  return (

    <div className='container'>
      <Header />
      <div className='aboutme'>
        <div className='left'>
          <div className="info-item">
            <strong>Aimee Mai.png</strong>
          </div>
          <hr />
          <div className="info-item">
            <span>Software engineer | 23 </span>
          </div>
          <hr />
          <div className="info-item">
            <strong>Information</strong>
          </div>
          <hr />
          <div className="info-item">
            Education:
            <span>BS in Computer Science at Cal Poly SLO</span>
          </div>
          <hr />
          <div className="info-item">
            Skills:
            <span>C/C++, Python, React, Node.js</span>
          </div>
          <hr />
          <div className="info-item">
            Interests:
            <span>Photography, Travel, Sudoku</span>
          </div>
          <hr />
          <div className="info-item">
            <strong>About:</strong>
            <span>A passionate software engineer with a degree in Computer Science from Cal Poly SLO, I thrive on solving complex problems and adapting to new technologies. My journey in software development has allowed me to explore various programming languages, including C/C++, Python, and JavaScript frameworks like React and Node.js.

            I’m always eager to learn and grow, whether it’s through professional development or personal interests. I find inspiration in travel, which fuels my curiosity and allows me to connect with diverse cultures and perspectives. Photography and Sudoku are my favorite ways to unwind and challenge my creativity.</span>
          </div>
        </div>

        <div className='divider'></div>
        <div className='right'>
          <img src="/images/me.png" className="me" />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;