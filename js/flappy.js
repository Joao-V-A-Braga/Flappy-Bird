/* Pegando a "div" principal */
let app = document.createElement('div')
app.setAttribute('app', '')

/* Crinado os canos */
let cano_cima = document.createElement('div')
let cano_baixo = document.createElement('div')

/* Criando a "div" que armazena os canos*/

let div = document.createElement('div')
const adicionarCanos = (cano_cima, cano_baixo) => {

    let random = Math.trunc(Math.random() * (7 - 3) + 3) * 10 / 100 * 556

    cano_cima.style.height = random + 'px';
    cano_cima.style.borderTop = 'none'

    cano_baixo.style.height = 556 - random - 166 + 'px';

    cano_baixo.style.borderBottom = 'none'



    div.setAttribute('canos', '')
    div.appendChild(cano_cima)

    div.appendChild(cano_baixo)
    return div.cloneNode(true)
}

/* Adicionando a div(dos canos) à div principal*/
app.appendChild(adicionarCanos(cano_cima, cano_baixo))
app.appendChild(adicionarCanos(cano_cima, cano_baixo))
app.appendChild(adicionarCanos(cano_cima, cano_baixo))
app.appendChild(adicionarCanos(cano_cima, cano_baixo))

app.style.marginLeft = '700px'

divFlappy = document.querySelector('[wm-flappy]')

let img = document.createElement('img')
img.setAttribute('src', './imgs/passaro.png')
divFlappy.appendChild(img.cloneNode(true))

let cont = document.createElement('h4')

cont.innerHTML = 0
cont.setAttribute('contador','')

divFlappy.appendChild(cont.cloneNode(true))

divFlappy.appendChild(app.cloneNode(true))

document.querySelector('[wm-flappy] img').style.marginTop = '228px'


async function rodar(ativado) {
    contador = 0
    setInterval(() => {
        document.onkeypress = function (e) {
            let aux1 = parseInt(document.querySelector('[wm-flappy] img').style.marginTop.replace('px', '')) - 10
            if (aux1 > 0 && ativado) {
                document.querySelector('[wm-flappy] img').style.marginTop = aux1  + 'px'
            } 
        }
    }, 0);
    
    
    let canos = document.querySelector('[app] div')
    let cano = canos.children[0]
    setInterval(() => {
        h_can = cano.style.height.replace('px', '')
        let y_img = document.querySelector('[wm-flappy] img').getBoundingClientRect().top
        let y_cano = parseInt(cano.getBoundingClientRect().top) + parseInt(h_can)
        
        let w_cano = parseInt(cano.getBoundingClientRect().left)
        
        if ((y_img < y_cano || y_img > y_cano + 114) && w_cano <= 506) {
            console.log(document.querySelector('[wm-flappy] img').getBoundingClientRect().left)
            console.log(ativado)
            ativado = false
        }
        if (w_cano < 377) {
            canos = canos.nextElementSibling
            cano = canos.children[0]
            w_cano = parseInt(document.querySelector('[app] div div').getBoundingClientRect().left)

            document.querySelector('h4').innerHTML =`${++contador}`

        }
    }, 0);
    setInterval(() => {
        if(ativado) {
                let aux = parseInt(document.querySelector('[wm-flappy] img').style.marginTop.replace('px', '')) + 1
                if (aux < 506 && ativado) {
                    document.querySelector('[wm-flappy] img').style.marginTop = aux + 'px'
                }
                appMF = document.querySelector('[app]').style.marginLeft
                document.querySelector('[app]').style.marginLeft = appMF.replace('px', '') - 1 + 'px'
                if (appMF == '-70px') {
                    document.querySelector('[app]').style.marginLeft = 260 + 'px'
                    document.querySelector('[app]').removeChild(document.querySelector('[app] div'))
                    document.querySelector('[app]').appendChild(adicionarCanos(cano_cima, cano_baixo))
                }
        }
    },10);
}
let ativado = true
rodar(ativado)




