import React, { PureComponent } from 'react'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
stylesLoader.add(require('./generic.styl'))
stylesLoader.add(require('./sample.styl'))

class Sample extends PureComponent {
	render() { return (
		<div className="generic__background">
			<h2 className="sample__heading">Sample</h2>
			<p className="sample__description">This is a sample component.</p>
		</div>
	)}
}

export default stylesLoader.render(Sample)
