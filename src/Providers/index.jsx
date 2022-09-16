import { TransportadorasProvider } from "./Transportadoras";
import { ProdutosProvider } from "./Produtos";
import { PedidosProvider } from "./Pedidos";
import { ItensProvider } from "./Itens";
import { FornecedoresProvider } from "./Fornecedores";
import { BodyProvider } from "./Body";

const Providers = ({ children }) => {
  return (
    <TransportadorasProvider>
      <ProdutosProvider>
        <PedidosProvider>
          <FornecedoresProvider>
            <ItensProvider>
              <BodyProvider>{children}</BodyProvider>
            </ItensProvider>
          </FornecedoresProvider>
        </PedidosProvider>
      </ProdutosProvider>
    </TransportadorasProvider>
  );
};

export default Providers;
