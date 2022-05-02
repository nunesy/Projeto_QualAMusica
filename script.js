let musics = [
    {titulo:'Higher Octane', artista:'Vans in Japan', src:'music/Higher Octane - Vans in Japan.mp3', img:'image/image6.jpg'},
    {titulo:'American Idle', artista:'RKVC', src:'music/American Idle - RKVC.mp3', img: 'image/image1.jpg'},
    {titulo:'Burlesque Heartache', artista:'RKVC', src:'music/Burlesque Heartache - RKVC.mp3', img: 'image/image2.jpg'},
    {titulo:'Outta Time', artista:'RKVC', src:'music/Outta Time - RKVC.mp3', img: 'image/image3.jpg'},
    {titulo:'That One Bar Scene', artista:'RKVC', src:'music/That One Bar Scene - RKVC.mp3', img: 'image/image4.jpg'},
    {titulo:'Tropical Thunder', artista:'RKVC', src:'music/Tropical Thunder - RKVC.mp3', img: 'image/image5.jpg'},
    {titulo:'Ensaio', artista:'Dark Vein', src:'music/music1.mp3', img: 'image/logo.png'}
];

let music = document.querySelector('audio');
let indexMusic = 0;

let durationMusic = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusic);

//events
document.querySelector('.botao-play').addEventListener('click', playMusic);

document.querySelector('.botao-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusic --;
    renderizarMusica(indexMusic);
});

document.querySelector('.posterior').addEventListener('click', () => {
    indexMusic ++;
    renderizarMusica(indexMusic);
});

//functions
function renderizarMusica(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musics[index].titulo;
        nomeArtista.textContent = musics[index].artista;
        imagem.src = musics[index].img;
        durationMusic.textContent = segundoParaMinuto(Math.floor(music.duration));

    });
}

function playMusic(){
    music.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundoParaMinuto(Math.floor(music.currentTime));
}

function segundoParaMinuto(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundo = segundos % 60;
    if(campoSegundo < 10){
        campoSegundo = '0' + campoSegundo;
    }

    return campoMinuto+':'+campoSegundo;
}

