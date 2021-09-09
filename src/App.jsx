import React, { lazy, Suspense } from "react"

const Index = lazy(() => import("./tutorial/5-React-Router/index"))

const App = () => {
	return (
		<div className='container'>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Index />
			</Suspense>
		</div>
	)
}

export default App
