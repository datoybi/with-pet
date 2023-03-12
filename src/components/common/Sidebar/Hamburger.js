import styled from 'styled-components';

const Button = styled.button`
  display: ${({ opened }) => (opened ? 'none' : 'block')};
  background-color: rgba(0, 0, 0, 0);
  width: 40px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 3px 0;

  & span {
    display: block;
    background-color: #fff;
    width: 100%;
    height: 4px;
    margin: 5px 0;
    border-radius: 10px;
  }
`;

function Hamburger({ opened, ...props }) {
  return (
    <Button type="button" {...props} opened={opened}>
      <span />
      <span />
      <span />
    </Button>
  );
}

export default Hamburger;
