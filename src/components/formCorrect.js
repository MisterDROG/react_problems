import { useRef, useEffect, useState } from "react";

/*
 Нужно:
 1) Избавиться от ошибок рендера, провести рефакторинг, если считаешь нужным.

 ТЗ:
 2) Ставить фокус на первый инпут после установки компонента. Нужно для хорошего UX.
 3) Написать HOC 'withArgumentsLogger', который логирует в консоль все пропсы компонента не влияя на его отрисовку. Нужно для дебаггинга компонента.
*/

// const person = (name, oldPassword, oldCodeWord, bankCardNumber) => {
//   return <h1>{name}, ваши доступы устарели, нужно обновить:</h1>
//        <mark>Новый пароль: </mark>
//     <input placeholder={oldPassword} type='number'>
//                                       <br/>
//         <mark>Новое кодовое слово: </mark><input placeholder={oldCodeWord} value={oldCodeWord}></input>
// };

// const App = (person) => { return 
//     <person name="Олег" oldCodeWord="Шарик"
//       oldPassword="iLovejQuery123"
// />
// };

// export default App;

export const Person = ({name, oldPassword, oldCodeWord, bankCardNumber}) => {

    const [valueInput, setValueInput] = useState('wew')
    const refFocus = useRef()

    function handleChange(event) {
        setValueInput(event.target.value)
    }

    useEffect(() => {
        refFocus.current.focus() 
    }, [])

  return (
        <>
            <h1>{name}, ваши доступы устарели, нужно обновить:</h1>
            <mark>Новый пароль: </mark>
            <input ref={refFocus} placeholder={oldPassword} value = {valueInput} onChange = {handleChange} type='number'/>
            <br/>
            <mark>Новое кодовое слово: </mark>
            <input placeholder={oldCodeWord} value={oldCodeWord}/>
        </>
        )
};

const Form = ({Component}) => { 
    return ( 
    <>
        <p style={{fontWeight: 'bold', color: 'blue', marginTop: '30px'}}>Form correct TASK</p>
        <Component name="Олег" oldCodeWord="Шарик" oldPassword="iLovejQuery123"/>
    </> 
    )
};


const WithArgumentsLogger = (Component) => {

    return function ResComponent(props) {
        console.log('props' ,props)
        return (
            <Component {...props}/>
        )
    }

} 

export default WithArgumentsLogger(Form);