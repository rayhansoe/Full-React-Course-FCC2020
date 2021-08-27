import React, { useState, useEffect, useRef } from "react"

export const UseEffectBasic = () => {
	const [count, setCount] = useState(() => 0)

	const renderTimes = useRef(0)

	const increaseRenderTime = () => (renderTimes.current += 1)

	const increment = () => setCount(prevCount => count + 1)

	const decrement = () => setCount(prevCount => count - 1)

	const resetCount = () => setCount(prevCount => count - count)

	// effect for increased rendered times
	useEffect(() => {
		increaseRenderTime()
	}, [count])

	// effect for negative value
	useEffect(() => {
		const reminderNegativeValue = () =>
			setTimeout(() => {
				count < 0 &&
					alert(
						`Your Number is  ( ${count} )
and that is a Negative Number.
reset your number or increase ${Math.abs(count)} times
so that your number becomes absolute.`
					)
			}, 500)
		reminderNegativeValue()
	}, [count, renderTimes])

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>UseEffect Basics</h2>
				<h3>this page is rendered {renderTimes.current} times.</h3>
				<h1>{count}</h1>

				<button className='btn' onClick={decrement}>
					Decrease
				</button>
				<button className='btn' onClick={resetCount}>
					Reset
				</button>
				<button className='btn' onClick={increment}>
					Increase
				</button>
			</section>
		</>
	)
}
