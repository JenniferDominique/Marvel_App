# Criação do banco de Dados

## Modelo Conceitual
<img src="https://github.com/JenniferDominique/Marvel_App/blob/server-database/assets/Modelo_Conceitual_DB.png" alt="modelo conceitual">

## Modelo Lógico
<img src="https://github.com/JenniferDominique/Marvel_App/blob/server-database/assets/Modelo_Logico_DB.png" alt="modelo lógico">

## SQL para criação das tabelas

### Criação do banco
```

create database marveldb;
use marveldb;

```

### Tabela Login
```
create table login
(
	id_login integer unique primary key, 
    nome varchar(30) not null,
    email varchar(40) not null,
    senha varchar(10) not null
);

```

### Tabela Avalições
```

create table avaliacoes
(
	id_avaliacao integer unique primary key, 
    nota decimal not null,
    dt_cadastro date not null,
    id_usuario integer not null,
    id_item_API integer not null,
    
    constraint fk_usuario foreign key (id_usuario) references login (id_login),
    constraint fk_item_API foreign key (id_item_API) references item_API (id_item_API)
);
```

### Tabela Item_API (armazena o backup do retorno da API)
```

create table item_API
(
	id_item_API integer unique primary key, 
    nome varchar(40) not null,
    arquivo blob not null,
    descricao varchar(150) not null
);

```
