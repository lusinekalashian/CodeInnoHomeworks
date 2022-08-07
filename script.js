function fetchData(url) {
    const BASE_URL = 'https://ghibliapi.herokuapp.com/'
    const newUrl = url.startsWith('/') ? url.slice(1) : url
    return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json())
}


// fetchData('people').then((data) => console.log(data))
// fetchData('films').then((data) => console.log(data))

init()

function init() {
    const rootEl = document.querySelector('#root')
    const divEl = App()
    rootEl.append(divEl)

}

function App() {
    const container = document.createElement('div')
    container.setAttribute('component-name', 'App')

    const state = {
        people: [],
    }

    window.state = state

    function setState(obj) {
        for (let key in obj) {
            state[key] = obj[key]
        }
        render()
    }

    function render() {
        container.innerHTML = ''
        const peopleEl = People(state.people)
        container.append(peopleEl)
    }

    fetchData('/people/').then((data) => {
        setState({ people: data })
    })

    render()

    return container
}

function People(people) {
    const container = document.createElement('div')
    container.setAttribute('component-name', 'People')

    people.forEach(({ name, age, gender, hair_color, eye_color,films }) => {
        const userEl = Person(name, age, gender,hair_color,eye_color,films)
        container.append(userEl)

    })

    return container
}

function Person(name, age, gender,hair_color,eye_color, films) {
    const template = document
        .querySelector('#person-template')
        .content.cloneNode(true)

    template.querySelector('.name').innerHTML = "Name: " + name
    template.querySelector('.age').innerHTML = "Age: " + age
    template.querySelector('.gender').innerHTML = "Gender: " + gender
    template.querySelector('.hair_color').innerHTML = "Hair Color: " + hair_color
    template.querySelector('.eye_color').innerHTML = "Eye Color: " + eye_color

    let btn = document.createElement("button");
    btn.innerHTML = "Film img";
    template.querySelector('.button').appendChild(btn);
    btn.onclick = getFilmPngUrl.bind(films[0]);

    return template
}

function getFilmPngUrl(){
    let filmObj = fetch(this)
        .then((response) => response.json())
        .then((data) => location.href = data.image);
}


