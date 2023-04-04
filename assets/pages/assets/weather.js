const api = {
    key: "4e26140e7f2310bad22af57df7c1a350", // chave da api
    base: "https://api.openweathermap.org/data/2.5/", // api base
    lang: "pt_br", // linguagem
    units: "metric"
}

const cidade = document.querySelector('.cidade')
const num_tempo = document.querySelector('.caixa-tempo div');
const temp_unit = document.querySelector('.caixa-tempo span');
const date = document.querySelector('.date');
const tempo_t = document.querySelector('.tempo');
const menor_maior = document.querySelector('.menor-maior');
const img_caixa = document.querySelector('.img-caixa');

//const confirmar = () => {
    //city1.innerHTML = ('Sua cidade e: ' + city.value)
    //document.getElementById('city').remove()
    //document.getElementById('cid1').remove()
    //document.getElementById('confirmar').remove()
//}

function tempo() {
    var informacoes = document.querySelector('#informacoes')
    informacoes.style.visibility = 'visible'

    
    var city = document.querySelector('#city').value
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`) // fetch busca recursos da base da api // 
        .then(response => { // se nao der resposta ele responde o erro. //
            if (!response.ok) {
                throw new Error(`Erro > Digite sua cidade corretamente.`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => { // se der resposta ele executa a funcao e apaga a caixa de input. //
            resultados(response)
            
        });
}

function resultados(weather) {
    console.log(weather)

    cidade.innerText = `${weather.name}, ${weather.sys.country}` // troca a div cidade pra cidade e pais que foi escrito

    let now = new Date();
    date.innerText = dateBuilder(now); // atualiza a data atual

    let iconName = weather.weather[0].icon;
    img_caixa.innerHTML = `<img src="assets/icons/${iconName}.png">`; // troca pelo icone resultado pela API

    let temperature = `${Math.round(weather.main.temp)}` // mostra a temperatura da api
    num_tempo.innerHTML = temperature + `°C`; // mostra a temperatura da api

    tempo_tempo = weather.weather[0].description;
    tempo_t.innerText = capitalizeFirstLetter(tempo_tempo) // adiciona a condicao temporal

    menor_maior.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`; // coloca a maior e mnor temp do dia
}

function dateBuilder(d) { // constroi a data
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()]; //getDay: 0-6
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}