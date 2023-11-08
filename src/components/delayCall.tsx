// /* 2. Отложенный вызов
// Необходимо реализовать текстовый поиск с участием бэкенда
// Есть обычная строка поиска
// Сам поиск осуществляется без кнопки, по мере набора
// При этом нагружать бэк поиском на каждую буквы мы не должны
// Условия проброса поиска на бэк например - пауза в наборе на 1 секунду
// useEffect не использовать, готовый хук не использовать (да и вообще готовые решения в формате "чёрный ящик")
// Желательно решение одной функцией, но допускаются другие варианты
// */

// import React from 'react';
// import { FC } from "react";


// let searchTimeout: ReturnType<typeof setTimeout>

// function delayedSearch(searchInput: string) {
//     clearTimeout(searchTimeout);
//     searchTimeout = setTimeout(() => {
//         // Здесь вставить код с поиском на бэкенде того что ввели в searchQuery
//         console.log(`Выполняем поиск: ${searchInput}`);
//     }, 1000);
// }

// function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const searchQuery = event.target.value;
//     delayedSearch(searchQuery);
// }

// const DelayInput: FC = () => {
//     return (
//         <>
//             <input type="text" onChange={handleSearchChange} />
//         </>
//     );
// }

// // let searchTimeout

// // function delayedSearch(searchInput) {
// //     clearTimeout(searchTimeout);
// //     searchTimeout = setTimeout(() => {
// //         // Здесь вставить код с поиском на бэкенде того что ввели в searchQuery
// //         console.log(`Выполняем поиск: ${searchInput}`);
// //     }, 1000);
// // }

// // function handleSearchChange(event) {
// //     const searchQuery = event.target.value;
// //     delayedSearch(searchQuery);
// // }

// // function DelayInput() {
// //     return (
// //         <>
// //             <p style={{fontWeight: 'bold', color: 'blue', marginTop: '30px'}}>DELAY Input</p>
// //             <input type="text" onChange={handleSearchChange} />
// //         </>

// //     );
// // }


// export default DelayInput

import React, { useState, useRef, FC } from 'react';

const DelayInput: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const makeBackendCall = (query: string): void => {
        // Здесь происходит вызов бэкенд API с переданным поисковым запросом
        // Например так: 
        // fetch('/api/search?query=' + query)
        //   .then(response => response.json())
        //   .then(data => {
        //     // Обработка результатов поиска, добавление их в стейт с целью показать в компоненте
        //   })
        console.log('Вызов бэкенда с запросом:', query);
    };

    const delayedBackendCall = (query: string): void => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            makeBackendCall(query);
        }, 1000);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const query: string = event.target.value;
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