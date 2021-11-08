class Validation {
  isEmailValido(val) {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    if (!emailPattern.test(val)) return 'E-mail inválido.'

    return emailPattern.test(val) || 'E-mail inválido.'
  }

  isTamanhoValido(val, tam) {
    if (!val) return 'Obrigatório'
    return val.length >= tam || 'Tamanho inválido.'
  }
}

export default new Validation()
