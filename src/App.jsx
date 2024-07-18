import { CORE_CONCEPTS } from './data.js'

import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TapButton from './components/TapButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton>Components</TapButton>
            <TapButton>JSX</TapButton>
            <TapButton>Props</TapButton>
            <TapButton>State</TapButton>
          </menu>
        </section>
      </main>
    </>
  )
}

export default App
