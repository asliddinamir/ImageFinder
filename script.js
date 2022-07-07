const base_url = 'https://api.unsplash.com/search/photos?query='
const api_key = 'hwdI79vJK1W6rxdlUYuER9vAfyzVcO9stsYOhnl-vK0'
const searchBtn = document.getElementById('input')
const Btn = document.getElementById('btn')
const tittleDiv = document.getElementById('tittle')
const imagesDiv = document.getElementById('images')
const images2Div = document.getElementById('images2')
const images3Div = document.getElementById('images3')
const images4Div = document.getElementById('images4')
const images5Div = document.getElementById('images5')
const images6Div = document.getElementById('images6')
const images7Div = document.getElementById('images7')
const images8Div = document.getElementById('images8')
const images9Div = document.getElementById('images9')
const images10Div = document.getElementById('images10')

searchBtn.addEventListener('keypress', func)
Btn.addEventListener('click', fetchFunc)

function func(e) {
    if (e.keyCode == 13) {
        fetchFunc()
    }
}



function fetchFunc() {
    let query = searchBtn.value
    fetch(`${base_url}${query}&client_id=${api_key}`)
        .then(a => a.json())
        .then(data => {
            console.log(data);
            if (data.total === 0) {
                 tittleDiv.innerText = 'No results'
                 imagesDiv.innerHTML = ''
                 images2Div.innerHTML = ''
                 images3Div.innerHTML = ''
                 images4Div.innerHTML = ''
                 images5Div.innerHTML = ''
                 images6Div.innerHTML = ''
                 images7Div.innerHTML = ''
                 images8Div.innerHTML = ''
                 images9Div.innerHTML = ''
                 images10Div.innerHTML = ''
                console.log('NOOOOOOOOOOOOOOO')
            }else if(data.total === 1){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = ''
                images3Div.innerHTML = ''
                images4Div.innerHTML = ''
                images5Div.innerHTML = ''
                images6Div.innerHTML = ''
                images7Div.innerHTML = ''
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 2){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = ''
                images4Div.innerHTML = ''
                images5Div.innerHTML = ''
                images6Div.innerHTML = ''
                images7Div.innerHTML = ''
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 3){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = ''
                images5Div.innerHTML = ''
                images6Div.innerHTML = ''
                images7Div.innerHTML = ''
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 4){
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = ''
                images6Div.innerHTML = ''
                images7Div.innerHTML = ''
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 5){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = `
                <a href = '${data.results[4].urls.regular}' target = '_blank'>
                <img src='${data.results[4].urls.regular}'></a>`
                images6Div.innerHTML = ''
                images7Div.innerHTML = ''
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 6){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = `
                <a href = '${data.results[4].urls.regular}' target = '_blank'>
                <img src='${data.results[4].urls.regular}'></a>`
                images6Div.innerHTML = `
                <a href = '${data.results[5].urls.regular}' target = '_blank'>
                <img src='${data.results[5].urls.regular}'></a>`
                images7Div.innerHTML = ''
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 7){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = `
                <a href = '${data.results[4].urls.regular}' target = '_blank'>
                <img src='${data.results[4].urls.regular}'></a>`
                images6Div.innerHTML = `
                <a href = '${data.results[5].urls.regular}' target = '_blank'>
                <img src='${data.results[5].urls.regular}'></a>`
                images7Div.innerHTML = `
                <a href = '${data.results[6].urls.regular}' target = '_blank'>
                <img src='${data.results[6].urls.regular}'></a>`
                images8Div.innerHTML = ''
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 8){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = `
                <a href = '${data.results[4].urls.regular}' target = '_blank'>
                <img src='${data.results[4].urls.regular}'></a>`
                images6Div.innerHTML = `
                <a href = '${data.results[5].urls.regular}' target = '_blank'>
                <img src='${data.results[5].urls.regular}'></a>`
                images7Div.innerHTML = `
                <a href = '${data.results[6].urls.regular}' target = '_blank'>
                <img src='${data.results[6].urls.regular}'></a>`
                images8Div.innerHTML = `
                <a href = '${data.results[7].urls.regular}' target = '_blank'>
                <img src='${data.results[7].urls.regular}'></a>`
                images9Div.innerHTML = ''
                images10Div.innerHTML = ''
            }else if(data.total === 9){
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = `
                <a href = '${data.results[4].urls.regular}' target = '_blank'>
                <img src='${data.results[4].urls.regular}'></a>`
                images6Div.innerHTML = `
                <a href = '${data.results[5].urls.regular}' target = '_blank'>
                <img src='${data.results[5].urls.regular}'></a>`
                images7Div.innerHTML = `
                <a href = '${data.results[6].urls.regular}' target = '_blank'>
                <img src='${data.results[6].urls.regular}'></a>`
                images8Div.innerHTML = `
                <a href = '${data.results[7].urls.regular}' target = '_blank'>
                <img src='${data.results[7].urls.regular}'></a>`
                images9Div.innerHTML = `
                <a href = '${data.results[8].urls.regular}' target = '_blank'>
                <img src='${data.results[8].urls.regular}'></a>`
                images10Div.innerHTML = ''
            }
            else{
                tittleDiv.innerText = `Search Results for "${searchBtn.value}"`
                imagesDiv.innerHTML = `
                <a href = '${data.results[0].urls.regular}' target = '_blank'>
                <img src='${data.results[0].urls.regular}'></a>`
                images2Div.innerHTML = `
                <a href = '${data.results[1].urls.regular}' target = '_blank'>
                <img src='${data.results[1].urls.regular}'></a>`
                images3Div.innerHTML = `
                <a href = '${data.results[2].urls.regular}' target = '_blank'>
                <img src='${data.results[2].urls.regular}'></a>`
                images4Div.innerHTML = `
                <a href = '${data.results[3].urls.regular}' target = '_blank'>
                <img src='${data.results[3].urls.regular}'></a>`
                images5Div.innerHTML = `
                <a href = '${data.results[4].urls.regular}' target = '_blank'>
                <img src='${data.results[4].urls.regular}'></a>`
                images6Div.innerHTML = `
                <a href = '${data.results[5].urls.regular}' target = '_blank'>
                <img src='${data.results[5].urls.regular}'></a>`
                images7Div.innerHTML = `
                <a href = '${data.results[6].urls.regular}' target = '_blank'>
                <img src='${data.results[6].urls.regular}'></a>`
                images8Div.innerHTML = `
                <a href = '${data.results[7].urls.regular}' target = '_blank'>
                <img src='${data.results[7].urls.regular}'></a>`
                images9Div.innerHTML = `
                <a href = '${data.results[8].urls.regular}' target = '_blank'>
                <img src='${data.results[8].urls.regular}'></a>`
                images10Div.innerHTML = `
                <a href = '${data.results[9].urls.regular}' target = '_blank'>
                <img src='${data.results[9].urls.regular}'></a>`
                }
            searchBtn.value = ''
        })
}
