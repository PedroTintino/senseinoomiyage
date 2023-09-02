import './App.css'
import LessonBox from './LessonBox'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {

  return (
    <>
     <Navbar/>
    <div className='App'>
      <img className='senseiPic' alt='a sensei picture' src='src\assets\sensei.jpg'></img>
      <p> <strong>世界で最高の先生に短い敬意を表します!</strong></p>
      <LessonBox />
      </div>
      <Footer />
      </>
  )
}

export default App
