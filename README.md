<h2>Sistema de Estoque</h2>

<p>Aplicação em javascript que permite o gerenciamento de produtos em um inventário de uma loja fictícia.</p>

<h3>Requisitos do Sistema:</h3>

<p>1. Criar um objeto chamado “Estoque” que será usado para armazenar informações sobre os produtos em estoque. O objeto “Estoque” deve conter os seguintes atributos:</p>
  <p>a. “produtos”: Um conjunto (Set) para evitar produtos duplicados;</p>
  <p>b. “adicionarProduto()”: Uma função que permite adicionar um novo produto ao estoque. Esta função deve aceitar como argumento um objeto que representa um produto (com nome, preço, quantidade em estoque e
descrição). Verifique se o produto já existe no estoque antes de adicioná-lo;</p>
<p>2. Implementar as seguintes funções para manipular o estoque:</p>
  <p>a. “listarProdutos()”: uma função que lista todos os produtos atualmente disponíveis no estoque.</p>
  <p>b. “buscarProduto(nome)”: uma função que permite buscar um produto pelo nome e exibir suas informações.</p>
  <p>c. “atualizarProduto(nome, novoPreco, novaQuantidade)”: uma função que permite atualizar as informações de um produto (preço e quantidade).</p>
  <p>d. “calcularValorTotal()”: uma função que calcula o valor total do estoque, somando o preço de todos os produtos em estoque.</p>
<p>3. Implementar tratamento de erros para situações como:</p>
 <p> a. Tentativa de adicionar um produto com um nome que já existe no estoque.</p>
  <p>b. Tentativa de buscar um produto que não existe no estoque.</p>
  <p>c. Entradas inválidas do usuário (por exemplo, preço negativo).</p>
