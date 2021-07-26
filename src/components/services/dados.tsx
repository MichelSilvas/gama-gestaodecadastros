import { PropriedadeType } from "../cadastros/cadastrador";

export interface DadosType {
  id: number;
  cadastro: PropriedadeType[];
}

export const DadosServices = {
  get,
  set,
};

function get(nome: string): DadosType[] {
  return JSON.parse(localStorage.getItem("nome") || "[]") as DadosType[];
}

async function set(nome: string, body: DadosType[]) {
  localStorage.setItem("nome", JSON.stringify(body));
}
