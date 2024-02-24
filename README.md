<h2>Sistema de Estoque</h2>

<p>Aplicação em javascript que permite o gerenciamento de produtos em um inventário de uma loja fictícia.</p>

<h3>Requisitos do Sistema:</h3>
1. Criar um objeto chamado “Estoque” que será usado para armazenar informações sobre os produtos em estoque. O objeto “Estoque” deve conter os seguintes atributos:
  a. “produtos”: Um conjunto (Set) para evitar produtos duplicados;
  b. “adicionarProduto()”: Uma função que permite adicionar um novo produto ao estoque. Esta função deve aceitar como argumento um objeto que representa um produto (com nome, preço, quantidade em estoque e
descrição). Verifique se o produto já existe no estoque antes de adicioná-lo;
2. Implementar as seguintes funções para manipular o estoque:
  a. “listarProdutos()”: uma função que lista todos os produtos atualmente disponíveis no estoque.
  b. “buscarProduto(nome)”: uma função que permite buscar um produto pelo nome e exibir suas informações.
  c. “atualizarProduto(nome, novoPreco, novaQuantidade)”: uma função que permite atualizar as informações de um produto (preço e quantidade).
  d. “calcularValorTotal()”: uma função que calcula o valor total do estoque, somando o preço de todos os produtos em estoque.
3. Implementar tratamento de erros para situações como:
  a. Tentativa de adicionar um produto com um nome que já existe no estoque.
  b. Tentativa de buscar um produto que não existe no estoque.
  c. Entradas inválidas do usuário (por exemplo, preço negativo).
