# Bootstrap 5.3.3 — Guia de layout e componentes

Este arquivo é um guia de consulta para a prova prática. Ele reúne os recursos mais importantes do Bootstrap que podem ser utilizados para montar uma interface responsiva, organizada e acessível.

Os exemplos são genéricos. Eles mostram como a ferramenta funciona, mas não entregam a solução da atividade.

## 1. Bootstrap disponível no projeto

Este projeto já possui o Bootstrap localmente. Durante a prova, não é necessário acessar CDN nem instalar pacotes pela internet.

Arquivos disponíveis:

```text
front/vendor/bootstrap/bootstrap.min.css
front/vendor/bootstrap/bootstrap.bundle.min.js
```

No `index.html`, o CSS deve ser carregado no `<head>`:

```html
<link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">
```

O JavaScript deve ser carregado antes do fechamento do `<body>`:

```html
<script src="vendor/bootstrap/bootstrap.bundle.min.js"></script>
```

O arquivo `bundle` já contém os recursos necessários para componentes interativos, incluindo o Popper.

## 2. Ideia principal: mobile-first

O Bootstrap trabalha com a abordagem **mobile-first**. Primeiro, o layout é pensado para telas pequenas. Depois, classes com pontos de quebra ajustam a interface para telas maiores.

Exemplo:

```html
<div class="col-12 col-md-6 col-lg-4">
  Conteúdo do card
</div>
```

Nesse exemplo:

- `col-12`: ocupa toda a largura em telas pequenas;
- `col-md-6`: ocupa metade da linha a partir de `md`;
- `col-lg-4`: ocupa um terço da linha a partir de `lg`.

### Pontos de quebra mais usados

| Prefixo | Referência geral |
|---|---|
| sem prefixo | telas pequenas |
| `sm` | telas pequenas maiores |
| `md` | tablets e telas médias |
| `lg` | notebooks e telas grandes |
| `xl` | telas muito grandes |
| `xxl` | telas extra grandes |

Exemplos de classes responsivas:

```html
<h1 class="fs-3 fs-md-2 fs-lg-1">Título adaptável</h1>
<div class="d-none d-md-block">Visível a partir de md</div>
<div class="text-center text-md-start">Texto centralizado no celular</div>
```

## 3. Containers

O container limita a largura do conteúdo e cria espaçamento lateral automático.

```html
<div class="container">
  Conteúdo centralizado
</div>
```

Principais opções:

```html
<div class="container">Largura responsiva com limite</div>
<div class="container-fluid">Ocupa toda a largura disponível</div>
<div class="container-lg">Largura fluida até o breakpoint lg</div>
```

Use normalmente um `container` dentro de `header`, `main` e `footer` para manter o alinhamento visual da página.

## 4. Grid: linhas e colunas

O grid do Bootstrap divide a linha em 12 partes. A estrutura básica é:

```html
<div class="container">
  <div class="row">
    <div class="col">Coluna 1</div>
    <div class="col">Coluna 2</div>
  </div>
</div>
```

### Tamanhos de coluna

```html
<div class="row">
  <div class="col-12 col-md-8">Área principal</div>
  <div class="col-12 col-md-4">Área lateral</div>
</div>
```

As colunas `8` e `4` somam `12`.

### Espaçamento entre colunas

```html
<div class="row g-4">
  <div class="col-md-6">Primeiro item</div>
  <div class="col-md-6">Segundo item</div>
</div>
```

Classes importantes:

- `g-0` até `g-5`: espaçamento horizontal e vertical;
- `gx-3`: espaçamento horizontal;
- `gy-3`: espaçamento vertical;
- `offset-md-2`: desloca uma coluna a partir de `md`;
- `order-md-2`: altera a ordem a partir de `md`.

### Layout de cards

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">Card 1</div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">Card 2</div>
    </div>
  </div>
</div>
```

`row-cols-*` define quantas colunas aparecem por linha, e `h-100` ajuda os cards da mesma linha a terem altura semelhante.

## 5. Sistema de espaçamento

O Bootstrap usa classes curtas para `margin` e `padding`.

### Margin

```html
<div class="mt-4 mb-3 mx-auto">Bloco com margens</div>
```

### Padding

```html
<section class="p-4 px-md-5 py-5">Seção com espaço interno</section>
```

Significado das letras:

| Classe | Função |
|---|---|
| `m-*` | margin em todos os lados |
| `p-*` | padding em todos os lados |
| `mt-*` / `mb-*` | topo / baixo |
| `ms-*` / `me-*` | início / fim, respeitando a direção do texto |
| `mx-*` / `my-*` | eixo horizontal / vertical |
| `auto` | valor automático |

Os valores mais usados vão de `0` a `5`:

```html
<div class="p-0">Sem padding</div>
<div class="p-3">Padding médio</div>
<div class="m-4">Margin maior</div>
```

## 6. Tipografia e alinhamento

```html
<h1 class="display-5 fw-bold">Título principal</h1>
<p class="lead">Texto de destaque</p>
<p class="text-muted small">Texto secundário</p>
```

Classes úteis:

- `display-1` a `display-6`: títulos grandes;
- `fs-1` a `fs-6`: tamanho da fonte;
- `fw-bold`, `fw-semibold`, `fw-normal`, `fw-light`: peso da fonte;
- `fst-italic`: itálico;
- `lh-1`, `lh-sm`, `lh-base`, `lh-lg`: altura da linha;
- `text-start`, `text-center`, `text-end`: alinhamento;
- `text-md-start`: alinhamento responsivo;
- `text-uppercase`, `text-lowercase`, `text-capitalize`: transformação do texto.

## 7. Cores, fundos e bordas

```html
<p class="text-primary">Texto principal</p>
<p class="text-success">Texto de sucesso</p>
<div class="bg-dark text-white p-3">Fundo escuro</div>
<div class="border border-success rounded p-3">Caixa destacada</div>
```

Cores mais comuns:

```text
primary, secondary, success, danger, warning, info, light, dark, white
```

Outras classes importantes:

- `text-bg-success`: combina cor de fundo e cor de texto;
- `border`: adiciona borda;
- `border-2`, `border-3`: aumenta a espessura;
- `rounded`, `rounded-3`, `rounded-pill`: arredondamento;
- `shadow-sm`, `shadow`, `shadow-lg`: sombra;
- `opacity-75`: transparência.

Não use somente a cor para transmitir uma informação. Combine cor com texto, ícone ou outro indicador visual.

## 8. Navbar

A navbar organiza a navegação principal. Os links devem ser elementos `<a>`; não é necessário transformar o menu em uma lista para usar o Bootstrap.

```html
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand" href="#inicio">Nome do site</a>

    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menuPrincipal">
      <div class="navbar-nav ms-auto">
        <a class="nav-link" href="#sobre">Sobre</a>
        <a class="nav-link" href="#contato">Contato</a>
      </div>
    </div>
  </div>
</nav>
```

Pontos importantes:

- `navbar-expand-lg`: menu completo a partir de `lg`;
- `navbar-toggler`: botão exibido em telas menores;
- `collapse navbar-collapse`: área que abre e fecha;
- `data-bs-target` deve apontar para o mesmo `id` do menu;
- `aria-controls`, `aria-expanded` e `aria-label` ajudam na acessibilidade;
- o JavaScript local do Bootstrap precisa estar carregado para o menu funcionar.

## 9. Hero ou seção de destaque

O Bootstrap não possui uma classe obrigatória chamada `hero`. Um hero pode ser criado combinando container, grid, tipografia, fundo e espaçamento.

```html
<section class="bg-success text-white py-5" id="inicio">
  <div class="container py-4">
    <div class="row align-items-center g-4">
      <div class="col-lg-7">
        <span class="badge text-bg-light text-success mb-3">Destaque</span>
        <h1 class="display-5 fw-bold">Título da página</h1>
        <p class="lead">Uma frase curta explicando o objetivo da interface.</p>
        <a class="btn btn-light" href="#conteudo">Continuar</a>
      </div>
      <div class="col-lg-5">
        <div class="bg-white text-dark rounded-4 p-4 shadow-sm">Área visual</div>
      </div>
    </div>
  </div>
</section>
```

## 10. Cards

Cards agrupam título, texto, imagem e ações.

```html
<article class="card h-100 shadow-sm">
  <div class="card-body">
    <span class="badge text-bg-primary mb-2">Categoria</span>
    <h2 class="card-title h5">Título do card</h2>
    <p class="card-text">Descrição curta do conteúdo.</p>
    <a href="#detalhes" class="btn btn-outline-primary">Ver detalhes</a>
  </div>
</article>
```

Com imagem:

```html
<div class="card">
  <img src="assets/imagem.jpg" class="card-img-top" alt="Descrição da imagem">
  <div class="card-body">
    <h2 class="card-title h5">Título</h2>
    <p class="card-text">Texto do card.</p>
  </div>
</div>
```

Use sempre um `alt` descritivo na imagem. Se a imagem for apenas decorativa, use `alt=""`.

## 11. Botões e badges

```html
<button type="button" class="btn btn-primary">Ação principal</button>
<button type="button" class="btn btn-outline-secondary">Ação secundária</button>
<a href="#inicio" class="btn btn-success">Link com aparência de botão</a>
<span class="badge text-bg-warning">Pendente</span>
```

Tamanhos:

```html
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

Regras importantes:

- use `<button>` para ações na própria página;
- use `<a>` para navegação;
- declare `type="button"` quando o botão não deve enviar um formulário;
- dentro de um formulário, use `type="submit"` somente no botão de envio.

## 12. Alerts e mensagens

```html
<div class="alert alert-info" role="alert">
  Mensagem informativa para o usuário.
</div>

<div class="alert alert-success" role="alert">
  Operação realizada com sucesso.
</div>

<div class="alert alert-danger" role="alert">
  Não foi possível concluir a operação.
</div>
```

Para uma mensagem que pode ser fechada:

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Atenção à informação apresentada.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
</div>
```

## 13. Formulários

Estrutura básica:

```html
<form>
  <div class="mb-3">
    <label for="nome" class="form-label">Nome</label>
    <input type="text" id="nome" name="nome" class="form-control" required>
  </div>

  <div class="mb-3">
    <label for="categoria" class="form-label">Categoria</label>
    <select id="categoria" name="categoria" class="form-select">
      <option selected>Selecione</option>
      <option value="a">Opção A</option>
      <option value="b">Opção B</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

Classes principais:

- `form-label`: estilo da label;
- `form-control`: inputs, textareas e campos de texto;
- `form-select`: caixas de seleção;
- `form-check`: checkbox e radio;
- `input-group`: agrupa texto, campo e botão;
- `form-text`: texto de ajuda;
- `disabled`: campo desabilitado;
- `readonly`: campo somente leitura.

### Formulário em colunas

```html
<div class="row g-3">
  <div class="col-md-6">
    <label for="campoA" class="form-label">Campo A</label>
    <input id="campoA" class="form-control">
  </div>
  <div class="col-md-6">
    <label for="campoB" class="form-label">Campo B</label>
    <input id="campoB" class="form-control">
  </div>
</div>
```

Cada `label` deve apontar para o `id` do seu campo. Isso melhora a usabilidade e a acessibilidade.

### Feedback visual

```html
<input class="form-control is-valid" aria-describedby="mensagemValida">
<div id="mensagemValida" class="valid-feedback">Campo válido.</div>

<input class="form-control is-invalid" aria-describedby="mensagemInvalida">
<div id="mensagemInvalida" class="invalid-feedback">Verifique este campo.</div>
```

O JavaScript pode adicionar ou remover `is-valid` e `is-invalid` com `classList`.

## 14. Tabelas

```html
<div class="table-responsive">
  <table class="table table-striped table-hover align-middle">
    <thead class="table-dark">
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Status</th>
        <th scope="col">Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Exemplo</td>
        <td><span class="badge text-bg-success">Ativo</span></td>
        <td><button class="btn btn-sm btn-outline-primary">Abrir</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

`table-responsive` permite rolagem horizontal em telas pequenas, evitando que a tabela quebre o layout.

## 15. Modal

O modal abre uma janela sobre o conteúdo da página.

Botão de abertura:

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExemplo">
  Abrir detalhes
</button>
```

Estrutura do modal:

```html
<div class="modal fade" id="modalExemplo" tabindex="-1" aria-labelledby="tituloModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="tituloModal">Título da janela</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
      </div>
      <div class="modal-body">
        Conteúdo da janela.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
```

O botão e o modal precisam ter a mesma referência: `data-bs-target="#modalExemplo"` e `id="modalExemplo"`.

## 16. Collapse e accordion

Para mostrar ou esconder conteúdo:

```html
<button class="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#detalhes">
  Mostrar detalhes
</button>

<div id="detalhes" class="collapse mt-3">
  Conteúdo que pode ser expandido.
</div>
```

O accordion é útil quando várias áreas podem ser abertas e fechadas:

```html
<div class="accordion" id="accordionExemplo">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#itemUm">
        Pergunta ou título
      </button>
    </h2>
    <div id="itemUm" class="accordion-collapse collapse show" data-bs-parent="#accordionExemplo">
      <div class="accordion-body">Resposta ou conteúdo.</div>
    </div>
  </div>
</div>
```

## 17. Carrossel

O carrossel apresenta itens em sequência.

```html
<div id="carrosselExemplo" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="bg-dark text-white p-5">Primeiro item</div>
    </div>
    <div class="carousel-item">
      <div class="bg-success text-white p-5">Segundo item</div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button"
          data-bs-target="#carrosselExemplo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button"
          data-bs-target="#carrosselExemplo" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Próximo</span>
  </button>
</div>
```

O primeiro `.carousel-item` precisa ter a classe `active` para aparecer inicialmente.

## 18. Spinners e estados de carregamento

```html
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Carregando...</span>
</div>
```

O spinner pode ser exibido enquanto o JavaScript aguarda uma resposta da API e escondido quando a operação terminar.

## 19. Utilitários de layout

### Flexbox

```html
<div class="d-flex justify-content-between align-items-center gap-3">
  <span>Informação</span>
  <button class="btn btn-primary">Ação</button>
</div>
```

Classes úteis:

- `d-flex`: ativa Flexbox;
- `flex-column`: organiza verticalmente;
- `justify-content-start`, `center`, `between`, `end`;
- `align-items-start`, `center`, `end`;
- `flex-wrap`: permite quebra de linha;
- `gap-1` até `gap-5`: espaço entre os itens;
- `ms-auto`: empurra um item para o final do eixo horizontal.

### Display e dimensões

```html
<div class="d-block d-md-flex">Bloco no celular, flex em telas maiores</div>
<div class="w-100">Largura total</div>
<div class="min-vh-100">Altura mínima da tela</div>
```

### Posição e alinhamento

```html
<div class="position-relative">
  <span class="position-absolute top-0 end-0 badge text-bg-danger">Novo</span>
</div>
```

Use posicionamento absoluto com cuidado para não prejudicar a responsividade.

## 20. Atributos `data-bs-*`

Os atributos `data-bs-*` conectam o HTML aos componentes interativos do Bootstrap.

Exemplos:

```html
data-bs-toggle="modal"
data-bs-target="#meuModal"
data-bs-toggle="collapse"
data-bs-dismiss="alert"
data-bs-slide="next"
```

Sempre confira se o valor do `data-bs-target` aponta para um `id` existente:

```html
data-bs-target="#menu"
...
id="menu"
```

O `#` indica que o alvo é um elemento identificado por `id`.

## 21. Acessibilidade básica

Ao montar a interface:

1. use headings em ordem lógica (`h1`, `h2`, `h3`);
2. associe cada `label` ao campo correto por meio de `for` e `id`;
3. use `alt` nas imagens;
4. use texto visível nos botões;
5. use `aria-label` quando o botão não tiver texto visível;
6. não dependa somente da cor para indicar erro ou sucesso;
7. mantenha contraste entre texto e fundo;
8. use `type="button"` em botões que não enviam formulário;
9. preserve o foco e permita navegação pelo teclado;
10. teste a página em uma janela estreita.

## 22. Relação com JavaScript

O Bootstrap cuida principalmente da apresentação. O JavaScript da atividade pode controlar dados, eventos, formulários e requisições.

Exemplo de seleção de um componente:

```js
const mensagem = document.querySelector("#mensagem");
mensagem.classList.add("alert", "alert-success");
mensagem.textContent = "Operação concluída.";
```

Exemplo de alteração de estado visual:

```js
const carregando = document.querySelector("#carregando");
carregando.classList.remove("d-none");
```

O Bootstrap fornece as classes; o JavaScript decide quando adicioná-las ou removê-las.

## 23. Erros comuns

- usar um caminho incorreto para `bootstrap.min.css`;
- esquecer de carregar `bootstrap.bundle.min.js`;
- apontar `data-bs-target` para um `id` que não existe;
- esquecer `active` no primeiro item do carrossel;
- colocar `navbar-toggler` sem a estrutura de `collapse`;
- usar `col-*` fora de uma `row`;
- colocar `row` sem um `container` ou outro elemento de largura planejada;
- usar uma tabela sem `table-responsive`;
- esquecer `for` na `label` ou usar um `id` repetido;
- usar `button` sem declarar o `type` dentro de um formulário;
- usar `innerHTML` com dados externos sem necessidade;
- testar o front abrindo arquivos em caminhos diferentes e confundir erro de rota com erro de CSS.

## 24. Checklist antes de entregar

- [ ] O Bootstrap está sendo carregado pelos arquivos locais.
- [ ] O layout usa `container`, `row` e colunas de forma coerente.
- [ ] A página funciona em tela pequena e em tela grande.
- [ ] Os cards, botões e formulários têm classes do Bootstrap.
- [ ] Os campos possuem `label`, `id`, `name` e tipo adequado.
- [ ] Os botões têm finalidade clara e `type` correto.
- [ ] Os componentes interativos possuem `data-bs-target` e `id` compatíveis.
- [ ] Imagens possuem `alt`.
- [ ] Mensagens de erro e sucesso são visíveis e compreensíveis.
- [ ] O JavaScript não depende de uma CDN ou biblioteca externa.
- [ ] O Console do navegador não apresenta erros.
- [ ] A interface continua utilizável quando a janela é reduzida.

## 25. Documentação oficial para consulta quando houver internet

- [Bootstrap — documentação geral](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Containers](https://getbootstrap.com/docs/5.3/layout/containers/)
- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Utilities](https://getbootstrap.com/docs/5.3/utilities/)
- [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Cards](https://getbootstrap.com/docs/5.3/components/card/)
- [Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Tables](https://getbootstrap.com/docs/5.3/content/tables/)
- [Modal](https://getbootstrap.com/docs/5.3/components/modal/)
- [Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)

Durante a prova, use primeiro os arquivos locais fornecidos no projeto. Os links acima servem como material de estudo e consulta posterior.
