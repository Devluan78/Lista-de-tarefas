 let tarefas = []
 
 function adicionarTarefa() {

      //variável que recebe um elemento do html, vindo de im ID específico!
      const inputTarefa = document.getElementById("inputTarefa")
      //Variável que receber um valor de outra, no caso de inputTarefa
      let tarefa = inputTarefa.value.trim()
      const mensagem = document.getElementById("mensagem")
      const botao = document.getElementById("botao")

        if(tarefa == ""){
        let mensagemErro = "Campo vazio!Preencha novamente."
         mensagem.textContent = mensagemErro
         mensagem.style.color = "#A34743";
      
      }else{
         let mensagemSucesso = "Tarefa adicionada com sucesso!"
         mensagem.textContent = mensagemSucesso
         mensagem.style.color = "#28A745";
         tarefas.push(tarefa)
         renderizarTarefas()

      }
      //limpa o input do usuário
      inputTarefa.value = ""

    }

    function renderizarTarefas(){

         const listaTarefas = document.getElementById("listaTarefas")
         listaTarefas.innerHTML = ""

         for( let i = 0 ; i < tarefas.length; i++){
         let novaTarefa = document.createElement("li")
         novaTarefa.textContent = tarefas[i]
         

         let botaoRemover = document.createElement("button")
         botaoRemover.className = "remover"
         botaoRemover.textContent = "Remover"
         botaoRemover.onclick = () => removerTarefa(i)
         
         let botaoEditar = document.createElement("button")
         botaoEditar.className = "editar"
         botaoEditar.textContent = "Editar"
         botaoEditar.onclick = () => editarTarefa(i)

         novaTarefa.appendChild(botaoRemover)
         novaTarefa.appendChild(botaoEditar)
         listaTarefas.appendChild(novaTarefa)

         }
    }

    function removerTarefa(i){
       tarefas.splice(i,1)
       renderizarTarefas()
    }

    function editarTarefa(i){
      let tarefaEditada =  prompt("Edite a tarefa: ")
      if(tarefaEditada.trim() !== ""){
         tarefas[i] = tarefaEditada
         renderizarTarefas()
      }   
    }

    function limparLista(){
      if(tarefas.length >= 1){
      tarefas.length = 0
      renderizarTarefas()
      const mensagem = document.getElementById("mensagem")
      mensagem.textContent = "Lista de tarefas limpa com sucesso!"
      }else {
      const mensagem = document.getElementById("mensagem")
      mensagem.textContent = "Não há nenhuma tarefa!"
      }
   }
