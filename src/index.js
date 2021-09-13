import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import './index.css'
const App = lazy(() => import('./App'))

ReactDOM.hydrate(
	<React.StrictMode>
		<Suspense fallback={<h1>Loading...</h1>}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
)
