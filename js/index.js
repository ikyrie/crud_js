let list = document.querySelector('.list_users')
let addUser = document.querySelector('.js-addUser')
let userName = document.querySelector('#user_name')
let userEmail = document.querySelector('#user_email')
let users = [{'name':'Beto Barros', 'email':'betinhobarros@summereletrobarros.com'},{'name':'Beto', 'email':'betinhobarros@summereletrobarros.com'}]
let body = []
new function start(){
    for (let index = 0; index < users.length; index++) {
        body.push(`
                    <tr>
                        <td>${users[index].name}</td>
                        <td>${users[index].email}</td>
                    </tr>
                `)
    }
    list.innerHTML = body.join('')
}

addUser.addEventListener('click', function(event){
    event.preventDefault()
    body += '<tr><td>' + userName.value + '</td><td>' + userEmail.value + '</td></tr>'
    list.innerHTML = body
})