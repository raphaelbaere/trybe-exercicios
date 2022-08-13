#!/bin/bash

delay=2

# Exercicio 1

echo -e "Abrindo diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercicio 2

echo -e "\nCriando arquivo skills2.txt"
cat > skills2.txt
Internet
Unix
Bash

# Exercicio 3

echo -e "\nAdicionando 5 linhas ao arquivo skills2.txt"
cat >> skills2.txt
JavaScript
SQL
Python
HTML
CSS
sleep $delay

# Exercicio 4

echo -e "\nContando linhas do arquivo skills2.txt"
cat skills2.txt | wc -l
sleep $delay

# Exercicio 5

echo -e "\nCriando arquivo top_skills.txt com as 3 primeiras skills do arquivo skills2.txt depois de ordenado alfabeticamente"
cat skills2.txt | sort | head -3 > top_skills.txt
sleep $delay

# Exercicio 6

echo -e "\nCrie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha."

cat > phrases2.txt
Algumas
frases
de
sua
escolha
sleep $delay

# Exercicio 7

echo -e "\nContando o numero de linhas que contem br em phrases2.txt"
grep -c br phrases2.txt
sleep $delay

# Exercicio 8

echo -e "\nContando o numero de linhas que NÃO contem br em phrases2.txt"
grep -vc br phrases2.txt
sleep $delay

# Exercicio 9

cat >> phrases2.txt
Brasil
Alemanha

# Exercicio 10

echo -e "\nCriando banch_of_thingies.txt
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $delay

# Exercicio 11

echo -e "\Crie um novo arquivo bunch_of_things_ordered.txt com o conteúdo do arquivo bunch_of_things.txt ordenado."
cat bunch_of_things.txt | sort > bunch_of_things_ordered
sleep $delay