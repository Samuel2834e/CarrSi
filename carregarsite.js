import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

document.addEventListener("DOMContentLoaded", function () {

    conectar();

    function verificar() {
        let senha = document.getElementById("senha2").value;
        const database = getDatabase();
        const usersRef = ref(database, senha);

        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                let senhav = snapshot.key;
                let b = document.querySelector("body");
                if (senhav == senha) {
                    b.innerHTML = snapshot.val();
                } else {
                    b.style.display = "none";
                    console.log("Errada");
                }
            } else {
                console.log("O nó 'usuarios' não existe no banco de dados.");
            }
        }).catch((error) => {
            console.log("Erro ao obter os dados:", error);
        });
    }

    const button = document.getElementById('btn');
    button.addEventListener('click', verificar);
});
