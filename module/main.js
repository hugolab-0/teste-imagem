'use stric'

import {createPreview, criarPreview} from './pages/preview.js'

const main = document.getElementById('main-content')

const preview = criarPreview()
main.appendChild(preview)