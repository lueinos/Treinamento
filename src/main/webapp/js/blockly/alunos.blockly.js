window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Alunos = window.blockly.js.blockly.Alunos || {};

/**
 * @function validador2
 *
 * cores
 *
 *
 * @author Luana Amaro Araujo
 * @since 10/01/2023 11:31:17
 *
 */
window.blockly.js.blockly.Alunos.validador2Args = [];
window.blockly.js.blockly.Alunos.validador2 = async function() {

  //
  if (this.cronapi.screen.getValueOfField("alunos.active.nome") == null) {
    //
    this.cronapi.screen.notify('warning','Preencha todos os campos!');
    //
    valido = false;
  } else {
    //
    valido = true;
  }
  return valido;
}

/**
 * @function gravar
 *
 *
 *
 *
 * @author Luana Amaro Araujo
 * @since 10/01/2023 11:31:17
 *
 */
window.blockly.js.blockly.Alunos.gravarArgs = [];
window.blockly.js.blockly.Alunos.gravar = async function() {

  //
  if ((await this.blockly.js.blockly.Alunos.validador2())) {
    //
    (await this.cronapi.screen.post("alunos"));
  } else {
    //
    this.cronapi.screen.notify('error','Por favor preencher');
  }
}
