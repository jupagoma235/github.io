// Lista de países y códigos ISO 3166-1 alpha-2 (puedes agregar más si lo deseas)
const countries = [
    { code: "AF", name: "Afganistán" }, { code: "AL", name: "Albania" }, { code: "DZ", name: "Argelia" },
    { code: "AD", name: "Andorra" }, { code: "AO", name: "Angola" }, { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" }, { code: "AU", name: "Australia" }, { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaiyán" }, { code: "BS", name: "Bahamas" }, { code: "BD", name: "Bangladés" },
    { code: "BB", name: "Barbados" }, { code: "BY", name: "Bielorrusia" }, { code: "BE", name: "Bélgica" },
    { code: "BZ", name: "Belice" }, { code: "BJ", name: "Benín" }, { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia y Herzegovina" }, { code: "BW", name: "Botsuana" }, { code: "BR", name: "Brasil" },
    { code: "BN", name: "Brunéi" }, { code: "BG", name: "Bulgaria" }, { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" }, { code: "KH", name: "Camboya" }, { code: "CM", name: "Camerún" },
    { code: "CA", name: "Canadá" }, { code: "CV", name: "Cabo Verde" }, { code: "CF", name: "República Centroafricana" },
    { code: "TD", name: "Chad" }, { code: "CL", name: "Chile" }, { code: "CN", name: "China" },
    { code: "CO", name: "Colombia" }, { code: "KM", name: "Comoras" }, { code: "CG", name: "Congo" },
    { code: "CD", name: "República Democrática del Congo" }, { code: "CR", name: "Costa Rica" },
    { code: "HR", name: "Croacia" }, { code: "CU", name: "Cuba" }, { code: "CY", name: "Chipre" },
    { code: "CZ", name: "Chequia" }, { code: "DK", name: "Dinamarca" }, { code: "DJ", name: "Yibuti" },
    { code: "DO", name: "República Dominicana" }, { code: "EC", name: "Ecuador" }, { code: "EG", name: "Egipto" },
    { code: "SV", name: "El Salvador" }, { code: "GQ", name: "Guinea Ecuatorial" }, { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" }, { code: "SZ", name: "Esuatini" }, { code: "ET", name: "Etiopía" },
    { code: "FJ", name: "Fiyi" }, { code: "FI", name: "Finlandia" }, { code: "FR", name: "Francia" },
    { code: "GA", name: "Gabón" }, { code: "GM", name: "Gambia" }, { code: "GE", name: "Georgia" },
    { code: "DE", name: "Alemania" }, { code: "GH", name: "Ghana" }, { code: "GR", name: "Grecia" },
    { code: "GT", name: "Guatemala" }, { code: "GN", name: "Guinea" }, { code: "GW", name: "Guinea-Bisáu" },
    { code: "GY", name: "Guyana" }, { code: "HT", name: "Haití" }, { code: "HN", name: "Honduras" },
    { code: "HU", name: "Hungría" }, { code: "IS", name: "Islandia" }, { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" }, { code: "IR", name: "Irán" }, { code: "IQ", name: "Irak" },
    { code: "IE", name: "Irlanda" }, { code: "IL", name: "Israel" }, { code: "IT", name: "Italia" },
    { code: "JM", name: "Jamaica" }, { code: "JP", name: "Japón" }, { code: "JO", name: "Jordania" },
    { code: "KZ", name: "Kazajistán" }, { code: "KE", name: "Kenia" }, { code: "KI", name: "Kiribati" },
    { code: "KP", name: "Corea del Norte" }, { code: "KR", name: "Corea del Sur" }, { code: "KW", name: "Kuwait" },
    { code: "KG", name: "Kirguistán" }, { code: "LA", name: "Laos" }, { code: "LV", name: "Letonia" },
    { code: "LB", name: "Líbano" }, { code: "LS", name: "Lesoto" }, { code: "LR", name: "Liberia" },
    { code: "LY", name: "Libia" }, { code: "LI", name: "Liechtenstein" }, { code: "LT", name: "Lituania" },
    { code: "LU", name: "Luxemburgo" }, { code: "MG", name: "Madagascar" }, { code: "MW", name: "Malaui" },
    { code: "MY", name: "Malasia" }, { code: "MV", name: "Maldivas" }, { code: "ML", name: "Malí" },
    { code: "MT", name: "Malta" }, { code: "MH", name: "Islas Marshall" }, { code: "MR", name: "Mauritania" },
    { code: "MU", name: "Mauricio" }, { code: "MX", name: "México" }, { code: "FM", name: "Micronesia" },
    { code: "MD", name: "Moldavia" }, { code: "MC", name: "Mónaco" }, { code: "MN", name: "Mongolia" },
    { code: "ME", name: "Montenegro" }, { code: "MA", name: "Marruecos" }, { code: "MZ", name: "Mozambique" },
    { code: "MM", name: "Birmania" }, { code: "NA", name: "Namibia" }, { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" }, { code: "NL", name: "Países Bajos" }, { code: "NZ", name: "Nueva Zelanda" },
    { code: "NI", name: "Nicaragua" }, { code: "NE", name: "Níger" }, { code: "NG", name: "Nigeria" },
    { code: "MK", name: "Macedonia del Norte" }, { code: "NO", name: "Noruega" }, { code: "OM", name: "Omán" },
    { code: "PK", name: "Pakistán" }, { code: "PW", name: "Palaos" }, { code: "PA", name: "Panamá" },
    { code: "PG", name: "Papúa Nueva Guinea" }, { code: "PY", name: "Paraguay" }, { code: "PE", name: "Perú" },
    { code: "PH", name: "Filipinas" }, { code: "PL", name: "Polonia" }, { code: "PT", name: "Portugal" },
    { code: "QA", name: "Catar" }, { code: "RO", name: "Rumanía" }, { code: "RU", name: "Rusia" },
    { code: "RW", name: "Ruanda" }, { code: "KN", name: "San Cristóbal y Nieves" }, { code: "LC", name: "Santa Lucía" },
    { code: "VC", name: "San Vicente y las Granadinas" }, { code: "WS", name: "Samoa" }, { code: "SM", name: "San Marino" },
    { code: "ST", name: "Santo Tomé y Príncipe" }, { code: "SA", name: "Arabia Saudita" }, { code: "SN", name: "Senegal" },
    { code: "RS", name: "Serbia" }, { code: "SC", name: "Seychelles" }, { code: "SL", name: "Sierra Leona" },
    { code: "SG", name: "Singapur" }, { code: "SK", name: "Eslovaquia" }, { code: "SI", name: "Eslovenia" },
    { code: "SB", name: "Islas Salomón" }, { code: "SO", name: "Somalia" }, { code: "ZA", name: "Sudáfrica" },
    { code: "ES", name: "España" }, { code: "LK", name: "Sri Lanka" }, { code: "SD", name: "Sudán" },
    { code: "SR", name: "Surinam" }, { code: "SE", name: "Suecia" }, { code: "CH", name: "Suiza" },
    { code: "SY", name: "Siria" }, { code: "TW", name: "Taiwán" }, { code: "TJ", name: "Tayikistán" },
    { code: "TZ", name: "Tanzania" }, { code: "TH", name: "Tailandia" }, { code: "TL", name: "Timor Oriental" },
    { code: "TG", name: "Togo" }, { code: "TO", name: "Tonga" }, { code: "TT", name: "Trinidad y Tobago" },
    { code: "TN", name: "Túnez" }, { code: "TR", name: "Turquía" }, { code: "TM", name: "Turkmenistán" },
    { code: "TV", name: "Tuvalu" }, { code: "UG", name: "Uganda" }, { code: "UA", name: "Ucrania" },
    { code: "AE", name: "Emiratos Árabes Unidos" }, { code: "GB", name: "Reino Unido" }, { code: "US", name: "Estados Unidos" },
    { code: "UY", name: "Uruguay" }, { code: "UZ", name: "Uzbekistán" }, { code: "VU", name: "Vanuatu" },
    { code: "VA", name: "Ciudad del Vaticano" }, { code: "VE", name: "Venezuela" }, { code: "VN", name: "Vietnam" },
    { code: "YE", name: "Yemen" }, { code: "ZM", name: "Zambia" }, { code: "ZW", name: "Zimbabue" }
];

let selectedCountries = [];
let players = [];
let currentPlayer = 0;
let spins = 0;
let spinsPerPlayer = [0, 0, 0];
let countryCounts = [];
let tiebreaker = false;
let tiebreakerCountries = [];
let tiebreakerCounts = [];
let tiebreakerActive = false;

function renderCountries(list) {
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = '';
    list.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <img src="https://flagsapi.com/${country.code}/flat/64.png" alt="Bandera de ${country.name}">
            <p>${country.name}</p>
        `;
        countryList.appendChild(card);
    });
}

document.getElementById('showRandom').onclick = function() {
    selectedCountries = [...countries].sort(() => Math.random() - 0.5).slice(0, 10);
    renderCountries(selectedCountries);
    document.getElementById('countryList').classList.remove('hidden');
    // Habilitar campos y botón
    document.getElementById('player1').disabled = false;
    document.getElementById('player2').disabled = false;
    document.getElementById('player3').disabled = false;
    document.getElementById('startGame').disabled = false;
};

window.onload = () => {
    // No mostrar países al cargar la página
    document.getElementById('countryList').classList.add('hidden');
    // Deshabilitar campos y botón al cargar
    document.getElementById('player1').disabled = true;
    document.getElementById('player2').disabled = true;
    document.getElementById('player3').disabled = true;
    document.getElementById('startGame').disabled = false;
}

// --- Juego ---
document.getElementById('playerForm').onsubmit = function(e) {
    e.preventDefault();
    const player1 = document.getElementById('player1').value.trim();
    const player2 = document.getElementById('player2').value.trim();
    const player3 = document.getElementById('player3').value.trim();

    if (!player1 || !player2 || !player3) {
        showToast("Debe seleccionar los paises e ingresar los participantes.");
        return;
    }
    players = [
        document.getElementById('player1').value.trim(),
        document.getElementById('player2').value.trim(),
        document.getElementById('player3').value.trim()
    ];
    spins = 0;
    spinsPerPlayer = [0, 0, 0];
    countryCounts = Array(selectedCountries.length).fill(0);
    tiebreaker = false;
    tiebreakerCountries = [];
    tiebreakerCounts = [];
    tiebreakerActive = false;
    currentPlayer = 0;
    document.getElementById('playerForm').classList.add('hidden');
    document.getElementById('gameArea').classList.remove('hidden');
    updateCurrentPlayer();
    updateCountryCounts();
    drawWheel();
};

// Toast notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `⚠️ <span>${msg}</span>`;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function updateCurrentPlayer() {
    if (tiebreakerActive) {
        document.getElementById('currentPlayer').textContent = "Desempate: último tiro";
        document.getElementById('currentPlayer').className = "";
    } else {
        document.getElementById('currentPlayer').textContent = `Turno de: ${players[currentPlayer]} (${spinsPerPlayer[currentPlayer]}/5)`;
        document.getElementById('currentPlayer').className = "";
    }
}

function updateCountryCounts() {
    const div = document.getElementById('countryCounts');
    let list = tiebreakerActive ? tiebreakerCountries : selectedCountries;
    let counts = tiebreakerActive ? tiebreakerCounts : countryCounts;
    let rows = list.map(
        (c, i) => `<tr><td>${c.name}</td><td><b>${counts[i]}</b></td></tr>`
    ).join('');
    div.innerHTML = `
        <table>
            <thead>
                <tr><th>País</th><th>Caídas</th></tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

// Ruleta con nombres de países
function drawWheel(highlightIndex = null) {
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');
    let list = tiebreakerActive ? tiebreakerCountries : selectedCountries;
    const slices = list.length;
    const colors = ['#FFD1DC', '#ADD8E6', '#98FF98', '#FFFACD', '#FFB347', '#B0E0E6', '#E6E6FA', '#F5DEB3', '#C1FFC1', '#FFDEAD'];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Borde negro de la ruleta
    ctx.save();
    ctx.beginPath();
    ctx.arc(150, 150, 142, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.restore();

    for (let i = 0; i < slices; i++) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 140, (i * 2 * Math.PI) / slices, ((i + 1) * 2 * Math.PI) / slices);
        ctx.closePath();
        ctx.fillStyle = (highlightIndex === i) ? "#FFD700" : colors[i % colors.length];
        ctx.fill();
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(((i + 0.5) * 2 * Math.PI) / slices);
        ctx.textAlign = "right";
        ctx.font = "bold 14px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(list[i].name, 130, 5);
        ctx.restore();
    }
    // Flecha/selector más arriba
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(140, 25);
    ctx.lineTo(160, 25);
    ctx.closePath();
    ctx.fillStyle = "#333";
    ctx.fill();
}

function showWinnerBlink(name) {
    const el = document.getElementById('currentPlayer');
    let visible = true;
    let count = 0;
    el.textContent = `¡Ganador: ${name}!`;
    el.className = "winner-blink";
    const interval = setInterval(() => {
        el.style.visibility = visible ? "visible" : "hidden";
        visible = !visible;
        count++;
        if (count > 9) { // Parpadea 5 veces
            clearInterval(interval);
            el.style.visibility = "visible";
        }
    }, 350);
}

document.getElementById('spinWheel').onclick = function() {
    if (!(tiebreakerActive ? tiebreakerCountries.length : selectedCountries.length)) {
        alert("Primero selecciona los países aleatorios.");
        return;
    }
    if (!tiebreakerActive && spinsPerPlayer[currentPlayer] >= 5) {
        alert(`${players[currentPlayer]} ya completó sus 5 turnos.`);
        return;
    }
    // Animación de giro
    let list = tiebreakerActive ? tiebreakerCountries : selectedCountries;
    let counts = tiebreakerActive ? tiebreakerCounts : countryCounts;
    let totalSpins = Math.floor(Math.random() * 20) + 20;
    let currentSpin = 0;
    let highlight = 0;
    const slices = list.length;
    document.getElementById('spinWheel').disabled = true;

    const spinInterval = setInterval(() => {
        drawWheel(highlight % slices);
        highlight++;
        currentSpin++;
        if (currentSpin > totalSpins) {
            clearInterval(spinInterval);
            const chosen = (highlight - 1) % slices;
            drawWheel(chosen);
            counts[chosen]++;
            updateCountryCounts();
            if (tiebreakerActive) {
                // Fin del desempate
                let max = Math.max(...tiebreakerCounts);
                let winners = [];
                tiebreakerCounts.forEach((cnt, idx) => {
                    if (cnt === max) winners.push(tiebreakerCountries[idx]);
                });
                if (winners.length === 1) {
                    showWinnerBlink(winners[0].name);
                    document.getElementById('spinWheel').disabled = true;
                } else {
                    // Si aún hay empate, repetir solo con los empatados
                    tiebreakerCountries = winners;
                    tiebreakerCounts = Array(winners.length).fill(0);
                    setTimeout(() => {
                        alert("¡Sigue el empate! Se repite el desempate solo con los países empatados.");
                        updateCountryCounts();
                        drawWheel();
                        document.getElementById('spinWheel').disabled = false;
                    }, 500);
                }
                return;
            }
            spinsPerPlayer[currentPlayer]++;
            spins++;
            alert(`${players[currentPlayer]} cayó en ${list[chosen].name}!`);
            if (spins >= 15) {
                // Fin del juego principal, buscar empate
                let max = Math.max(...countryCounts);
                let winners = [];
                countryCounts.forEach((cnt, idx) => {
                    if (cnt === max) winners.push(selectedCountries[idx]);
                });
                if (winners.length === 1) {
                    showWinnerBlink(winners[0].name);
                    document.getElementById('spinWheel').disabled = true;
                } else {
                    // Empate: activar modo desempate
                    tiebreakerActive = true;
                    tiebreakerCountries = winners;
                    tiebreakerCounts = Array(winners.length).fill(0);
                    setTimeout(() => {
                        alert("¡Empate! Se hará un último tiro solo con los países empatados.");
                        updateCurrentPlayer();
                        updateCountryCounts();
                        drawWheel();
                        document.getElementById('spinWheel').disabled = false;
                    }, 500);
                }
                return;
            }
            // Cambia al siguiente jugador con turnos disponibles
            do {
                currentPlayer = (currentPlayer + 1) % players.length;
            } while (!tiebreakerActive && spinsPerPlayer[currentPlayer] >= 5);
            updateCurrentPlayer();
            document.getElementById('spinWheel').disabled = false;
        }
    }, 80);
};
