import React, { PureComponent } from 'react'
import { Link } from 'react-router'

// Components
import Sample from 'components/sample'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
stylesLoader.add(require('./home.styl'))

class Home extends PureComponent {
	render() { return (
		<div>
			<h1>Hello World</h1>
			<Link to="/about" title="Go to About">About</Link>
			<p className="test">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
			</p>

			<Sample />
		</div>
	)}
}

export default stylesLoader.render(Home)
