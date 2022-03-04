const countryInfo = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data => displayCountries(data));
}

const displayCountries = (countries) => {
    const countryDiv = document.getElementById('countryInfo');
    console.log(countries);
    
    countries.forEach(country =>{
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        countryDiv.appendChild(h3); 
        const p = document.createElement('p');
        p.innerText = country.capital;
        countryDiv.appendChild(p); 
    })
        
}