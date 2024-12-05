const marcasMotos = [
    "Aprilia",
    "Benelli",
    "BMW",
    "Cagiva",
    "CFMoto",
    "Ducati",
    "GasGas",
    "Harley-Davidson",
    "Honda",
    "Husqvarna",
    "Indian",
    "Kawasaki",
    "Keeway",
    "KTM",
    "Lambretta",
    "Lifan",
    "Macbor",
    "Mash",
    "Moto Guzzi",
    "MV Agusta",
    "Piaggio",
    "Royal Enfield",
    "Suzuki",
    "SYM",
    "Triumph",
    "Vespa",
    "Yamaha",
    "Zontes"
];

const provinciasEspana = [
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Baleares",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ceuta",
    "Ciudad Real",
    "Córdoba",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Jaén",
    "La Coruña",
    "La Rioja",
    "Las Palmas",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Melilla",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Pontevedra",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza"
];

const preciosTotales=[
    500, 1000, 2000, 4000, 6000, 8000, 10000, 15000
];

const marcas = document.getElementById("marcas");
const provincias = document.getElementById("provincias");
const precios = document.getElementById("precios");

inicializarPagina=()=>{
    cargarMarcas();
    cargarProvincias();
    cargarPrecios();
}

cargarMarcas=()=>{

    marcasMotos.forEach(marca => {
        const newOption=document.createElement("OPTION");
        newOption.value=marca;
        newOption.textContent=marca;
        newOption.style.color="black";
        marcas.appendChild(newOption);
    });
    
}

cargarProvincias=()=>{

    provinciasEspana.forEach(provincia => {
        const newOption=document.createElement("OPTION");
        newOption.value=provincia;
        newOption.textContent=provincia;
        newOption.style.color="black";
        provincias.appendChild(newOption);
    });
    
}

cargarPrecios=()=>{

    preciosTotales.forEach(precio => {
        const newOption=document.createElement("OPTION");
        newOption.value=precio;
        newOption.textContent=precio;
        newOption.style.color="black";
        precios.appendChild(newOption);
    });
    
}

document.addEventListener("DOMContentLoaded", inicializarPagina);

const buttons = document.getElementById("buttons");
const btn_comprar = document.getElementById("comprar");
const btn_vender = document.getElementById("vender");

const selected = (event) => {
    if (event.target.tagName == "INPUT") {
        btn_comprar.classList.toggle("selected");
        btn_vender.classList.toggle("selected");
    }
}

buttons.addEventListener("click", selected);