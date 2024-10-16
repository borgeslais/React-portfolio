import styled from 'styled-components'

type ButtonProps = {
  principal: boolean
  fontSize?: string
}

const NewButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const ButtonDanger = styled(NewButton)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <NewButton principal>Chat</NewButton>
      <NewButton fontSize="18px" principal>
        Enviar
      </NewButton>
      <NewButton fontSize="14px" principal={false}>
        Cancelar
      </NewButton>
      <ButtonDanger as="a" principal>
        <span>Cuidado</span>
      </ButtonDanger>
    </>
  )
}

export default Teste
