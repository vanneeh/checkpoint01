//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import { Card } from 'react-bootstrap';
import style from '../Components/MyCard.module.css';

export function MyCard(props) {
  return (
    <div >
    <Card className="cards-container"
      text={"dark" === 'light' ? 'dark' : 'white'}
      bg={"dark"}
      key={"dark"}
      style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
          Aluno: {props.aluno.nome}<br/>
          Matéria: {props.aluno.mat}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}