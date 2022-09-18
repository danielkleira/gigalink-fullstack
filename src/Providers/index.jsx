import { TransportadorasProvider } from "./Transportadoras";
import { ProdutosProvider } from "./Produtos";
import { PedidosProvider } from "./Pedidos";
import { ItensProvider } from "./Itens";
import { FornecedoresProvider } from "./Fornecedores";
import { BodyProvider } from "./Body";
import { TelefonesProvider } from "./Telefones";
import { EmailsProvider } from "./Emails";

const Providers = ({ children }) => {
  return (
    <TransportadorasProvider>
      <ProdutosProvider>
        <PedidosProvider>
          <FornecedoresProvider>
            <ItensProvider>
              <TelefonesProvider>
                <EmailsProvider>
                  <BodyProvider>{children}</BodyProvider>
                </EmailsProvider>
              </TelefonesProvider>
            </ItensProvider>
          </FornecedoresProvider>
        </PedidosProvider>
      </ProdutosProvider>
    </TransportadorasProvider>
  );
};

export default Providers;
