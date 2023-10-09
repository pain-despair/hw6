const date = parseFloat(prompt('Enter your birth date'))
const city = prompt('Enter your city name')
const sport = prompt('Enter your favourite sport')
const year = parseFloat(2023)
const calcAge = year - date
let capital
let star
if (isNaN(date)){
    alert('Something wrong')
} else {
    alert(`Your age is ${calcAge}`)
}


switch (city) {
    case 'Kyiv':   
        capital = 'Ukraine'
        break
    case 'Washington':
        capital = 'United States of America'
        break
    case 'London':
        capital = 'Great Britain'
        break
    case 'Moscow':
        capital = 'PARASHA'
        break

        default:
            alert(`Your age is ${calcAge} You live in the ${city}`)
            break;
}
if (capital !== undefined) {
    alert(`You live in the capital of ${capital}`)
}


switch (sport) {
    case 'football':
        star = 'Lionel Messi'
        break
    case 'basketball':
        star = 'Michael Jordan'
        break
    case 'box':
        star = 'Mike Tyson'
        break
}
if (star !== undefined) {
    alert(`Wow! You wanna be like ${star}`)
}



