import Section from './Section'
import TapButton from './TapButton'
import { useState } from 'react'
import { EXAMPLES } from '../data'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', Props, State
    setSelectedTopic(selectedButton)
    console.log(setSelectedTopic)
  }

  let topContent = <p>Please select a topic.</p>
  if (selectedTopic) {
    topContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TapButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TapButton>
        <TapButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TapButton>
        <TapButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TapButton>
        <TapButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TapButton>
      </menu>
      {topContent}
    </Section>
  )
}
