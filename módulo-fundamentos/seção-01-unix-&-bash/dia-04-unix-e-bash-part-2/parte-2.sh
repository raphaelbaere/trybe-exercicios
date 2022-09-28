#!/bin/bash

delay=2

# Exercicio 1

echo -e "\nNavegando para o diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercicio 2

echo -e "\nListando permissoes de arquivos com ls -l"
ls -l
sleep $delay

# Exercício 3

echo -e "\nMudando permissoes do arquivo bunch_of_things.txt"

chmod u+rw bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay

# Exercício 4

echo -e "\nTire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;"
chmod a-w bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay

# Exercício 5

echo -e "\nVolte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt."
chmod 644 bunch_of_things.txt
sleep $delay
