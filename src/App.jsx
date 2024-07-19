import { CORE_CONCEPTS } from './data.js'

import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TapButton from './components/TapButton'

function App() {
  let tabContent = 'Please click a button'

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', Props, State
    tabContent = selectedButton
    console.log(tabContent)
  }

  console.log('APP COMPONENT EXECUTING')

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
            <TapButton onSelect={() => handleSelect('Components')}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelect('JSX')}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect('Props')}>Props</TapButton>
            <TapButton onSelect={() => handleSelect('State')}>State</TapButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  )
}

export default App
