# Projeto BankAPI
A BankAPI é uma API de exercício que simula funcionalidades básicas de bancos para fins educativos. Oferece uma plataforma segura e intuitiva, ideal para desenvolvedores treinarem programação em APIs financeiras. Com documentação clara e foco em aprendizado prático, é uma ferramenta valiosa para aprimorar habilidades técnicas.

## Pré-requisitos
Para utilizar esta API, é necessário possuir o Node.js e o npm (Node Package Manager) instalados. Além disso, é preciso instalar as seguintes dependências:

Express: Framework web para Node.js.

Nodemon: Utilitário que monitora alterações nos arquivos e reinicia automaticamente o servidor.

date-fns: Biblioteca JavaScript para manipulação de datas.

Para instalar as dependências, execute o seguinte comando:

```bash
npm install express
```

```bash
npm install nodemon
```

```bash
npm install date-fns
```

## Funcionalidades
A API oferece as seguintes funcionalidades:

### 1. Listar Contas
Endpoint:
```bash
/contas
```
Método: GET

Descrição: Retorna uma lista de todas as contas bancárias cadastradas.

### 2. Criar Conta
Endpoint:
```bash
/contas
```
Método: POST

Descrição: Cria uma nova conta bancária com as informações fornecidas.

### 3. Deletar Conta
Endpoint: 
```bash
/contas/:numeroConta
```
Método: DELETE

Descrição: Deleta a conta bancária com o numero da conta especificado.

### 4. Atualizar Conta
Endpoint: 
```bash
/contas/:numeroConta/usuario
```
Método: PUT

Descrição: Atualiza as informações da conta bancária com o numero da conta especificado.

### 5. Ver Saldo Bancário
Endpoint:
```bash
/contas/saldo/:numeroConta/:senha
```
Método: GET

Descrição: Retorna o saldo atual da conta bancária com o numero da conta especificado.

### 6. Ver Extrato Bancário
Endpoint:
```bash
/contas/extrato/:numeroConta/:senha
```
Método: GET

Descrição: Retorna o extrato bancário da conta bancária com o numero da conta especificado.

### 7. Realizar Transferência Entre Contas
Endpoint: 
```bash
/transacoes/transferir
```
Método: POST

Descrição: Realiza uma transferência de uma conta para outra.

### 8. Realizar Saque em uma Conta
Endpoint:
```bash
/contas/saldo/:numeroConta/:senha
```
Método: GET

Descrição: Realiza um saque de uma conta com o numero da conta especificado.

### 9. Realizar Depósito em uma Conta
Endpoint:
```bash
/transacoes/depositar
```
Método: POST

Descrição: Realiza um depósito na conta bancária com o numero da conta especificado.

## Persistência de Dados
Os dados das contas bancárias são salvos em memória durante a execução da aplicação. Isso significa que os dados serão perdidos quando o servidor for desligado ou reiniciado.

## Uso da API
Para iniciar o servidor e utilizar a API, execute o seguinte comando:

```bash
npm run dev
```
Este comando iniciará o servidor na porta 3000. Você pode acessar os endpoints mencionados acima usando um cliente HTTP ou uma ferramenta como o Postman.

## Avisos Importantes
Esta API foi desenvolvida apenas para fins educacionais e não é destinada para uso em ambientes de produção ou operações bancárias reais, pois não possui medidas de segurança adequadas para proteger dados sensíveis. Ela é uma ferramenta de treinamento, construída com práticas modernas de desenvolvimento para oferecer uma experiência de aprendizado de alta qualidade.
Os dados das contas bancárias são armazenados em memória e serão perdidos quando o servidor for desligado.
Sempre tenha cuidado ao lidar com informações financeiras e pessoais.

## Contribuições
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver ideias para melhorar o aplicativo, sinta-se à vontade para abrir um pull request ou discutir suas sugestões na seção de issues do GitHub. A colaboração de todos é fundamental para aprimorar e garantir a qualidade desta API bancária para fins educacionais.

