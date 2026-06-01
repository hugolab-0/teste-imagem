'use stric'

export function criarPreview() {
    const formulario = document.createElement('form')
    
    const previewContainer = document.createElement('div')  
    previewContainer.classList.add('preview-container')

    const inputFile = document.createElement('input')      
    inputFile.id = 'preview-input'                         
    inputFile.className = 'preview-input'            
    inputFile.type = 'file'
    inputFile.accept = 'image/*'

    const previewLabel = document.createElement('label')
    previewLabel.className = 'preview-label'
    previewLabel.htmlFor   = 'preview-input'

    const previewImage = document.createElement('img')
    previewImage.className = 'preview-image'
    previewImage.id = 'preview-image'
    previewImage.src = './img/upload-icon.svg'

    const containerBtn = document.createElement('div')  
    containerBtn.classList.add('button-container')

    const buttonSalvar = document.createElement('button')
    buttonSalvar.class  ="button"
    buttonSalvar.id     = "upload-button"
    buttonSalvar.type   = "button"

    const buttonCancelar = document.createElement('button')
    buttonCancelar.class  ="button"
    buttonCancelar.type   = "button"

    previewContainer.append(inputFile, previewLabel)       

    formulario.append(previewContainer)
    return formulario
}