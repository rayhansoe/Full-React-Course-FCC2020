import { Layout } from 'antd'
import React, { lazy, Suspense } from 'react'

const Index = lazy(() => import('./tutorial/5-React-Router/index'))

const App = () => {
	return (
		<Layout>
			<div className='container'>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Index />
				</Suspense>
			</div>
		</Layout>
	)
}

export default App
