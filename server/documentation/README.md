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



# no mySQL PhpMyAdmin

```
-- phpMyAdmin SQL Dump
-- version 5.2.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.30.23
-- Tempo de geração: 28/06/2021 às 09:52
-- Versão do servidor: 8.0.18
-- Versão do PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `marvelDB`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacoes`
--

CREATE TABLE `avaliacoes` (
  `id_avaliacao` int(11) NOT NULL,
  `nota` float NOT NULL,
  `dt_cadastro` date NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_item_API` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `item_API`
--

CREATE TABLE `item_API` (
  `id_item_API` int(11) NOT NULL,
  `nota` float NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `arquivo` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Login`
--

CREATE TABLE `Login` (
  `id_login` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `senha` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD PRIMARY KEY (`id_avaliacao`);

--
-- Índices de tabela `item_API`
--
ALTER TABLE `item_API`
  ADD PRIMARY KEY (`id_item_API`);

--
-- Índices de tabela `Login`
--
ALTER TABLE `Login`
  ADD PRIMARY KEY (`id_login`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  MODIFY `id_avaliacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `item_API`
--
ALTER TABLE `item_API`
  MODIFY `id_item_API` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Login`
--
ALTER TABLE `Login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```
