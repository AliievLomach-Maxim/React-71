import React from 'react'
import ReactDOM from 'react-dom/client'
import users from './data.json'
import Text from './Text'
// import './index.css'

// const div1 = document.createElement('div')
// div1.id = 123
// div1.className = 'qwerty'

// console.log('div1 :>> ', div1)
// const root = document.getElementById('root')
// root.append(div)

// const p = React.createElement('p', { id: 'text', children: 'Text content' })
// const p2 = React.createElement('p', { id: 'text2', children: 'Text content' })

// const p = (
// 	<p id='text3' className='qwerty' data-item='qwerty'>
// 		Text content
// 	</p>
// )

// const result = users.filter((el) => {
// 	return (
// 		<>
// 			<p>{el.name}</p>
// 			<p>age:{el.age}</p>
// 		</>
// 	)
// })

// const name = 'Alex'

// const div = (
// 	<div id='123' className='qwerty'>
// 		<p id='text3' className='qwerty' data-item='qwerty'>
// count: {2+12}

// 		</p>
// 	</div>
// )

// const div = React.createElement('div', {
// 	id: '123',
// 	className: 'qwerty',
// 	children: [p, p2],
// })

// console.log('div :>> ', div)

const Card = () =>
	users.map((el) => {
		return (
			<div key={el.id} className='card' style={{ width: '18rem' }}>
				<img
					src='https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_1280.jpg'
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					{/* {Text({ name: el.name })} */}
					<Text name={el.age} email={el.email} />
					<p className='card-text'>{el.email}</p>
					<a href={el.website} className='btn btn-primary'>
						{el.website}
					</a>
				</div>
			</div>
		)
	})

ReactDOM.createRoot(document.getElementById('root')).render(<Card />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)
