// OBS: Para se executar é necessário ter o node instalado na máquina, logo que abrir o termina digite `node SJF.js`


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let numeroDeProcessos;
let processos = [];

rl.question("Quantos processos deseja simular? ", (input) => {
    numeroDeProcessos = parseInt(input);
    
    
    let count = 0;
    const askProcessTime = () => {
        if (count < numeroDeProcessos) {
            rl.question(`Digite o tempo do processo ${count + 1}: `, (tempo) => {
                processos.push(parseInt(tempo));
                count++;
                askProcessTime(); 
            });
        } else {
            
            rl.question("Escolha o algoritmo que deseja usar (Fifo/SJF/RR): ", (algoritmo) => {
                if (algoritmo.toUpperCase() === "SJF") {
                    
                    let sortedProcesses = [];

                    let tempProcesses = [...processos]; 

                    while (tempProcesses.length > 0) {
                        let minIndex = 0;

                        
                        for (let i = 1; i < tempProcesses.length; i++) {
                            if (tempProcesses[i] < tempProcesses[minIndex]) {
                                minIndex = i;
                            }
                        }

                        
                        sortedProcesses.push(tempProcesses[minIndex]);
                        
                        tempProcesses.splice(minIndex, 1);
                    }

                    
                    let turnaroundTimes = [];
                    let totalTurnaroundTime = 0;

                    for (let i = 0; i < sortedProcesses.length; i++) {
                        let turnaroundTime = 0;

                        
                        for (let j = 0; j <= i; j++) {
                            turnaroundTime += sortedProcesses[j];
                        }

                        turnaroundTimes.push(turnaroundTime);
                        totalTurnaroundTime += turnaroundTime;
                    }

                    
                    let tempoMedio = totalTurnaroundTime / sortedProcesses.length;

                    
                    console.log("O tempo de turnaround de cada processo foi:");
                    console.log(turnaroundTimes.join(" "));
                    console.log(`O tempo médio foi de ${tempoMedio.toFixed(2)}`);
                } else {
                    console.log("Algoritmo não suportado.");
                }
                rl.close(); 
            });
        }
    };

    askProcessTime();
});
