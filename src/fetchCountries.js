
const baseUrl = 'https://restcountries.com/v2/name/';


export const fetchCountries = (inputData) => {
    return fetch(`${baseUrl}${inputData}?fields=name,capital,population,flag,languages`)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            throw new Error(response.status);
        })
};