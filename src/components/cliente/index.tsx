import { useState } from "react";
import Cadastrador, {
  PropriedadeType,
  TipoCadastroType,
} from "./../cadastrador/";

const propriedades: PropriedadeType[] = [
  {
    nome: "nome",
    tipo: "text",
    valor: "",
    placeHolder: "Nome do cliente",
  },
  {
    nome: "email",
    tipo: "email",
    valor: "",
    placeHolder: "seuemail@seudominio.com",
  },
];

function Cliente(props: TipoCadastroType) {
  const [data, setData] = useState(propriedades);

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
    console.log(data);
  }

  function cancel() {
    setData(propriedades);
    props.cancel();
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
