import { useState, useEffect } from 'react';
import { MyCard } from './Components/MyCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [errors, setErrors] = useState({ eAluno: "", eMat: "", temErro: false });
  const [form, setForm] = useState({ aluno: "", mat: "" });
  const [alunos, setAlunos] = useState([]);
  const [votos, setVotos] = useState({
    feiticos: 0,
    pocoes: 0,
    cmagicas: 0,
    adiv: 0
  })

  function validar(i) {

    let erro = {};

    if (!i.aluno) {
      erro.eAluno = "Favor informar seu nome";
      erro.temErro = true;
    } else if ((i.aluno).length < 3) {
      erro.eAluno = "Informe seu primeiro nome completo";
      erro.temErro = true;
    }
    if (!i.mat) {
      erro.eMat = "Informe sua matéria favorita";
      erro.temErro = true;
    } else if ((i.mat).length < 6) {
      erro.eMat = "Desculpe, não entendi qual é a matéria"
      erro.temErro = true;
    } else if (!/\d/.test(i.mat)) {
      erro.eMat = "Informe o número da matéria e o nome."
      erro.temErro = true;
    }
    setErrors(erro);

    if (!erro.temErro) { return true }

    return false
  }

  const votar = (e) => {
    e.preventDefault();

    // validar(form)
    //ret qntd de erros


    if (validar(form)) {
      //se array errors estiver vazio
      console.log("não tem erros");

      setAlunos([...alunos, {
        nome: form.aluno,
        mat: form.mat,
      }])

      let matN = (form.mat).replace(/[^0-9]/g, "");
      console.log(matN);
      switch (matN) {
        case '1':
          console.log("entrou no 1");
          setVotos({
            ...votos,
            feiticos: votos.feiticos + 1
          })
          break
        case '2':
          setVotos({
            ...votos,
            pocoes: votos.pocoes + 1
          })
          break
        case '3':
          setVotos({
            ...votos,
            cmagicas: votos.cmagicas + 1
          })
          break
        case '4':
          setVotos({
            ...votos,
            adiv: votos.adiv + 1
          })
          break
      }

      setForm({ aluno: "", mat: "" })

    } else {
      console.log("preencha");

    }

    console.log(Object.keys(errors).length);
    // retorna os erros
    console.log(errors);
  }

  return (
    <div className={style.App}>
      <h1>Taça das matérias favoritas</h1>
      <div>
        <ul>
          <li>
            <img src="./assets/1.png" />
            <p>| 1 - Feitiços |</p>
            <small>{votos.feiticos}</small>
          </li>
          <li>
            <img src="./assets/2.png" />
            <p>| 2 - Poções |</p>
            <small>{votos.pocoes}</small>
          </li>
          <li>
            <img src="./assets/3.png" />
            <p>| 3 - Criaturas Mágicas |</p>
            <small>{votos.cmagicas}</small>
          </li>
          <li>
            <img src="./assets/4.png" />
            <p>| 4 - Adivinhação |</p>
            <small>{votos.adiv}</small>
          </li>
        </ul>
      </div>
      <div className='formContainer'>
        <form
          onSubmit={votar}>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text"
              name="aluno"
              value={form.aluno}
              style={{ width: '18rem' }}
              onChange={(e) => {
                setForm({
                  ...form,
                  [e.target.name]: e.target.value
                })
              }} />
            {errors.eAluno && <Form.Text id="alunoError" muted className="error-input">{errors.eAluno}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="basicFormMat" >
            <Form.Label>Matéria: </Form.Label>
            <Form.Control type="text"
              name="mat"
              value={form.mat}
              style={{ width: '18rem' }}
              onChange={(e) => {
                setForm({
                  ...form,
                  [e.target.name]: e.target.value
                })
              }} />
            {errors.eMat && <Form.Text id="matError" muted className="error-input"> {errors.eMat} </Form.Text>}
          </Form.Group>


          <br /> <div>
            <Button variant="primary" type="submit">Votar</Button>
          </div>
        </form>
      </div>
      <div className="container d-flex justify-content-around p-2">
        {
          alunos.map((aluno, index) => {
            return (
              <MyCard aluno={aluno} key={index} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App