<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        const carros = [
        'Gol',
        'Fusca',
        'Virtus',
        'Ka']
        carros.push ('Fiesta')
        carros.unshift('Palio')

        /*
        Splice serve para: | Splice is used to:

        Excluir itens a partir de uma posição | Delete items starting from a position
        ex: carros.splice(2,3) -> exclui 3 itens a partir da posição 2 | deletes 3 items starting from position 2

        Inserir itens a partir de uma posição | Insert items starting from a position
        ex: carros.splice(3, 0, 'Uno') -> insere o Uno a partir da posição 3, sem excluir nenhum item | inserts Uno starting from position 3, without deleting any item

        alterar itens a partir de uma posição | Replace items starting from a position
        ex: carros.splice(1,1, 'Uno') -> adicionar o item 'Uno' na posição 1 após apagar o item que estava lá (Fusca) | adds the item 'Uno' at position 1 after deleting the item that was there (Fusca)
        
        */
        carros.splice(1, 0, 'Uno')
        console.table(carros)

        carros.sort()
        console.table(carros)

    </script>
</body>
</html>
