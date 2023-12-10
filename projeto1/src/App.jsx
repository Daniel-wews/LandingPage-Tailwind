import './App.css'
import ArticleContainer from './components/articlesContainer'
import Header from './components/header'
import MainArticle from './components/mainArticle'
import NewContainer from './components/newContainer'

function App() {
 

  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20">
      <Header/>
      <div className='lg:flex lg:gap-8 md:mb-10"'>
      <MainArticle/>
      <NewContainer/>
      </div>
      <ArticleContainer/>
    </main>
  )
}

export default App
