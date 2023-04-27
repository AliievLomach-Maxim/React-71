// inline style
// const styled = { color: 'red', backgroundColor: 'black' }
// const Text = ({ children }) => {
// 	return <h5 style={styled}>{children}</h5>
// }

// vanilla css
// import './Text.css'

// const Text = ({ children }) => {
// 	return <h5 className='title-name'>{children}</h5>
// }

// module css
// import cssModule from './Text.module.css'

// const Text = ({ children, isOnline }) => {
// 	console.log('ccsModule :>> ', cssModule)
// 	return (
// 		<>
// 			{/* <h5 className={cssModule['title-name']}>{children}</h5>
// 			<h5 className={cssModule.titleName}>{children}</h5> */}
// 			<h5
// 				className={
// 					isOnline
// ? `${cssModule.titleName} ${cssModule.online}`
// 						: `${cssModule.titleName} ${cssModule.offline}`
// 				}
// 			>
// 				{children}
// 			</h5>
// 		</>
// 	)
// }

// clcx
// import cssModule from './Text.module.css'
// import clsx from 'clsx'

// const Text = ({ children, isOnline }) => {
// 	console.log('ccsModule :>> ', cssModule)
// 	return (
// 		<h5
// 			// className={clsx(
// 			// 	cssModule.titleName,
// 			// 	isOnline ? cssModule.online : cssModule.offline
// 			// )}
// 			className={clsx(cssModule.titleName, {
// 				[cssModule.online]: isOnline,
// 			})}
// 		>
// 			{children}
// 		</h5>
// 	)
// }

// css-in-JS
// import styled from 'styled-components'
// import { Header } from './Text.styled'

// const Text = ({ children, isOnline }) => {
// 	return <Header isOn={isOnline}>{children}</Header>
// }

//emotion
import styled from '@emotion/styled'

let SomeComp = styled.div({
	color: 'hotpink',
})

const Text = ({ children, isOnline }) => {
	return <SomeComp isOn={isOnline}>{children}</SomeComp>
}

export default Text
