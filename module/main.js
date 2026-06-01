'use strict'

import { criarPreview } from './pages/preview.js'
import { criarLogin } from './pages/login.js'

const paginas = {
    preview: {
        titulo: 'Preview de Imagens',
        renderizar: criarPreview
    },
    login: {
        titulo: 'Login',
        renderizar: criarLogin
    }
}

function renderizarPagina(nomePagina) {
    const main = document.getElementById('main-content')

    const pagina = paginas[nomePagina].renderizar()
    main.appendChild(pagina)
}

renderizarPagina('preview')