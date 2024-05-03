# Projeto BankAPI
A BankAPI é uma API Restful de exercício que simula funcionalidades básicas de bancos para fins educativos. Oferece uma plataforma segura e intuitiva, ideal para desenvolvedores treinarem programação em APIs financeiras. Com documentação clara e foco em aprendizado prático, é uma ferramenta valiosa para aprimorar habilidades técnicas.

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

![Listar Contas](https://github.com/gabrielponde/BankAPI/assets/156744946/b04452ac-921a-4c6e-8fe4-6c848ba9ba45)
**_Descrição_: Não retorna nada por ainda não ter sido cadastrada uma conta.**

![Listar Contas](https://github.com/gabrielponde/BankAPI/assets/156744946/dd8d1cde-28ff-42b9-8395-23134a25ce27)
**_Descrição_: Retorna uma lista de todas as contas bancárias cadastradas.**

### 2. Criar Conta
Endpoint:
```bash
/contas
```
Método: POST

![Criar Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/16a858f4-2800-47cf-99d0-0def70b580e3)
![Criar Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/2c78d8cf-5558-4381-a883-0bc03551dd14)
**_Descrição_: Cria uma nova conta bancária com as informações fornecidas, não podendo possuir o mesmo CPF e Email.**

### 3. Deletar Conta
Endpoint: 
```bash
/contas/:numeroConta
```
Método: DELETE

![Deletar Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/81092b74-8664-4f63-bdb0-451980100d29)
**_Descrição_: Deleta a conta bancária com o numero da conta especificado.**

### 4. Atualizar Conta
Endpoint: 
```bash
/contas/:numeroConta/usuario
```
Método: PUT

![Atualizar Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/be57ed2d-3ee4-402a-b7f4-2b73e0343049)
![Atualizar Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/bcd06f3d-650c-4773-99de-d51008916ff2)
**_Descrição_: Atualiza as informações da conta bancária com o numero da conta especificado.**

### 5. Ver Saldo Bancário
Endpoint:
```bash
/contas/saldo/:numeroConta/:senha
```
Método: GET

![Saldo em Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/282fd34d-5c05-463e-9385-3363cc952c1e)
**_Descrição_: Retorna o saldo atual da conta bancária com o numero da conta especificado.**

### 6. Ver Extrato Bancário
Endpoint:
```bash
/contas/extrato/:numeroConta/:senha
```
Método: GET

![Extrato em Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/af17d450-1e46-4bac-a836-1e2f71560e35)
![Extrato em Conta](https://github.com/gabrielponde/BankAPI/assets/156744946/3e76137c-f406-42ab-8d08-b5ee564d1e4f)
**_Descrição_: Retorna o extrato bancário da conta bancária com o numero da conta especificado.**

### 7. Realizar Transferência Entre Contas
Endpoint: 
```bash
/transacoes/transferir
```
Método: POST

![Transfência entre Contas](https://github.com/gabrielponde/BankAPI/assets/156744946/d7cbe2ba-5950-4908-b410-e4ff8d35d0cf)
**_Descrição_: Realiza uma transferência de uma conta para outra.**

### 8. Realizar Saque em uma Conta
Endpoint:
```bash
/contas/saldo/:numeroConta/:senha
```
Método: GET

![Saque](https://github.com/gabrielponde/BankAPI/assets/156744946/a5691574-8777-4ceb-9069-af162d0fe492)
**_Descrição_: Realiza um saque de uma conta com o numero da conta especificado.**

### 9. Realizar Depósito em uma Conta
Endpoint:
```bash
/transacoes/depositar
```
Método: POST

![Deposito](https://github.com/gabrielponde/BankAPI/assets/156744946/0dcc4c51-bbad-46b4-915e-11fa000dbd5f)
**_Descrição_: Realiza um depósito na conta bancária com o numero da conta especificado.**

## Persistência de Dados
Os dados das contas bancárias são salvos em memória durante a execução da aplicação. Isso significa que os dados serão perdidos quando o servidor for desligado ou reiniciado.

## Uso da API
Para iniciar o servidor e utilizar a API, execute o seguinte comando:
```bash
npm run dev
```
![Iniciar Servidor](https://github.com/gabrielponde/BankAPI/assets/156744946/d42cb829-4019-4441-892b-4684e55b92da)
Este comando iniciará o servidor na porta 3000. Você pode acessar os endpoints mencionados acima usando um cliente HTTP ou uma ferramenta como o Postman, o HTTPie ou Insomnia.

## Avisos Importantes
Esta API foi desenvolvida apenas para fins educacionais e não é destinada para uso em ambientes de produção ou operações bancárias reais, pois não possui medidas de segurança adequadas para proteger dados sensíveis. Ela é uma ferramenta de treinamento, construída com práticas modernas de desenvolvimento para oferecer uma experiência de aprendizado de alta qualidade.
Os dados das contas bancárias são armazenados em memória e serão perdidos quando o servidor for desligado.
Sempre tenha cuidado ao lidar com informações financeiras e pessoais.

## Contribuições
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver ideias para melhorar o aplicativo, sinta-se à vontade para abrir um pull request ou discutir suas sugestões na seção de issues do GitHub. A colaboração de todos é fundamental para aprimorar e garantir a qualidade desta API bancária para fins educacionais.

