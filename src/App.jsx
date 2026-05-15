import VisionBoard from './VisionBoard'
import { About } from './components/About'
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Education } from './components/Education'
import { Interests } from './components/Interests'
import { MusicPlayer } from './components/MusicPlayer'
import { NowPlaying } from './components/NowPlaying'
import { Quotes } from './components/Quotes'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Projects } from './components/Projects'

function App() {
  return <>
    <Cursor/>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Projects/>
    <Interests/>
    {/* <VisionBoard/> */}
    <MusicPlayer/>
    <NowPlaying/>
    <Quotes/>
    <Contact/>
  </>
}

export default App
