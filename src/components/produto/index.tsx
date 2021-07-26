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
    placeHolder: "Nome do Produto",
  },
  {
    nome: "descricao",
    tipo: "text",
    valor: "",
    placeHolder: "Descrição do Produto",
  },
  {
    nome: "quantidade",
    tipo: "number",
    valor: "",
    placeHolder: "01",
  },
  {
    nome: "valor",
    tipo: "double",
    valor: "",
    placeHolder: "R$0,01",
  },
];

function Produto(props: TipoCadastroType) {
  const [data, setData] = useState(propriedades);

  function onCancelProduto() {
    console.log("Cancelar cadastro do produto");
  }

  function setFieldValue(field: string, value: string) {
    let produtoAtualizado = data?.map((propriedade) => {
      if (propriedade.nome === field) {
        return { ...propriedade, valor: value };
      } else {
        return propriedade;
      }
    });
    console.log(produtoAtualizado);
    setData(produtoAtualizado);
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
        title="Cadastro de Produto"
        campos={data}
        onCancel={onCancelProduto}
        setFieldValue={setFieldValue}
        submit={submit}
        cancel={cancel}
      />
    </div>
  );
}

export default Produto;
