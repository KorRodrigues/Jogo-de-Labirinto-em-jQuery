<?php
    $level = @$_GET['level'];
    $passos = @$_GET['passos'];
    $bombs = @$_GET['bombs'];
    $enemy = @$_GET['enemy'];

    $pontos = (($passos)+($enemy*10)+($bombs*(-2)))*($level*0.60);
    if(!isset($_GET['win'])){
        $pontos = ($passos+($enemy*10)+($bombs*(-2)))*($level*0.60)/2;
    }

    if(isset($_POST['submit'])){
        $nome = $_POST['nome'];
        $turma = $_POST['turma'];
        $ponto = round($_POST['pontos']);

        //conexão com o servidor
        $conect = mysql_connect("127.0.0.1", "root", "root") or die ("<h1>Falha na coneco com o Banco de Dados!</h1>");

        // Caso a conexão seja aprovada, então conecta o Banco de Dados.
        mysql_select_db("labitinto");

        mysql_query("INSERT INTO `participantes` (`nome`, `turma`, `pontos`) values ('$nome', '$turma', '$ponto')") or die(mysql_error());

        header("location:index.php");
    }

?>
<html>
<head>

</head>

<body>
    <div>
        <?php echo "Fez ".$pontos." pontos!"?>
        <form name="form" method="post" action="win.php">
            <div>
                <label form="nome">Nome</label>
                <input name="nome" type="text" placeholder="Nome">
            </div>
            <div>
                <label form="turma">Turma</label>
                <input name="turma" type="text" placeholder="Turma ou Visitante">
            </div>
            <input name="pontos" type="hidden" value="<?php echo $pontos;?>">
            <input type="submit" name="submit" value="Salvar">
        </form>
    </div>
</body>
</html>