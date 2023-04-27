import styled from 'styled-components'

export const Header = styled.h5`
	color: red;
	background-color: ${(props) => {
		return props.isOn ? 'green' : 'red'
	}};
	&:hover {
		background-color: yellow;
	}
`
