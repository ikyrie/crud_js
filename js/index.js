let list = document.querySelector('.list_users')
let addUser = document.querySelector('.js-addUser')
let userName = document.querySelector('#user_name')
let userEmail = document.querySelector('#user_email')
let users = [{'name':'Beto Barros', 'email':'betinhobarros@summereletrobarros.com'},{'name':'Beto', 'email':'betinhobarros@summereletrobarros.com'}]
new function (){
    list.innerHTML = addClients();
}

addUser.addEventListener('click', function(event){
    event.preventDefault()
    users.push({'name':userName.value, 'email':userEmail.value})
    list.innerHTML = addClients()
})

function addClients() {
    let body = []
    for (let index = 0; index < users.length; index++) {
        body.push(`
                    <tr>
                        <td>${users[index].name}</td>
                        <td>${users[index].email}</td>
                    </tr>
                `)
    }
    return body.join('')
}
