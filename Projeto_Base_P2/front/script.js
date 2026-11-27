const API_URL = 'http://localhost:5224/api/Atividades';
const $ = id => document.getElementById(id);
const form = $('formulario');
let editando = null;
const campos = {
  curso: [['professor', 'Professor'], ['cargaHoraria', 'Carga horária', true], ['vagas', 'Vagas', true]],
  workshop: [['instrutor', 'Instrutor'], ['local', 'Local'], ['duracaoHoras', 'Duração em horas', true]]
};
function mensagem(texto, tipo = 'success') {
  $('mensagem').className = `alert alert-${tipo}`;
  $('mensagem').textContent = texto;
}
async function api(caminho = '', metodo = 'GET', dados) {
  const opcoes = { method: metodo };
  if (dados !== undefined) {
    opcoes.headers = { 'Content-Type': 'application/json' };
    opcoes.body = JSON.stringify(dados);
  }
  const resposta = await fetch(API_URL + caminho, opcoes);
  const texto = await resposta.text();
  let resultado = null;
  if (texto) { try { resultado = JSON.parse(texto); } catch { resultado = texto; } }
  if (!resposta.ok) throw new Error(resultado?.mensagem || resultado?.title || `Erro HTTP ${resposta.status}`);
  return resultado;
}
function montarCampos() {
  $('campos').innerHTML = campos[$('tipo').value].map(([id, rotulo, numero]) => `
    <div class="col-md-4"><label class="form-label" for="${id}">${rotulo}</label>
    <input class="form-control" id="${id}" ${numero ? 'type="number" min="1" step="1"' : 'type="text"'} required>
    <div class="invalid-feedback">Informe ${rotulo.toLowerCase()} válido.</div></div>`).join('');
}
function limpar() {
  editando = null; form.reset(); $('tipo').disabled = false; montarCampos();
  form.classList.remove('was-validated'); $('tituloForm').textContent = 'Nova atividade';
  $('salvar').textContent = 'Cadastrar'; $('cancelar').classList.add('d-none');
}
function botao(pai, texto, classe, acao) {
  const b = document.createElement('button'); b.type = 'button'; b.className = `btn btn-sm ${classe}`;
  b.textContent = texto; b.addEventListener('click', async () => {
    b.disabled = true;
    try { await acao(); } catch (erro) { mensagem(erro.message, 'danger'); } finally { b.disabled = false; }
  }); pai.append(b);
}
async function listar() {
  $('carregando').classList.remove('d-none');
  try {
    const atividades = await api();
    const detalhes = await Promise.all(atividades.map(a => api(`/${a.id}/descricao`)));
    $('lista').replaceChildren();
    if (!atividades.length) $('lista').textContent = 'Nenhuma atividade cadastrada.';
    atividades.forEach((a, i) => {
      const d = detalhes[i]; const tipo = d.tipo.toLowerCase();
      const col = document.createElement('div'); col.className = 'col';
      col.innerHTML = '<article class="card h-100 shadow-sm"><div class="card-body"><span class="badge text-bg-secondary"></span><h3 class="h5 mt-2"></h3><p class="text-secondary"></p><p class="descricao"></p><div class="d-flex flex-wrap gap-2 acoes"></div></div></article>';
      col.querySelector('.badge').textContent = d.tipo;
      col.querySelector('h3').textContent = a.titulo;
      col.querySelector('.text-secondary').textContent = `Ano: ${a.ano} | ${d.duracao} h`;
      col.querySelector('.descricao').textContent = d.descricao;
      const acoes = col.querySelector('.acoes');
      botao(acoes, 'Descrição', 'btn-outline-primary', async () => {
        const info = await api(`/${a.id}/descricao`);
        $('detalhesTexto').textContent = `${info.descricao} — ${info.duracao} horas`;
        bootstrap.Modal.getOrCreateInstance($('detalhes')).show();
      });
      botao(acoes, 'Editar', 'btn-outline-secondary', async () => {
        const atual = await api(`/${a.id}`);
        editando = a.id; $('tipo').value = tipo; $('tipo').disabled = true; montarCampos();
        $('titulo').value = atual.titulo; $('ano').value = atual.ano;
        for (const [id] of campos[tipo]) $(id).value = atual[id] ?? a[id] ?? '';
        $('tituloForm').textContent = 'Editar atividade'; $('salvar').textContent = 'Salvar alterações';
        $('cancelar').classList.remove('d-none'); form.classList.remove('was-validated');
        if (campos[tipo].some(([id]) => !$(id).value)) mensagem('A API não retornou todos os campos. Preencha os campos em branco para editar.', 'warning');
        $('cadastro').scrollIntoView(); $('titulo').focus();
      });
      botao(acoes, 'Excluir', 'btn-outline-danger', async () => {
        if (!confirm(`Excluir ${a.titulo}?`)) return;
        await api(`/${a.id}`, 'DELETE'); if (editando === a.id) limpar(); mensagem('Atividade excluída.'); await listar();
      });
      if (tipo === 'curso') botao(acoes, 'Inscrever', 'btn-success', async () => {
        const r = await api(`/${a.id}/inscrever`, 'POST'); mensagem(r.mensagem);
      });
      $('lista').append(col);
    });
  } catch (erro) { mensagem(`Não foi possível carregar as atividades: ${erro.message}`, 'danger'); }
  finally { $('carregando').classList.add('d-none'); }
}
$('tipo').addEventListener('change', montarCampos);
$('cancelar').addEventListener('click', limpar);
$('atualizar').addEventListener('click', listar);
form.addEventListener('submit', async evento => {
  evento.preventDefault();
  for (const input of form.querySelectorAll('input[type=text], input:not([type])')) input.value = input.value.trim();
  form.classList.add('was-validated'); if (!form.checkValidity()) return;
  const tipo = $('tipo').value;
  const dados = { titulo: $('titulo').value, ano: Number($('ano').value) };
  for (const [id, , numero] of campos[tipo]) dados[id] = numero ? Number($(id).value) : $(id).value;
  $('salvar').disabled = true;
  try {
    await api(`/${tipo}${editando === null ? '' : '/' + editando}`, editando === null ? 'POST' : 'PUT', dados);
    mensagem(editando === null ? 'Atividade cadastrada.' : 'Atividade atualizada.'); limpar(); await listar();
  } catch (erro) { mensagem(erro.message, 'danger'); } finally { $('salvar').disabled = false; }
});
montarCampos(); listar();
