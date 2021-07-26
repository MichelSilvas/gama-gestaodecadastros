
# Gama **Gestão de Cadastros**

    Componentes:

Tentei fazer 'reuso' do componente responsável por montar os forms. (*cadastrador\index.tsx*)

De forma que para inclusão de novo cadastro é apenas preciso definir o tipo.

Poderia abstrair mais ainda. Ao ponto de um component só receber os tipos de input à criar, Title, e nome no storage, como fiz em um projeto pessoal.

    Storage:
Deixei o storage separado. Ao ponto que se no futuro for criada uma API, tornaria mais fácil essa adaptação.
