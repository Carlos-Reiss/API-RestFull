# API RestFull

## Running Locally

- Após clonar ou baixar do repositorio abrir a pasta onde tá o projeto e no terminal digitar o comando `` yarn`` para baixar as dependências.

- Utilize o comando `yarn dev` se quiser alterar algo no codigo e monitorar a alteração, mas se só quiser da uma olhada como ta funcionando usa o comando `yarn start` a direrença é que tem um script no package.json que usa o nodemon por isso utilizar dessa forma.

- Aconselho a utilizar o Insomnia (https://insomnia.rest/) para verificar as rotas da aplicação.

- O server já ta pré-configurado para rodar após iniciar ele ta na *porta:3000* ( http:localhost:3000 ), cuidado se tiver utilizando outra aplicação na mesma porta terá conflito.

``` 
Terminal-> yarn dev
    yarn run v1.21.1
    $ nodemon src/server.js
    [nodemon] 2.0.2
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching dir(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node src/server.js`
    server is running
 ```

- no Insomnia escrever os requests **assim**:


- método **Get** _all client_

    (http://localhost:3000/clientes)

- método **Get** _Single client_

    (http://localhost:3000/`clientes/1`)

    > você pode modificar a busca ex: `clientes/3` e ele vai retornar outro "cliente", qualquer coisa observar o HTTP code do Insomnia.

- método **Post** _store_

    (http://localhost:3000/clientes)
    
    > ↓ esse JSON é colocado no insomnia para criar um novo "Cliente"
    
    _JSON_ 
```
    {
    "name":"Nome usuario",
    "username":"username",
    "email":"email@email.com",
    "address": {
        "street": "Rua agamenon",
        "suite": "home suit",
        "city": "seatle",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "(+55)11999-5558",
    "website": "siteG.net",
    "company": {
            "name": "SiteG LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
```
- método **Put** _update_

    (http://localhost:3000/clientes/`1`)

    _JSON_ 
```
    {
        "name":"Antonio reis"
    }
```

aqui eu utilizei só para da um update no name, mas poderia colocar mais parâmetros

- método **Delete** _Destroy_
    (http://localhost:3000/clientes/`1`)

    > No server.js ele não da um "Delete" ele só esconde a informação ao ponto de você passando outro parametro após `clientes/1` ex: `clientes/4` ele vai reaparecer o anterios. isso foi uma questão de implementação.