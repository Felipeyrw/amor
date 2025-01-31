const dataAlvo = new Date(2025, 06, 08, 0, 0, 0).getTime(); // Exemplo: 25 de Dezembro de 2025

        function atualizarContador() {
            const agora = new Date().getTime();
            const diferenca = dataAlvo - agora;

            if (diferenca <= 0) {
                document.getElementById("contador").innerText = "Tempo expirado! 🚀";
                clearInterval(intervalo);
                return;
            }

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            document.getElementById("contador").innerText = 
                `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        // Atualiza a cada segundo
        const intervalo = setInterval(atualizarContador, 1000);
        atualizarContador(); // Chama a função imediatamente para evitar atraso de 1s
