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

         let i = 0
         for( i ; i < tarefas.length; i++){
         let novaTarefa = document.createElement("li")
         novaTarefa.textContent = tarefas[i]
         listaTarefas.appendChild(novaTarefa)
         }
    }
