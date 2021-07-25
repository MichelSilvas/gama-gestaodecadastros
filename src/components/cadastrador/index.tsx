import Produto from "../produto";

export interface CadastroType {
  title: string;
  onSave: (data: any) => void;
  onCancel: () => void;
  setFieldValue: (field: string, value: any) => void;
  cadastro: JSX.Element;
}

function Cadastrador(props: CadastroType) {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <div className="cadasto">{props.cadastro}</div>
    </div>
  );
}

export default Cadastrador;
