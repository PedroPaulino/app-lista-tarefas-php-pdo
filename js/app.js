function editar(id, txt_tarefa){
			
    //criar um form de edição
    let form = document.createElement('form');
    form.action = 'tarefa_controller.php?acao=atualizar';
    form.method = 'post';
    form.className = 'row';

    //criar um input para entrada do texto
    let inputTarefa = document.createElement('input');
    inputTarefa.type = 'text';
    inputTarefa.name = 'tarefa';
    inputTarefa.className = 'col-9 form-control';
    inputTarefa.value = txt_tarefa;

    //criar um input hidden para guardar o id da tarefa
    let inputId = document.createElement('input');
    inputId.type = 'hidden';
    inputId.name = 'id';
    inputId.value = id;


    //criar um button para envio do form
    let button = document.createElement('button');
    button.type = 'submit';
    button.className = 'col-3 btn btn btn-info';
    button.innerHTML = 'Atualizar';

    //incluir inputTarefa no form
    form.appendChild(inputTarefa);

    //incluir inputId no form
    form.appendChild(inputId);

    //incluir button no form
    form.appendChild(button);

    //Teste
    //console.log(form);
    //alert(id)

    //Selecionar a div tarefa
    let tarefa = document.getElementById('tarefa_'+id);

    //Limpar o texto da tarefa para a inclusão do form
    tarefa.innerHTML = '';

    //Incluir form na página
    tarefa.insertBefore(form, tarefa[0]);

    //alert(txt_tarefa)
}

function remover(id){
    location.href = 'todas_tarefas.php?acao=remover&id='+id;
    
}

function marcarRealizada(id){
    location.href = 'todas_tarefas.php?acao=marcarRealizada&id='+id;
}