/**
 * Analisa os pedidos de um mês e devolve métricas de desempenho.
 * @param {Array<Object>} pedidos
 * @returns {{
 *   totalPedidos: number,
 *   totalItensVendidos: number,
 *   faturamentoTotal: number,
 *   ticketMedio: number,
 *   produtoMaisVendido: string|null
 * }}
 */
function analisarPedidos(pedidos) {
    const totalPedidos = pedidos.length;

    let totalItensVendidos = 0;
    let faturamentoTotal = 0;
    const contagemPorProduto = {};

    for (const pedido of pedidos) {
        for (const item of pedido.itens) {
            totalItensVendidos += item.quantidade;
            faturamentoTotal += item.preco * item.quantidade;

            contagemPorProduto[item.produto] =
                (contagemPorProduto[item.produto] || 0) + item.quantidade;
        }
    }

    // Encontra o produto com maior quantidade vendida
    const produtoMaisVendido = Object.entries(contagemPorProduto)
        .sort(([, qtdA], [, qtdB]) => qtdB - qtdA)[0]?.[0] || null;

    const ticketMedio = Number((faturamentoTotal / totalPedidos).toFixed(2));

    return {
        totalPedidos,
        totalItensVendidos,
        faturamentoTotal,
        ticketMedio,
        produtoMaisVendido
    };
}

const pedidos = [
    {
        id: "A001",
        cliente: "João",
        itens: [
            { produto: "Camisa", preco: 50, quantidade: 2 },
            { produto: "Boné", preco: 30, quantidade: 1 }
        ]
    },
    {
        id: "A002",
        cliente: "Maria",
        itens: [
            { produto: "Camisa", preco: 50, quantidade: 1 },
            { produto: "Calça", preco: 120, quantidade: 1 }
        ]
    }
];

console.log(analisarPedidos(pedidos));
// Saída esperada:
// {
//   totalPedidos: 2,
//   totalItensVendidos: 5,
//   faturamentoTotal: 300,
//   ticketMedio: 150.00,
//   produtoMaisVendido: "Camisa"
// }