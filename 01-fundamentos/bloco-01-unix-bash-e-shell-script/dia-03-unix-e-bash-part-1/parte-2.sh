#!/bin/bash

delay=2

# Exercicio 1

echo -e "\nAbrindo diretorio unix_tests"
cd unix_tests
echo -e "\nBaixando arquivo countries.txt"

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercicio 2

echo -e "\nMostrando o conteudo do arquivo countries.txt"
cat countries.txt
sleep $delay

# Exercicio 3

echo -e "\nMostre o conteúdo de countries.txt, página por página, até encontrar a Zambia."
less countries.txt
sleep $delay

# Exercicio 4
echo -e "\nMostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
"
less countries.txt /Zambia
sleep $delay

# Exercicio 5

echo -e "\nBuscando Brazil no arquivo countries.txt"
grep "Brazil" countries.txt
sleep $delay

# Exercicio 6

echo -e "\nBuscando brazil (lowercase) no arquivo countries.txt"
grep -i "Brazil" countries.txt
sleep $delay

# Criando arquivo que sera usado para os proximos exercicios

cat > phrases.txt
Algumas
frases
de
sua
escolha

# Exercicio 7

echo -e "\nBuscando frases que nao contenham a palavra fox"
grep -v "fox" phrases.txt
sleep $delay

# Exercicio 8

echo -e "\nContando o numero de palavras do arquivo phrases"
cat phrases.txt | wc -w
sleep $delay

# Exercicio 9

echo -e "\nContando o numero de linhas do arquivo phrases"
cat phrases.txt | wc -l
sleep $delay

# Exercício 10

echo -e "\nCriando os arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf
sleep $delay

# Exercício 11

echo -e "\nListando todos os arquivos do diretorio unix_tests"
ls -a
sleep $delay

# Exercício 12

echo -e "\nListando todos os arquivos do diretorio unix_tests que terminem com txt"
ls -a *.txt
sleep $delay

#Exercício 13

echo -e "\nListando todos os arquivos do diretorio unix_tests que terminem com tbt ou txt"
ls -a *.t?t
sleep $delay

# Exercicio 14

echo -e "\nAcessando manual do comando ls"
man ls
sleep $delay