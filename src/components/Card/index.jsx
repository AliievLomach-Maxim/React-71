import Text from '../Text'
import users from '../../data.json'

export const Card = () =>
	users.map((el) => {
		// if (el.id % 2 === 0)
		return (
			<div key={el.id} className='card' style={{ width: '18rem' }}>
				{/* {el.id % 2 === 0 && ( */}
				<img
					src='https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_1280.jpg'
					className='card-img-top'
					alt='...'
				/>
				{/* )} */}
				<div className='card-body'>
					{/*  */}
					<Text>{el.name}</Text>
					{/*  */}
					<p className='card-text'>{el.email}</p>
					<a href={el.website} className='btn btn-primary'>
						{el.website}
					</a>
				</div>
			</div>
		)
		// return 'qwerty'
	})
