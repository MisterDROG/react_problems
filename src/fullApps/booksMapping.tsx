

// const reviewsCollector = (
//     book: Book,
//     users: User[],
//     reviews: Review[]
//   ): ReviewInformation[] => {
//     return reviews
//       .filter((review) => book.reviewIds.find((id) => review.id === id))
//       .map((review) => ({
//         id: review.id,
//         user: users.find((user) => user.id === review.userId) || {
//           id: "sdf",
//           name: "No reviewer"
//         },
//         text: review.text
//       }));
//   };
  
//   const toBookInformation = (
//     book: Book,
//     users: User[],
//     reviews: Review[]
//   ): BookInformation => {
//     return {
//       id: book.id,
//       name: book.name || "Книга без названия",
//       author: users.find((user) => user.id === book.authorId) || {
//         name: "Без автора",
//         id: "id"
//       },
//       reviews: reviewsCollector(book, users, reviews),
//       description: book.description
//     };
//   };
  
//   const App: FC = () => {
//     const [books, setBooks] = useState<Book[]>([]);
//     const [users, setUsers] = useState<User[]>([]);
//     const [reviews, setReviews] = useState<Review[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
  
//     useEffect(() => {
//       const fetchBooks = async () => {
//         setIsLoading(true);
//         const fetchedBooks = await getBooks();
//         const fetchedUsers = await getUsers();
//         const fetchedReviews = await getReviews();
//         setBooks(fetchedBooks);
//         setUsers(fetchedUsers);
//         setReviews(fetchedReviews);
//         setIsLoading(false);
//       };
//       fetchBooks();
//     }, []);
  
//     return (
//       <div>
//         <h1>Мои книги:</h1>
//         {isLoading && <div>Загрузка...</div>}
//         {!isLoading &&
//           books.map((b) => (
//             <Card key={b.id} book={toBookInformation(b, users, reviews)} />
//           ))}
//       </div>
//     );
//   };
  
//   export default App;