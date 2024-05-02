# Projeto BankAPI
A BankAPI é uma API de exercício que simula funcionalidades básicas de bancos para fins educativos. Oferece uma plataforma segura e intuitiva, ideal para desenvolvedores treinarem programação em APIs financeiras. Com documentação clara e foco em aprendizado prático, é uma ferramenta valiosa para aprimorar habilidades técnicas.

## Pré-requisitos
Para utilizar esta API, é necessário possuir o Node.js e o npm (Node Package Manager) instalados. Além disso, é preciso instalar as seguintes dependências:

Express: Framework web para Node.js.
Nodemon: Utilitário que monitora alterações nos arquivos e reinicia automaticamente o servidor.
date-fns: Biblioteca JavaScript para manipulação de datas.

## Funcionalidades
A API oferece as seguintes funcionalidades:

1. Listar Contas
Endpoint: /contas

Método: GET

Descrição: Retorna uma lista de todas as contas bancárias cadastradas.

2. Criar Conta
Endpoint: /contas

Método: POST

Descrição: Cria uma nova conta bancária com as informações fornecidas.

3. Deletar Conta
Endpoint: /contas/:id

Método: DELETE

Descrição: Deleta a conta bancária com o ID especificado.

4. Atualizar Conta
Endpoint: /contas/:id

Método: PUT

Descrição: Atualiza as informações da conta bancária com o ID especificado.

5. Ver Saldo Bancário
Endpoint: /contas/:id/saldo

Método: GET

Descrição: Retorna o saldo atual da conta bancária com o ID especificado.

6. Ver Extrato Bancário
Endpoint: /contas/:id/extrato

Método: GET

Descrição: Retorna o extrato bancário da conta bancária com o ID especificado.

7. Realizar Transferência Entre Contas
Endpoint: /transferencia

Método: POST

Descrição: Realiza uma transferência de uma conta para outra.

8. Verificar Saldo em Conta
Endpoint: /contas/:id/verificar-saldo

Método: POST

Descrição: Verifica se há saldo suficiente na conta para uma transação.

9. Realizar Depósito em Uma Conta
Endpoint: /contas/:id/deposito

Método: POST

Descrição: Realiza um depósito na conta bancária com o ID especificado.

Persistência de Dados
Os dados das contas bancárias são salvos em memória durante a execução da aplicação. Isso significa que os dados serão perdidos quando o servidor for desligado ou reiniciado.

Avisos Importantes
Esta API foi desenvolvida apenas para fins educacionais e não é destinada para uso em ambientes de produção ou operações bancárias reais, pois não possui medidas de segurança adequadas para proteger dados sensíveis. Ela é uma ferramenta de treinamento, construída com práticas modernas de desenvolvimento para oferecer uma experiência de aprendizado de alta qualidade.
Os dados das contas bancárias são armazenados em memória e serão perdidos quando o servidor for desligado.
Sempre tenha cuidado ao lidar com informações financeiras e pessoais.




