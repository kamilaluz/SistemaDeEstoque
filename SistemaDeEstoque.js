// Trabalho 01 - Sistema de Estoque
// Crie uma aplicação em javascript que permita o gerenciamento de produtos em um inventário de uma loja fictícia.

class Estoque {
    produtos

    constructor(){
        this.produtos = new Set([]);        
    }

    adicionarProduto(produto) {
        try {
            for (let item of this.produtos) {
                if (item.nome === produto.nome) {
                    throw new Error(`[!] Produto ${produto.nome} já existe no estoque.`);
                }
            }
            this.produtos.add(produto);
            console.log(`Produto ${produto.nome} adicionado ao estoque`);
        } catch(error){
            console.error(`[!] Erro ao adicionar produto: ${produto.nome} já existe no estoque.`);
        }
    };

    listarProdutos() {   
        this.produtos.forEach((produto) => {
            console.log(`Nome: ${produto.nome} | Preço: ${produto.preco} | Quantidade: ${produto.quantidade} | Descrição: ${produto.descricao}.`);
        });
    };

    buscarProduto(nome) {    
        try {
            const produto = Array.from(this.produtos).find((p) => p.nome === nome);
            if (produto) {            
                console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}, Descrição: ${produto.descricao}`);
            } else {
                throw new Error(`Produto ${nome} não está cadastrado no estoque!`);                
            }       
        } catch (error) {
            console.error(`[!] Erro ao buscar informações do produto: ${nome} não está cadastrado no estoque!`);
        }
    }     

    atualizarProduto (nome, novoPreco, novaQuantidade){
        try {
            for (let produto of this.produtos) {
                if (produto.nome === nome) {
                    if (novoPreco < 0 || novaQuantidade < 0) {
                        throw new Error(`O valor inserido não pode ser negativo!`);
                    }
                    produto.preco = novoPreco;
                    produto.quantidade = novaQuantidade;
                    console.log(`Informações do produto ${nome} atualizadas`);
                    return;
                }
            }
            throw new Error(`Produto ${nome} não encontrado no estoque.`);
        } catch (error) {
            console.error(`[!] Erro ao atualizar produto: ${error.message}`);
        }
    };

    calcularValorTotal (){        
        let valorTotal = 0;
        for (let produto of this.produtos) {
            valorTotal += produto.preco * produto.quantidade;
        }
        let valorReal = valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return console.log(valorReal);
    }
};

let estoque = new Estoque();

//Adicionando produtos no estoque:
let produto1 = {
    "nome": "Perfume 212 Heroes",
    "preco": 549.25,
    "quantidade": 35,
    "descricao": "Feminino. Marca: Carolina Herrera. 50ml"
}
let produto2 = {
    "nome": "Batom Matte MAC",
    "preco": 129.79,
    "quantidade": 150,
    "descricao": "Marca MAC. Cor Ruby Woo"
}
let produto3 = {
    "nome": "Ativador de cachos",
    "preco": 346.50,
    "quantidade": 50,
    "descricao": "Marca: Keune. 200ml"
}
let produto4 = {
    "nome": "Protetor solar facial",
    "preco": 94.90,
    "quantidade": 250,
    "descricao": "Marca NeoStrata. Oil Control. 40g"
}
let produto5 = {
    "nome": "Loção hidratante",
    "preco": 109.90,
    "quantidade": 500,
    "descricao": "Marca CeraVe. Rosto e Corpo. 473ml"
}

//Adicionando produtos no estoque
console.log("**************** ADICIONANDO PRODUTOS NO ESTOQUE ****************")
estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);
estoque.adicionarProduto(produto3);
estoque.adicionarProduto(produto4);
estoque.adicionarProduto(produto5);

//Tentando adicionar produto já cadastrado no estoque
estoque.adicionarProduto(produto5);

//Listando todos os produtos cadastrados no estoque
console.log("")
console.log("*************** PRODUTOS CADASTRADOS NO ESTOQUE ***************")
estoque.listarProdutos();

//Buscando um produto existente:
console.log("")
console.log("*************** INFORMAÇÕES DE UM PRODUTO ***************")
estoque.buscarProduto("Protetor solar facial");

//Buscando um produto inexistente:
estoque.buscarProduto("Protetor solar corporal");

//Atualizar o valor de um produto no estoque:
console.log("")
console.log("**************** ATUALIZANDO UM ITEM ****************")
estoque.atualizarProduto("Batom Matte MAC",135,300);
estoque.buscarProduto("Batom Matte MAC");

//Tentar inserir um valor negativo em um produto no estoque:
estoque.atualizarProduto("Batom Matte MAC",-135,300);

//Tentar inserir uma quantidade negativa em um produto no estoque:
estoque.atualizarProduto("Batom Matte MAC",135,-10);


//Calcular valor total do estoque:
console.log("")
console.log("*************** VALOR TOTAL EM ESTOQUE ***************")
estoque.calcularValorTotal();