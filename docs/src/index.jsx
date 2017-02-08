import React from 'react'
import ReactDOM from 'react-dom'

// # SECTIONS
import ButtonSection from './sections/buttons'
import GridSection from './sections/grids'
import HeadingSection from './sections/headings'
import ListSection from './sections/lists'

const App = () => (
	<div className="docs-wrapper">
		<GridSection />
    <ButtonSection />
    <HeadingSection />
    <ListSection />
	</div>
)

ReactDOM.render(<App />, document.querySelector('#docs-root'))
