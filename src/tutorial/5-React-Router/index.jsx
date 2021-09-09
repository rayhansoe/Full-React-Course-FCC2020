import React, { lazy, Suspense } from "react"
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom"

const BookList = lazy(() => import("../0-Basics/BookList"))
const UseStateArray = lazy(() => import("../1-useState/useStateTopics"))
const Main = lazy(() => import("../3-conditionalRender/conditionalRender"))
const UseReducerTopic = lazy(() => import("../4-useReducer/UseReducerTopic"))
const UseEffectFecthData = lazy(() => import("../2-useEffect/useEffectTopics"))

const Index = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/booklist' component={BookList} />
					<Route path='/usestate' component={UseStateArray} />
					<Route path='/useeffect' component={UseEffectFecthData} />
					<Route path='/conditionalrender' component={Main} />
					<Route path='/usereducer' component={UseReducerTopic} />
				</Switch>
			</Suspense>
		</Router>
	)
}

export default Index

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<nav>
				<ul className='item'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/booklist'>BookList</Link>
					</li>
					<li>
						<Link to='/usestate'>UseState Topic</Link>
					</li>
				</ul>
				<ul className='item'>
					<li>
						<Link to='/useeffect'>UseEffect Topic</Link>
					</li>
					<li>
						<Link to='/conditionalrender'>Conditional Render</Link>
					</li>
					<li>
						<Link to='/usereducer'>UseReducer Topic</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
