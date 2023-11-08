import React, { useState, useRef } from 'react';

function DelayInput() {
    const [searchInput, setSearchInput] = useState('');
    const timer = useRef(null);

    const makeBackendCall = (query) => {
        // Здесь происходит вызов бэкенд API с переданным поисковым запросом
        // Например так: 
        // fetch('/api/search?query=' + query)
        //   .then(response => response.json())
        //   .then(data => {
        //     // Обработка результатов поиска, добавление их в стейт с целью показать в компоненте
        //   })
        console.log('Вызов бэкенда с запросом:', query);
    };

    const delayedBackendCall = (query) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            makeBackendCall(query);
        }, 1000);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchInput(query);
        delayedBackendCall(query);
    };

    return (
        <div>
            <input type="text" value={searchInput} onChange={handleSearchChange} placeholder="Search" />
        </div>
    );
}

export default DelayInput;

// function DelayInput() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchInputChange = async (e) => {
//     const newSearchTerm = e.target.value;
//     setSearchTerm(newSearchTerm);

//     await delay(1000);

//     // Отправляем запрос на бэкенд с новым поисковым запросом newSearchTerm
//     // здесь можешь использовать свою функцию отправки запроса на бэкенд
//     searchOnBackend(newSearchTerm);
//   };

//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   const searchOnBackend = (query) => {
//     // Отправка запроса на бэкенд и обработка результатов поиска
//     // Вместо этого закомментированного кода, используй свою логику поиска на бэкенде
//     // fetch('/api/search?query=' + query)
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     // Обработка результатов поиска
//     //   })
//     console.log('Sending search query to backend:', query);
//   };

//   return (
//     <div>
//       <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Search..." />
//     </div>
//   );
// }

// export default DelayInput;