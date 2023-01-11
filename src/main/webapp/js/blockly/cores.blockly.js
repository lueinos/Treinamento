window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Cores = window.blockly.js.blockly.Cores || {};

/**
 * @function validador
 *
 * cores
 *
 *
 * @author Luana Amaro Araujo
 * @since 10/01/2023 16:55:02
 *
 */
window.blockly.js.blockly.Cores.validadorArgs = [];
window.blockly.js.blockly.Cores.validador = async function() {

  //
  if (this.cronapi.screen.getValueOfField("cores.active.nome") == null) {
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
 * @since 10/01/2023 16:55:02
 *
 */
window.blockly.js.blockly.Cores.gravarArgs = [];
window.blockly.js.blockly.Cores.gravar = async function() {

  //
  if ((await this.blockly.js.blockly.Cores.validador())) {
    //
    (await this.cronapi.screen.post("cores"));
  } else {
    //
    this.cronapi.screen.notify('error','Por favor preencher');
  }
}
