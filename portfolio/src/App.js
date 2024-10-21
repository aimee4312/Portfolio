import Header from './components/Header.js';
import DockBar from './components/DockBar.js';
import AppIcon from './components/AppIcon.js';

function App() {
  return (
    <div>
      <Header />
      {/* <AppIcon 
        icon="/images/dock bar/finder.png"
        onClick={() => console.log('App 1 clicked')} 
      /> */}
      <DockBar />
    </div>
  );
}

export default App;
