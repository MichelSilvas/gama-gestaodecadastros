export interface TipoCadastroType {
  cancel: () => void;
}

export interface PropriedadeType {
  nome: string;
  tipo: string;
  valor: string;
  placeHolder: string;
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
    <div>
      <h1 className="title">{props.title}</h1>
      <div className="cadasto">
        {props.campos?.map((propriedade, index) => {
          return (
            <input
              type={propriedade.tipo}
              placeholder={propriedade.placeHolder}
              onChange={(e) =>
                props.setFieldValue(propriedade.nome, e.target.value)
              }
            />
          );
        })}
      </div>
      <button onClick={props.submit}>Salvar</button>
      <button onClick={props.cancel}>Cancelar</button>
    </div>
  );
}

export default Cadastrador;
