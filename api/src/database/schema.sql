CREATE DATABASE pokedex; --> criando database

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; --> adicionando extensão para usar uuid

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
); --> criando tabela de categorias

CREATE TABLE IF NOT EXISTS pokemons (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id) --> foreign key da category
); --> criando tabela de pokemons
