import { useEffect, useState } from "react";
import { DadosServices } from "../../services/dados";
import Cadastrador, { PropriedadeType, TipoCadastroType } from "../cadastrador";

function validaEmail(email: string) {
  const emailValido =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const valido = emailValido.test(email);
  if (!valido) alert("Email inválido");
  return valido;
}

function validaNome(nome: string) {
  const tamanhoMinimo = 6;
  const valido = nome.length >= tamanhoMinimo;

  if (!valido) alert(`Nome deve ter ao menos ${tamanhoMinimo} caracteres.`);

  return valido;
}

const propriedades: PropriedadeType[] = [
  {
    nome: "nome",
    tipo: "text",
    valor: "",
    placeHolder: "Nome do cliente",
    ehValido: validaNome,
  },
  {
    nome: "email",
    tipo: "email",
    valor: "",
    placeHolder: "seuemail@seudominio.com",
    ehValido: validaEmail,
  },
];

function Cliente(props: TipoCadastroType) {
  const nomeLocalStorageClientes = "clientes-michelsilvas";
  const [data, setData] = useState(propriedades);
  const [clientesCadastrados, setClientesCadastrados] = useState(
    DadosServices.get(nomeLocalStorageClientes)
  );

  useEffect(() => {
    DadosServices.set(nomeLocalStorageClientes, clientesCadastrados);
    console.log(clientesCadastrados);
  }, [clientesCadastrados]);

  function setFieldValue(field: string, value: string) {
    let clienteAtualizado = data?.map((propriedade) => {
      if (propriedade.nome === field) {
        return { ...propriedade, valor: value };
      } else {
        return propriedade;
      }
    });
    console.log(clienteAtualizado);
    setData(clienteAtualizado);
  }

  function submit() {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.ehValido(element.valor) === false) return;
    }

    clientesCadastrados.push({
      id: clientesCadastrados.length + 1,
      cadastro: data,
    });
    setClientesCadastrados([...clientesCadastrados]);
    alert("Cadastro efetuado com sucesso!");
    props.fechaCadastro();
  }

  function cancel() {
    props.fechaCadastro();
  }

  return (
    <div>
      <Cadastrador
        title="Cadastro de Cliente"
        campos={data}
        onCancel={cancel}
        setFieldValue={setFieldValue}
        submit={submit}
        cancel={cancel}
      />
    </div>
  );
}

export default Cliente;
