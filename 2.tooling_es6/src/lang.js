import franc from 'franc'

const whitelist = ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld']

export const lang = function(event) {
    const results = franc.all(event.target.value, {'whitelist': whitelist})

    document.getElementById('results').innerHTML = ''

    for (const result of results) {
        document.getElementById('results').innerHTML += `<div>${result[0]} ${result[1]}</div>`
    }
}

export const foo = function() {
    console.log('foo')
}

