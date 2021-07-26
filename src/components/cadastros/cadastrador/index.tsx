export interface TipoCadastroType {
  fechaCadastro: () => void;
}

export interface PropriedadeType {
  nome: string;
  tipo: string;
  valor: string;
  placeHolder: string;
  ehValido: (valor: string) => boolean;
}

export interface CadastroType {
  title: string;
  campos: PropriedadeType[];
  onCancel: () => void;
  setFieldValue: (field: string, value: string) => void;
  submit: () => void;
  cancel: () => void;
}

function Cadastrador(props: CadastroType) {
  return (
    <div className="cadastrador">
      <h1 className="title">{props.title}</h1>
      <form className="cadasto">
        {props.campos?.map((propriedade, index) => {
          let tipoMoeda = propriedade.tipo === "moeda";
          return (
            <input
              key={index}
              type={tipoMoeda ? "number" : propriedade.tipo}
              step={tipoMoeda ? "0.01" : "any"}
              placeholder={propriedade.placeHolder}
              onChange={(e) =>
                props.setFieldValue(propriedade.nome, e.target.value)
              }
            />
          );
        })}
      </form>
      <div className="buttons">
        <button onClick={props.submit}>Salvar</button>
        <button onClick={props.cancel}>Cancelar</button>
      </div>
    </div>
  );
}

export default Cadastrador;
