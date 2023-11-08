// import { requestUsers, requestUsersWithError, User, Query } from "./api";
// import "./styles.css";

// import Requirements from "./Requirements";
// import { FC, useEffect, useState } from "react";

// // Примеры вызова функций, в консоли можно увидеть возвращаемые результаты
// requestUsers({ name: "", age: "", limit: 4, offset: 0 }).then(console.log);
// requestUsersWithError({ name: "", age: "", limit: 4, offset: 0 }).catch(
//   console.error
// );


// const App: FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [nameInput, setNameInput] = useState<string>("");
//   const [ageInput, setAgeInput] = useState<string>("");
//   const [limitInput, setLimitInput] = useState<number>(4);
//   const [pageCurr, setPageCurr] = useState<number>(1);

//   function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
//     setNameInput(event.target.value);
//   }

//   function handleChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
//     setAgeInput(event.target.value);
//   }

//   function handleChangeLimit(event: React.ChangeEvent<HTMLInputElement>) {
//     setLimitInput(parseInt(event.target.value, 10));
//   }

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersFetched = await requestUsers({
//         name: nameInput,
//         age: ageInput,
//         limit: 4,
//         offset: 0
//       });
//       setUsers(usersFetched);
//     };
//     fetchUsers();
//   }, [nameInput, ageInput]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="name"
//         value={nameInput}
//         onChange={handleChangeName}
//       />
//       <input
//         type="text"
//         placeholder="age"
//         value={ageInput}
//         onChange={handleChangeAge}
//       />
//       {users.map((user) => (
//         <div key={user.id}>
//           {user.name}, {user.age}
//         </div>
//       ))}
//       <div>
//         <label>
//           By page:
//           <input
//             type="number"
//             value={limitInput}
//             onChange={handleChangeLimit}
//           />
//         </label>
//         <button>prev</button>
//         <p>page: {pageCurr}</p>
//         <button>next</button>
//       </div>
//     </>
//   );
// };

// // export default function App() {
// //   return <Requirements />;
// // }

// export default App;
