import { useState } from 'react'

import Section from './Section'
import TapButton from './TapButton'
import Tabs from './Tabs'

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
      <Tabs
        buttons={
          <>
            <TapButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TapButton>
            <TapButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TapButton>
            <TapButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TapButton>
            <TapButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TapButton>
          </>
        }
      >
        {topContent}
      </Tabs>
    </Section>
  )
}
