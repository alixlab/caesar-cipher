# Cifra de César

## Prefácio

Pequeno Alan e pequeno Christopher foram transportados da Londres de 1919 para o Brasil de 2019 e querem mandar mensagens criptografadas durante as aulas. Como bilhete de papel ficou no passado, decidiram usar um programa de computador simples e sofisticado, mas que entretesse o suficiente. Acharam um na internet que se baseia na Cifra de César e resolveram testar.

## Introdução

Júlio Cesar, ditador romano, conhecido por ser um dos maiores comandantes militares da história, escrevia mensagens cifradas, assim as protegia de terceiros e inimigos. Ele deslocava três posições das letras do alfabeto, então a letra "A" passava a ser letra "D", "B" passava a ser "E" e assim por diante.
Para começar o programa, escreva a mensagem cifrada no campo **mensagem** e no campo **deslocamento** escolha quantas posições você deseja deslocar, de 1 a 25, mas o valor padrão é 3.

## Definição do Produto

O código fornece uma página que cifra de forma automática uma mensagem inserida pelo usuário, possuindo duas funções, uma que cifra a mensagem e outra que decifra.

### Como funciona?
Na página inicial é exibido um texto explicando como funciona a Cifra de César, além dos campos **mensagem** e **deslocamento**. O usuário insere a mensagem e escolhe a quantidade de posições a ser deslocada, de 1 a 25. Caso ele não escolha nada, o programa inicia com o valor padrão de 3.
Ele pode escolher entre cifrar e decifrar a mensagem, clicando no seu respectivo botão. Em ambos os casos, o botão chama uma função (_encode_ ou _decode_), que processará a mensagem, devolvendo-a em um campo de texto logo abaixo dos botões.
Confira o diagrama de blocos abaixo:

![Diagrama de Blocos do Cypher](https://github.com/alixlab/caesar-cipher/blob/master/diagrama_cypher.png)
