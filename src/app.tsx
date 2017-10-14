import React = require('react');
import ReactDOM= require('react-dom');

// Seems like this is the only way it is working
const creativeCSS = require('../content/css/creative.css');
const bootstrapCSS = require('../content/vendor/bootstrap/css/bootstrap.css');

import { NavigationBar } from "./components/NavigationBar";

// Rendering the navigation bar and header together
let componentstoRender = (
	<div>
		<NavigationBar name="navbar" />
	</div>
);

ReactDOM.render(
    componentstoRender,
    document.getElementById("root")
);