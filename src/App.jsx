import Header from './components/Header/Header'
import Examples from './components/Examples'
import CoreConcepts from './components/CoreConcepts'

function App() {
  console.log('APP COMPONENT EXECUTING')

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App
