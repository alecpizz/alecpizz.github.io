import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/sidebar';
import { Portfolio } from './components/Portfolio';
import { UpdatePanel } from './components/UpdatePanel';
//https://www.keshikan.net/fonts-e.html
//https://web.badges.world/


function App() {

  return (
    <>
      <div className='container'>
        <header>
          <div className='header'>
            <h1>Alec Pizziferro's Website</h1>
          </div>
        </header>
        <div className='inner-container'>
          <Sidebar />
          <div className='body-container'>
            <div className='background-image'>
            </div>
            <h2>Things I've Made</h2>
            <Portfolio></Portfolio>
            <div className='body-flex'>
              <UpdatePanel title={"Site Changelog"}>
                <p>8/5/2024 - Initial Deployment</p>
              </UpdatePanel>
              <UpdatePanel title={"About this Site"}>
                <p>After staring at dozens of portfolio sites for hours I realized something: Modern web design is not for me. For this site I opted to have a early 2000s aesthetic, which feels much more comfortable to me.</p>
                <p>This site was built with React. It uses fetch requests to gather simple data for the guestbook, but other than that is pure HTML/CSS. Some components were used to just to make organization of the page easier.</p>
                <p>The guestbook is driven by a Google spreadsheet and form, sneakily embedded using free APIs. The visitor counter is another free API by Jason Cameron.</p>
                <p>Next up for this site will be adding responsiveness to everything, adding various effects & styling that you'd only see on a site from the 2000s, and adding some more hidden things for people to find. You can already click on the blue labels to hide content for starters. I also plan on reducing the amount of scrolling needed, but I wanted to get this site up and running sooner rather than later.</p>
              </UpdatePanel>
            </div>
          </div>
        </div>
      </div>
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
    </>
  );
}

export default App;
