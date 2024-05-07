'use strict'
// console.log("olá");

// Selecionando os ELEMENTOS do HTML
const  botaoBusca = document.querySelector("#buscar");
const  musicPopular = document.querySelector("#popularMusica");
const  musicPopularList = document.querySelector("#popularMusicaList");
const  musicGeneros = document.querySelector("#musicaGeneros");
const  musicGenerosList = document.querySelector("#musicaGenerosList");
const  musicPlayer = document.querySelector("#audioPlayer");
const  musicPlayerControl = document.querySelector("#audioPlayerControl");

const clientId = `TOYDPM68ZqmQ7EnsJaWbsr1Ya72ulX7yTJQnAVx2PZEi71nLHs0imFGvEVdGivaC`;
const redirectUri = `http://127.0.0.1:5500/`;



const authorizeUrl = `https://api.genius.com/oauth/authorize?client_id=${clientId}&redireccionamento_uri=${redirectUri}&escopo=REQUESTED_SCOPE&estado=SOME_STATE_VALUE&tipo_resposta=código`;
      





// Detectando quando o botão de BUSCA for acionado
botaoBuscar.addEventListener("click", async function(event){
    event.preventDefault();

    let musicaInformada;
        musicaInformada = botaoBusca.value;
  console.log(musicaInformada);
  
  
})
  
  
  let url = `https://viacep.com.br/ws/${cepInformado}/json/`;
  
  const resposta = await fetch(url);
  
  const dados = await resposta.json()
        console.log(dados);
