import styled from 'styled-components';

const Button = styled.p`
  display: ${props => (props.hide ? 'none' : 'inline-block')};
  color: #ed1c24;
  font-weight: bold;
`;

export default Button;
