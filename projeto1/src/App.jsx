import './App.css'
import Header from './components/header'
import MainArticle from './components/mainArticle'
import NewContainer from './components/newContainer'

function App() {
 

  return (
    <main className='px-4 pt-6'>
      <Header/>
      <div className='sm:flex sm:gap-8'>
      <MainArticle/>
      <NewContainer/>
      </div>
    </main>
  )
}

export default App
