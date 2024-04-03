
// script para quando a pertar o botao ver mais aparecer novas vagas mode de celular

function esconder(el){
    document.getElementById(el).style.display = 'none';
}

function mostra(el){
    document.getElementById(el).style.display = 'block';
}

function toggle(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = "block";
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}


// modal para quando apertar desistir da vaga e fechar ..



function abrirModal(){
    // cria um cont modal -- chamar o ID FADE
    const modal = document.getElementById('janela-modal')

    //classList.add cria uma clase . clase abrir 
    modal.classList.add('abrir')
    //add.eventlistener cria um evento -- evento de click
    modal.addEventListener('click', (e) => {
        //acontecera se o ID for clicado 
                        //  || significa ou se clicar fora irar fechar tambem
        if(e.target.id == 'fechar' || e.target.id == 'desistirr' )
        //quando a classe abrir existir ela sera removida
        modal.classList.remove('abrir')

    })

}

// criando a opcao de remove a vaga da tela quando desistir

function myFunction(){
    const list = document.getElementById("vaga-remove")
    
   
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
       
    }
}


function funcaoDesistir(event) {

    const list = document.getElementById("desistirr")
    list = event.target

    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
       
    }
}



