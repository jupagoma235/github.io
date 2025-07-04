const countries = [
    { code: 'AD', name: 'Andorra' },
    { code: 'AE', name: 'Emiratos Árabes Unidos' },
    { code: 'AF', name: 'Afganistán' },
    { code: 'AG', name: 'Antigua y Barbuda' },
    { code: 'AI', name: 'Anguila' },
    { code: 'AL', name: 'Albania' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AO', name: 'Angola' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AS', name: 'Samoa Americana' },
    { code: 'AT', name: 'Austria' },
    { code: 'AU', name: 'Australia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AX', name: 'Islas Åland' },
    { code: 'AZ', name: 'Azerbaiyán' },
    { code: 'BA', name: 'Bosnia y Herzegovina' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BD', name: 'Bangladés' },
    { code: 'BE', name: 'Bélgica' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BH', name: 'Baréin' },
    { code: 'BI', name: 'Burundi' },
    { code: 'BJ', name: 'Benín' },
    { code: 'BL', name: 'San Bartolomé' },
    { code: 'BM', name: 'Bermudas' },
    { code: 'BN', name: 'Brunéi' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BQ', name: 'Bonaire, San Eustaquio y Saba' },
    { code: 'BR', name: 'Brasil' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BT', name: 'Bután' },
    { code: 'BV', name: 'Isla Bouvet' },
    { code: 'BW', name: 'Botsuana' },
    { code: 'BY', name: 'Bielorrusia' },
    { code: 'BZ', name: 'Belice' },
    { code: 'CA', name: 'Canadá' },
    { code: 'CC', name: 'Islas Cocos' },
    { code: 'CD', name: 'República Democrática del Congo' },
    { code: 'CF', name: 'República Centroafricana' },
    { code: 'CG', name: 'República del Congo' },
    { code: 'CH', name: 'Suiza' },
    { code: 'CI', name: 'Costa de Marfil' },
    { code: 'CK', name: 'Islas Cook' },
    { code: 'CL', name: 'Chile' },
    { code: 'CM', name: 'Camerún' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CV', name: 'Cabo Verde' },
    { code: 'CW', name: 'Curazao' },
    { code: 'CX', name: 'Isla Christmas' },
    { code: 'CY', name: 'Chipre' },
    { code: 'CZ', name: 'República Checa' },
    { code: 'DE', name: 'Alemania' },
    { code: 'DJ', name: 'Yibuti' },
    { code: 'DK', name: 'Dinamarca' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'República Dominicana' },
    { code: 'DZ', name: 'Argelia' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EE', name: 'Estonia' },
    { code: 'EG', name: 'Egipto' },
    { code: 'EH', name: 'Sahara Occidental' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'ES', name: 'España' },
    { code: 'ET', name: 'Etiopía' },
    { code: 'FI', name: 'Finlandia' },
    { code: 'FJ', name: 'Fiyi' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'FO', name: 'Islas Faroe' },
    { code: 'FR', name: 'Francia' },
    { code: 'GA', name: 'Gabón' },
    { code: 'GB', name: 'Reino Unido' },
    { code: 'GD', name: 'Granada' },
    { code: 'GE', name: 'Georgia' },
    { code: 'GF', name: 'Guayana Francesa' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GL', name: 'Groenlandia' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GP', name: 'Guadalupe' },
    { code: 'GQ', name: 'Guinea Ecuatorial' },
    { code: 'GR', name: 'Grecia' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GU', name: 'Guam' },
    { code: 'GW', name: 'Guinea-Bisáu' },
    { code: 'GY', name: 'Guayana' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HM', name: 'Islas Heard y McDonald' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HR', name: 'Croacia' },
    { code: 'HT', name: 'Haití' },
    { code: 'HU', name: 'Hungría' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IE', name: 'Irlanda' },
    { code: 'IL', name: 'Israel' },
    { code: 'IM', name: 'Isla de Man' },
    { code: 'IN', name: 'India' },
    { code: 'IO', name: 'Territorio Británico del Océano Índico' },
    { code: 'IQ', name: 'Irak' },
    { code: 'IR', name: 'Irán' },
    { code: 'IS', name: 'Islandia' },
    { code: 'IT', name: 'Italia' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JO', name: 'Jordania' },
    { code: 'JP', name: 'Japón' },
    { code: 'KE', name: 'Kenia' },
    { code: 'KG', name: 'Kirguistán' },
    { code: 'KH', name: 'Camboya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KM', name: 'Comoras' },
    { code: 'KN', name: 'San Cristóbal y Nieves' },
    { code: 'KP', name: 'Corea del Norte' },
    { code: 'KR', name: 'Corea del Sur' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KY', name: 'Islas Caimán' },
    { code: 'KZ', name: 'Kazajistán' },
    { code: 'LA', name: 'Laos' },
    { code: 'LB', name: 'Líbano' },
    { code: 'LC', name: 'Santa Lucía' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LS', name: 'Lesoto' },
    { code: 'LT', name: 'Lituania' },
    { code: 'LU', name: 'Luxemburgo' },
    { code: 'LV', name: 'Letonia' },
    { code: 'LY', name: 'Libia' },
    { code: 'MA', name: 'Marruecos' },
    { code: 'MC', name: 'Mónaco' },
    { code: 'MD', name: 'Moldavia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MF', name: 'San Martín' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MH', name: 'Islas Marshall' },
    { code: 'MK', name: 'Macedonia del Norte' },
    { code: 'ML', name: 'Malí' },
    { code: 'MM', name: 'Birmania' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'MO', name: 'Macao' },
    { code: 'MP', name: 'Islas Marianas del Norte' },
    { code: 'MQ', name: 'Martinica' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MT', name: 'Malta' },
    { code: 'MU', name: 'Mauricio' },
    { code: 'MV', name: 'Maldivas' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MX', name: 'México' },
    { code: 'MY', name: 'Malasia' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NC', name: 'Nueva Caledonia' },
    { code: 'NE', name: 'Níger' },
    { code: 'NF', name: 'Isla Norfolk' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NL', name: 'Países Bajos' },
    { code: 'NO', name: 'Noruega' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NU', name: 'Niue' },
    { code: 'NZ', name: 'Nueva Zelanda' },
    { code: 'OM', name: 'Omán' },
    { code: 'PA', name: 'Panamá' },
    { code: 'PE', name: 'Perú' },
    { code: 'PF', name: 'Polinesia Francesa' },
    { code: 'PG', name: 'Papúa Nueva Guinea' },
    { code: 'PH', name: 'Filipinas' },
    { code: 'PK', name: 'Pakistán' },
    { code: 'PL', name: 'Polonia' },
    { code: 'PM', name: 'San Pedro y Miquelón' },
    { code: 'PN', name: 'Islas Pitcairn' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PW', name: 'Palaos' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'QA', name: 'Catar' },
    { code: 'RE', name: 'Reunión' },
    { code: 'RO', name: 'Rumania' },
    { code: 'RS', name: 'Serbia' },
    { code: 'RU', name: 'Rusia' },
    { code: 'RW', name: 'Ruanda' },
    { code: 'SA', name: 'Arabia Saudita' },
    { code: 'SB', name: 'Islas Salomón' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SD', name: 'Sudán' },
    { code: 'SE', name: 'Suecia' },
    { code: 'SG', name: 'Singapur' },
    { code: 'SH', name: 'Santa Elena' },
    { code: 'SI', name: 'Eslovenia' },
    { code: 'SJ', name: 'Svalbard y Jan Mayen' },
    { code: 'SK', name: 'Eslovaquia' },
    { code: 'SL', name: 'Sierra Leona' },
    { code: 'SM', name: 'San Marino' },
    { code: 'SN', name: 'Senegal' },
    { code: 'SO', name: 'Somalia' },
    { code: 'SR', name: 'Surinam' },
    { code: 'SS', name: 'Sudán del Sur' },
    { code: 'ST', name: 'Santo Tomé y Príncipe' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'SY', name: 'Siria' },
    { code: 'SZ', name: 'Suazilandia' },
    { code: 'TC', name: 'Islas Turcas y Caicos' },
    { code: 'TD', name: 'Chad' },
    { code: 'TF', name: 'Territorios Australes Franceses' },
    { code: 'TG', name: 'Togo' },
    { code: 'TH', name: 'Tailandia' },
    { code: 'TJ', name: 'Tayikistán' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TL', name: 'Timor Oriental' },
    { code: 'TM', name: 'Turkmenistán' },
    { code: 'TN', name: 'Túnez' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TR', name: 'Turquía' },
    { code: 'TS', name: 'Tanzania' },
    { code: 'TT', name: 'Trinidad y Tobago' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'UA', name: 'Ucrania' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UM', name: 'Islas Ultramarinas de EE. UU.' },
    { code: 'US', name: 'Estados Unidos' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistán' },
    { code: 'VA', name: 'Vaticano' },
    { code: 'VC', name: 'San Vicente y las Granadinas' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VG', name: 'Islas Vírgenes Británicas' },
    { code: 'VI', name: 'Islas Vírgenes de los EE. UU.' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'WF', name: 'Wallis y Futuna' },
    { code: 'WS', name: 'Samoa' },
    { code: 'YE', name: 'Yemen' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'ZA', name: 'Sudáfrica' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabue' }
];

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
        card.onclick = () => showCities(country);
        countryList.appendChild(card);
    });
    document.getElementById('totalPaises').textContent = `Total de países: ${list.length}`;
    document.getElementById('showAllBtn').style.display = "none";
}

async function showCities(country) {
    // Mostrar solo la bandera y nombre del país seleccionado
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = '';

    // Contenedor para bandera y datos alineados horizontalmente
    const infoRow = document.createElement('div');
    infoRow.style.display = 'flex';
    infoRow.style.alignItems = 'center';
    infoRow.style.gap = '24px';
    infoRow.style.marginBottom = '18px';

    // Bandera (más grande, sin fondo ni sombra)
    const flagImg = document.createElement('img');
    flagImg.src = `https://flagsapi.com/${country.code}/flat/64.png`;
    flagImg.alt = `Bandera de ${country.name}`;
    flagImg.style.width = '96px';
    flagImg.style.height = '84px';
    flagImg.style.borderRadius = '8px';
    flagImg.style.background = 'transparent';
    flagImg.style.boxShadow = 'none';

    // Contenedor para nombre y capital
    const infoDiv = document.createElement('div');
    infoDiv.style.display = 'flex';
    infoDiv.style.flexDirection = 'column';

    // Nombre del país (una sola línea, resaltado)
    const nameP = document.createElement('p');
    nameP.style.margin = '0 0 6px 0';
    nameP.style.fontWeight = 'bold';
    nameP.style.fontSize = '1.7rem';
    nameP.style.lineHeight = '1.1';
    nameP.style.whiteSpace = 'nowrap';
    nameP.style.overflow = 'hidden';
    nameP.style.textOverflow = 'ellipsis';
    nameP.style.color = '#c7a500';
    nameP.textContent = country.name;

    // Capital (una sola línea)
    const capitalDiv = document.createElement('div');
    capitalDiv.id = 'countryCapital';
    capitalDiv.style.fontSize = '1.08rem';
    capitalDiv.style.color = '#888';
    capitalDiv.style.whiteSpace = 'nowrap';
    capitalDiv.style.overflow = 'hidden';
    capitalDiv.style.textOverflow = 'ellipsis';
    capitalDiv.textContent = 'Capital: Cargando...';

    infoDiv.appendChild(nameP);
    infoDiv.appendChild(capitalDiv);

    infoRow.appendChild(flagImg);
    infoRow.appendChild(infoDiv);
    countryList.appendChild(infoRow);

    document.getElementById('totalPaises').textContent = '';
    document.getElementById('showAllBtn').style.display = "inline-block";

    // Mostrar bandera grande arriba de las ciudades
    const selectedFlag = document.getElementById('selectedFlag');

    // Obtener cantidad de estados/departamentos antes de mostrar
    let totalStates = 0;
    try {
        const statesResp = await fetch(`https://api.countrystatecity.in/v1/countries/${country.code}/states`, requestOptions);
        if (statesResp.ok) {
            const states = await statesResp.json();
            totalStates = states.length;
        }
    } catch (e) {
        totalStates = 0;
    }

    // Mostrar bandera y cantidad de estados/provincia en una sola línea
    selectedFlag.innerHTML = `
        <span style="display:inline-flex;align-items:center;gap:18px;">
            <img src="https://flagsapi.com/${country.code}/flat/64.png" alt="Bandera de ${country.name}" style="width:64px;height:52px;border-radius:8px;vertical-align:middle;">
            <span style="font-size:1.1rem;color:#444;font-weight:bold;white-space:nowrap;vertical-align:middle;">
                Departamentos/Provincias: ${totalStates}
            </span>
        </span>
    `;

    // Obtener la capital usando la API de restcountries
    fetch(`https://restcountries.com/v3.1/alpha/${country.code}`)
        .then(resp => resp.json())
        .then(data => {
            const capital = data[0]?.capital?.[0] || "No disponible";
            capitalDiv.textContent = `Capital: ${capital}`;
        })
        .catch(() => {
            capitalDiv.textContent = "Capital: No disponible";
        });

    const section = document.getElementById('citySection');
    const title = document.getElementById('cityTitle');
    const list = document.getElementById('cityList');
    section.classList.remove('hidden');
    // Quitar el título de departamentos/provincias
    title.textContent = '';
    list.innerHTML = '<li>Cargando departamentos/provincias...</li>';

    // Reemplaza "API_KEY" por tu clave real
    const headers = new Headers();
    headers.append("X-CSCAPI-KEY", "a0JUTTN0NEZLRWVKcDVCU2k3YnlUV2RzUEZaNUxVdUdoa0xYQVljSw==");

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const statesResp = await fetch(`https://api.countrystatecity.in/v1/countries/${country.code}/states`, requestOptions);
        if (!statesResp.ok) throw new Error("No se pudieron obtener los departamentos/provincias");
        const states = await statesResp.json();
        const totalStates = states.length; // <--- Aquí se contabilizan los departamentos/provincias listados

        // Mostrar bandera y cantidad de departamentos/provincias en una sola línea
        selectedFlag.innerHTML = `
            <span style="display:inline-flex;align-items:center;gap:18px;">
                <img src="https://flagsapi.com/${country.code}/flat/64.png" alt="Bandera de ${country.name}" style="width:64px;height:42px;border-radius:8px;vertical-align:middle;">
                <span style="font-size:1.1rem;color:#444;font-weight:bold;white-space:nowrap;vertical-align:middle;">
                    Departamentos/Provincias: ${totalStates}
                </span>
            </span>
        `;

        if (!states.length) {
            list.innerHTML = '<li>No hay departamentos/provincias disponibles para este país.</li>';
            return;
        }

        // Mostrar listado de departamentos/provincias en filas de 3 (grid)
        // Primero, obtenemos la cantidad de ciudades por estado/provincia
        const cityCounts = {};
        await Promise.all(states.map(async (s) => {
            try {
                const citiesResp = await fetch(`https://api.countrystatecity.in/v1/countries/${country.code}/states/${s.iso2}/cities`, requestOptions);
                if (citiesResp.ok) {
                    const cities = await citiesResp.json();
                    cityCounts[s.iso2] = cities.length;
                } else {
                    cityCounts[s.iso2] = 0;
                }
            } catch {
                cityCounts[s.iso2] = 0;
            }
        }));

        list.innerHTML = `
            <div id="statesGrid" style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 18px;
                margin-top: 10px;
            ">
                ${states.map(s => `
                    <div class="state-item" data-siso="${s.iso2}" style="cursor:pointer;padding:12px 16px 12px 16px;border-radius:8px;background:#fffbe7;border:1px solid #ffe082;font-weight:600;min-height:48px;position:relative;">
                        <span style="position:absolute;top:7px;right:12px;font-size:0.85rem;color:#888;background:#fffbe7;padding:1px 7px;border-radius:10px;border:1px solid #ffe082;">
                            ${cityCounts[s.iso2] ?? 0}
                        </span>
                        ${s.name}
                        <div class="cities-list" style="margin-top:7px;display:none;"></div>
                    </div>
                `).join('')}
            </div>
        `;
        // Evento para mostrar ciudades al hacer clic en un departamento/provincia
        Array.from(list.querySelectorAll('.state-item')).forEach(item => {
            item.addEventListener('click', async function(e) {
                e.stopPropagation();
                const siso = this.getAttribute('data-siso');
                const citiesDiv = this.querySelector('.cities-list');
                // Si ya está visible, oculta
                if (citiesDiv.style.display === 'block') {
                    citiesDiv.style.display = 'none';
                    citiesDiv.innerHTML = '';
                    return;
                }
                // Oculta otros abiertos
                list.querySelectorAll('.cities-list').forEach(cd => {
                    cd.style.display = 'none';
                    cd.innerHTML = '';
                });
                citiesDiv.style.display = 'block';
                citiesDiv.innerHTML = '<span style="color:#888;">Cargando ciudades...</span>';
                try {
                    const citiesResp = await fetch(`https://api.countrystatecity.in/v1/countries/${country.code}/states/${siso}/cities`, requestOptions);
                    if (!citiesResp.ok) throw new Error("No se pudieron obtener las ciudades");
                    const cities = await citiesResp.json();
                    if (!cities.length) {
                        citiesDiv.innerHTML = '<span style="color:#888;">No hay ciudades disponibles para este departamento/provincia.</span>';
                    } else {
                        citiesDiv.innerHTML = `<ul style="margin:6px 0 0 0;padding-left:18px;">
                            ${cities.map(city => `<li>${city.name}</li>`).join('')}
                        </ul>`;
                    }
                } catch (err) {
                    citiesDiv.innerHTML = '<span style="color:#d00;">Error al cargar las ciudades.</span>';
                }
            });
        });
    } catch (err) {
        list.innerHTML = '<li>Error al cargar los departamentos/provincias.</li>';
    }
}

document.getElementById('showAllBtn').onclick = function() {
    renderCountries(countries);
    document.getElementById('citySection').classList.add('hidden');
    document.getElementById('selectedFlag').innerHTML = '';
    document.getElementById('totalPaises').textContent = `Total de países: ${countries.length}`;
};

window.onload = function() {
    renderCountries(countries);
    document.getElementById('showAllBtn').style.display = "none";
    document.getElementById('citySection').classList.add('hidden');
    document.getElementById('searchInput').addEventListener('input', function() {
        const val = this.value.trim().toLowerCase();
        const filtered = countries.filter(c => c.name.toLowerCase().includes(val));
        renderCountries(filtered);
        document.getElementById('citySection').classList.add('hidden');
        document.getElementById('selectedFlag').innerHTML = '';
    });

    // Suponiendo que tienes un menú lateral generado dinámicamente, agrega este filtro al renderizar los links:

    function renderSidebarMenu(currentUrl) {
        const sidebar = document.getElementById('sidebarMenu');
        // Ejemplo de links, reemplaza por los tuyos reales
        const links = [
            { url: 'index.html', label: 'Inicio' },
            { url: 'paises-del-mundo.html', label: 'Países del Mundo' },
            // ...otros links...
        ];
        sidebar.innerHTML = links
            .filter(link => !currentUrl.endsWith(link.url)) // Oculta el link de la página actual
            .map(link => `<a href="${link.url}">${link.label}</a>`)
            .join('');
    }

    // Llama a esta función al cargar la página:
    renderSidebarMenu(window.location.pathname);
};
