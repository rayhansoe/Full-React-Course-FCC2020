import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import BookList from "../0-Basics/BookList"
import { UseStateArray } from "../1-useState/useStateTopics"
import { UseEffectFecthData } from "../2-useEffect/useEffectTopics"
import { Main } from "../3-conditionalRender/conditionalRender"
import UseReducerTopic from "../4-useReducer/UseReducerTopic"

const Index = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/booklist'>
					<BookList />
				</Route>
				<Route path='/usestate'>
					<UseStateArray />
				</Route>
				<Route path='/useeffect'>
					<UseEffectFecthData />
				</Route>
				<Route path='/conditionalrender'>
					<Main />
				</Route>
				<Route path='/usereducer'>
					<UseReducerTopic />
				</Route>
			</Switch>
		</Router>
	)
}

export default Index

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/booklist'>BookList</Link>
					</li>
					<li>
						<Link to='/usestate'>UseState Topic</Link>
					</li>
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
