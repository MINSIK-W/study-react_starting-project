import { useState } from 'react'

import { CORE_CONCEPTS, EXAMPLES } from './data.js'

import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TapButton from './components/TapButton'

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', Props, State
    setSelectedTopic(selectedButton)
    console.log(setSelectedTopic)
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
            <TapButton onSelect={() => handleSelect('components')}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelect('jsx')}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect('props')}>Props</TapButton>
            <TapButton onSelect={() => handleSelect('state')}>State</TapButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default App
