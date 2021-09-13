import { Col, Row, Typography, Card } from 'antd'
import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

const BookList = lazy(() => import('../0-Basics/BookList'))
const NotFound = lazy(() => import('../NotFound'))
const UseStateArray = lazy(() => import('../1-useState/useStateTopics'))
const Main = lazy(() => import('../3-conditionalRender/conditionalRender'))
const UseReducerTopic = lazy(() => import('../4-useReducer/UseReducerTopic'))
const UseEffectFecthData = lazy(() => import('../2-useEffect/useEffectTopics'))

const { Title } = Typography

const Index = () => {
	return (
		<Router basename={`${process.env.PUBLIC_URL}/`}>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route path='/booklist' component={BookList} />
					<Route path='/usestate' component={UseStateArray} />
					<Route path='/useeffect' component={UseEffectFecthData} />
					<Route path='/conditionalrender' component={Main} />
					<Route path='/usereducer' component={UseReducerTopic} />
					<Route exact path={'/'} component={Home} />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
		</Router>
	)
}

export default Index

const Home = () => {
	return (
		<div>
			<Title>Home</Title>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<Card
						title={
							<Link to='/booklist'>
								<Title level={3}>BookList</Title>
							</Link>
						}
						bordered={false}>
						<Link to='/booklist'>BookList</Link>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						title={
							<Link to='/usestate'>
								<Title level={3}>UseState Topic</Title>
							</Link>
						}
						bordered={false}>
						<Link to='/usestate'>UseState Topic</Link>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						title={
							<Link to='/useeffect'>
								<Title level={3}>UseEffect Topic</Title>
							</Link>
						}
						bordered={false}>
						<Link to='/useeffect'>UseEffect Topic</Link>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						title={
							<Link to='/conditionalrender'>
								<Title level={3}>Conditional Render</Title>
							</Link>
						}
						bordered={false}>
						<Link to='/conditionalrender'>Conditional Render</Link>
					</Card>
				</Col>
				<Col span={24}>
					<Card
						title={
							<Link to='/usereducer'>
								<Title level={3}>UseReducer Topic</Title>
							</Link>
						}
						bordered={false}>
						<Link to='/usereducer'>UseReducer Topic</Link>
					</Card>
				</Col>
			</Row>
		</div>
	)
}
