let nome = document.querySelector('#user_name')
let email = document.querySelector('#user_email')
let lista = document.querySelector('.list_users')
let botaoAdiciona = document.querySelector('.js-addUser')
let formulario = document.querySelector('.user_form')
let clientes = [{'name': 'Betinho Barros', 'email':'betinhobarros@summereletrobarros.com'}, {'name': 'Betoso Barros', 'email':'betinhobarros@summereletrobarros.com'}]

new function() {
    mostraClientes();
}

botaoAdiciona.addEventListener('click', function(event){
    event.preventDefault()
    adicionaClientes()
    mostraClientes()
    formulario.reset()
})

function adicionaClientes() {
    clientes.push({'name':nome.value, 'email':email.value})
}

function mostraClientes() {
    let body = [];
    for (let index = 0; index < clientes.length; index++) {
        body.push(`
            <tr>
                <td>${clientes[index].name}</td>
                <td>${clientes[index].email}</td>
            </tr>
        `)
    }
    lista.innerHTML = body.join('')
}
