import React from 'react'

import MixinES from './mixin.es'
import MixinFR from './mixin.fr'

// EcmaScript 6 no soporta mixin de manera nativa
// por ello utilizaremos EcmaScript 5
const Hello = React.createClass({
	mixins: [MixinES, MixinFR],

	componentDidMount: function(){
		console.log('Hello World!')
	},

	render: function() {
		return <span>Mixin!</span>
	}
})

export default Hello