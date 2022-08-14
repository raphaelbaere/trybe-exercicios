#!/bin/bash

delay=2

# Exercício 1

echo -e "\nListe todos os processos;"
ps
sleep $delay

# Exercicio 2

echo -e "\nAgora use o comando sleep 30 & ;"
sleep 30 &
sleep $delay

# Exercício 3

echo -e "\nUse a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);"
ps
kill 6635
sleep $delay

# Exercício 4

echo -e "\nExecute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;"
sleep 30
ctrl + z
bg
sleep $delay

# Exercício 5

echo -e "\nCrie um processo em background que rode o comando sleep por 300 segundos."
sleep 300 &
sleep delay$

# Exercício 6

echo -e "\nCrie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente."
sleep 200
ctrl + z
bg
sleep 100 
ctrl + z
bg
sleep delay$

# Exercício 7

echo -e "\nVerifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo."
jobs
fg (pid)
ctrl + z

# Exercício 8

echo -e "\nRetome a execução do processo sleep 100 em background com o comando bg."
ps
bg (pid)

# Exercício 9

echo -e "\nTermine a execução de todos os processos sleep (mate os processos)."
kill all
