'use strict'

export function criarLogin() {
    const formulario = document.createElement('form')

    const emailinput = document.createElement('input')
    emailinput.type = 'email'
    emailinput.placeholder = 'form-input'

    const senhaInput = document.createElement('input')
    senhaInput.type = 'password'
    senhaInput.placeholder = 'form-input'

    const loginButton = document.createElement('button')
    loginButton.type = 'button'
    loginButton.textContent = 'Login'
    loginButton.className = 'button'
    loginButton.onclick = () => renderizarPagina('preview')

    formulario.append(emailinput, senhaInput, loginButton)
    

    return formulario
}
