//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import { Card } from 'react-bootstrap';
import style from '../Components/MyCard.module.css';

export function MyCard(props) {

  let matNome = (props.aluno.mat).replace(/[0-9]/g, "");

  return (
    <div >
      <Card className="cards-container d-flex justify-content-center m-2"
        text={"dark" === 'light' ? 'dark' : 'white'}
        bg={"dark"}
        key={"dark"}
        style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Text>
            Aluno: {props.aluno.nome}<br />
            Matéria: {(matNome).trim()}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}