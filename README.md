'# Sistema de gerenciamento de atividades formativas

Projeto acadêmico de Desenvolvimento Web e Mobile I. O repositório contém uma API em ASP.NET Core e a estrutura inicial de uma interface web para atividades formativas, como cursos e workshops.

## Integrantes

| Nome | RGM |
|---|---:|
| Ryan Soler | 114.038 |
| Ravi Rezende | 114.051 |
| Daniel Virgilio | 114.063 |
| Allan Fernandes | 114.090 |
| Gustavo Santos | 114.049 |

## Estrutura do projeto

```text
Projeto_Base_P2/
├── backend/
│   ├── Controllers/       # Rotas HTTP da API
│   ├── Models/            # AtividadeFormativa, Curso, Workshop e IInscrevivel
│   ├── Repositories/      # Armazenamento em memória das atividades
│   ├── packages/          # Pacotes locais usados pelo backend
│   ├── Program.cs         # Configuração da aplicação, CORS e Swagger
│   └── BibliotecaApi.csproj
└── front/
    ├── docs/              # Material de apoio do Bootstrap
    ├── vendor/bootstrap/  # Arquivos locais do Bootstrap
    ├── index.html         # Página inicial
    ├── style.css          # Estilos da interface
    └── script.js          # Ponto de partida para integração com a API
```

## Tecnologias

- Backend: C# e ASP.NET Core, com alvo .NET 10.
- Documentação da API: Swagger.
- Frontend: HTML, CSS, JavaScript e Bootstrap local.
- Persistência: dados mantidos em memória durante a execução; não há banco de dados configurado.

## Executar o backend

Abra um terminal na pasta `backend` e execute:

```bash
dotnet restore --configfile NuGet.config
dotnet run
```

A API usa a porta `5224` conforme a configuração do projeto. A documentação Swagger fica disponível em:

```text
http://localhost:5224/swagger
```

Os dados de exemplo são criados quando o backend inicia. Como o armazenamento é em memória, as alterações são perdidas ao encerrar a aplicação.

## Frontend

Abra `front/index.html` no navegador ou use uma extensão/servidor local para servir a pasta `front`. O Bootstrap já está incluído em `front/vendor/bootstrap`, sem dependência de CDN.

O endereço configurado no início de `front/script.js` é:

```js
const API_URL = "http://localhost:5224/api/Atividades";
```

Se a API iniciar em outra porta, ajuste esse endereço. O arquivo `script.js` contém o ponto de partida da integração; as funcionalidades da interface devem corresponder aos recursos da API descritos abaixo.

## Modelos

- `AtividadeFormativa`: classe base com identificador, título, ano, duração calculada e descrição.
- `Curso`: atividade com professor, carga horária e número de vagas; implementa inscrição.
- `Workshop`: atividade com instrutor, local e duração em horas.
- `IInscrevivel`: contrato para atividades que disponibilizam inscrição.

## Endpoints da API

| Método | Rota | Ação |
|---|---|---|
| GET | `/api/Atividades` | Lista todas as atividades |
| GET | `/api/Atividades/{id}` | Busca atividade por identificador |
| POST | `/api/Atividades/curso` | Cadastra um curso |
| POST | `/api/Atividades/workshop` | Cadastra um workshop |
| PUT | `/api/Atividades/curso/{id}` | Atualiza um curso |
| PUT | `/api/Atividades/workshop/{id}` | Atualiza um workshop |
| DELETE | `/api/Atividades/{id}` | Remove uma atividade |
| GET | `/api/Atividades/{id}/descricao` | Retorna descrição, tipo e duração |
| POST | `/api/Atividades/{id}/inscrever` | Solicita inscrição, quando disponível |

### Exemplos de dados

Curso:

```json
{
  "titulo": "JavaScript para Interfaces",
  "ano": 2026,
  "professor": "Nome do professor",
  "cargaHoraria": 40,
  "vagas": 30
}
```

Workshop:

```json
{
  "titulo": "Boas práticas de Git",
  "ano": 2026,
  "instrutor": "Nome do instrutor",
  "local": "Laboratório 01",
  "duracaoHoras": 4
}
```

## Validações e comportamento

A API exige título e ano não negativo para as atividades. Cursos também exigem professor, carga horária maior que zero e vagas maiores que zero. Workshops exigem instrutor, local e duração maior que zero. A inscrição está disponível para cursos; workshops não implementam essa funcionalidade.

