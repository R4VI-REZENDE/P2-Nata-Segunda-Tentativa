# Projeto-base da prova prática

Este projeto contém uma Web API de atividades formativas e uma estrutura inicial de front-end.

O projeto deverá ser utilizado como base para a prova prática de Desenvolvimento Web e Mobile I.

## Organização

```text
projeto-base-prova-p2/
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Repositories/
│   ├── packages/
│   ├── Program.cs
│   └── BibliotecaApi.csproj
└── front/
    ├── docs/
    ├── vendor/bootstrap/
    ├── index.html
    ├── style.css
    └── script.js
```

## O que deverá ser feito

Cada estudante deverá desenvolver uma interface web capaz de consumir a API disponibilizada na pasta `backend`.

A interface deverá representar um sistema de gerenciamento de atividades formativas, cursos e workshops.

O front-end deverá:

- utilizar HTML, CSS, Bootstrap e JavaScript;
- consumir a API com `fetch`;
- realizar requisições GET, POST, PUT e DELETE conforme a proposta recebida;
- apresentar dados retornados pela API;
- permitir ações sobre os dados;
- utilizar DOM e eventos;
- possuir formulários quando exigido pela proposta;
- possuir validações e feedback visual;
- funcionar em telas pequenas e grandes;
- utilizar os arquivos locais do Bootstrap;
- não depender de recursos externos.

## API disponível

```text
GET    /api/Atividades
GET    /api/Atividades/{id}
POST   /api/Atividades/curso
POST   /api/Atividades/workshop
PUT    /api/Atividades/curso/{id}
PUT    /api/Atividades/workshop/{id}
DELETE /api/Atividades/{id}
GET    /api/Atividades/{id}/descricao
POST   /api/Atividades/{id}/inscrever
```

Os dados representam dois tipos de atividade:

- `Curso`: título, ano, professor, carga horária e vagas;
- `Workshop`: título, ano, instrutor, local e duração em horas.

## Regras

- O front-end deverá ser desenvolvido dentro da pasta `front`.
- Não utilize React, Vue, Angular ou outro framework JavaScript.
- Não utilize CDN ou biblioteca externa durante a prova.
- Não altere a finalidade da API.
- Não inclua autenticação, login ou banco de dados.
- Não exponha senhas, tokens ou informações privadas.
- O código deverá ser compreensível e explicado pelo estudante.

## Entrega

A entrega deverá conter o projeto completo, com as pastas `backend` e `front`.

O estudante deverá manter os arquivos organizados, testar a interface com a API em execução e entregar o repositório ou arquivo conforme orientação do professor.
