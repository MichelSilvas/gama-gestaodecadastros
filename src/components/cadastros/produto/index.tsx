import { useEffect, useState } from "react";
import Cadastrador, { PropriedadeType, TipoCadastroType } from "../cadastrador";
import { DadosServices } from "./../../services/dados";

function validaNome(nome: string) {
  const tamanhoMinimo = 6;
  const valido = nome.length >= tamanhoMinimo;

  if (!valido) alert(`Nome deve ter ao menos ${tamanhoMinimo} caracteres.`);

  return valido;
}

function validaDescricao(descricao: string) {
  const tamanhoMinimo = 6;
  const valido = descricao.length > tamanhoMinimo;

  if (!valido) alert(`Nome deve ter ao menos ${tamanhoMinimo} caracteres.`);

  return valido;
}

function validaQuantidade(qtd: string) {
  const tamanhoMinimo = 1;
  const valido = parseInt(qtd) >= tamanhoMinimo;

  if (!valido) alert(`Pelo menos ${tamanhoMinimo} em quantidade.`);

  return valido;
}

function validaValor(qtd: string) {
  const tamanhoMinimo = 0.01;
  const valido = parseFloat(qtd) >= tamanhoMinimo;

  if (!valido) alert(`Pelo menos ${tamanhoMinimo} em quantidade.`);

  return valido;
}

const propriedades: PropriedadeType[] = [
  {
    nome: "nome",
    tipo: "text",
    valor: "",
    placeHolder: "Nome do Produto",
    ehValido: validaNome,
  },
  {
    nome: "descricao",
    tipo: "text",
    valor: "",
    placeHolder: "Descrição do Produto",
    ehValido: validaDescricao,
  },
  {
    nome: "quantidade",
    tipo: "number",
    valor: "",
    placeHolder: "01",
    ehValido: validaQuantidade,
  },
  {
    nome: "valor",
    tipo: "moeda",
    valor: "",
    placeHolder: "R$0,01",
    ehValido: validaValor,
  },
];

function Produto(props: TipoCadastroType) {
  const nomeLocalStorageProdutos = "produtos-michelsilvas";
  const [data, setData] = useState(propriedades);
  const [produtosCadastrados, setProdutosCadastrados] = useState(
    DadosServices.get(nomeLocalStorageProdutos)
  );

  useEffect(() => {
    DadosServices.set(nomeLocalStorageProdutos, produtosCadastrados);
    console.log(produtosCadastrados);
  }, [produtosCadastrados]);

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
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.ehValido(element.valor) === false) return;
    }

    produtosCadastrados.push({
      id: produtosCadastrados.length + 1,
      cadastro: data,
    });
    setProdutosCadastrados([...produtosCadastrados]);
    alert("Cadastro efetuado com sucesso!");
    props.fechaCadastro();
  }

  function cancel() {
    props.fechaCadastro();
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
