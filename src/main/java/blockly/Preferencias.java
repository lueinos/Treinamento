package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Preferencias {

public static final int TIMEOUT = 300;

/**
 *
 * preferencias
 *
 * @author Luana Amaro Araujo
 * @since 11/01/2023 09:57:23
 *
 */
public static Var cores() throws Exception {
 return new Callable<Var>() {

   private Var dados = Var.VAR_NULL;

   public Var call() throws Exception {
    dados =
    cronapi.database.Operations.query(Var.valueOf("app.entity.alunos"),Var.valueOf("select \n	a.cores, \n	COUNT(a.id) \nfrom \n	alunos a  \ngroup by \n	a.cores"));
    cronapi.chart.Operations.createChart(
    Var.valueOf("graficocores"),
    Var.valueOf("bar"),
    cronapi.database.Operations.getColumn(dados,
    Var.valueOf("this[0]")), Var.VAR_NULL,
    cronapi.chart.Operations.createChartSerie(
    Var.valueOf("Preferencia de Cores dos Alunos"),
    cronapi.database.Operations.getColumn(dados,
    Var.valueOf("this[1]")), Var.VAR_NULL));
    return Var.VAR_NULL;
   }
 }.call();
}

}

