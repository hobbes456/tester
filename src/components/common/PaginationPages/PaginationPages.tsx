// import { useRouter } from "next/router";

// const items = Array.from({ length: 50 }, (_, i) => `Элемент ${i + 1}`); // 50 элементов

// const ITEMS_PER_PAGE = 5;

// // export async function getStaticProps() {
// //     return {
// //         props: {
// //             totalItems: items.length,
// //         },
// //     };
// // }

// const PaginationPages = () => {
//     const router = useRouter();

//     const { page = 1 } = router.query;

//     const currentPage = parseInt(page);

//     const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

//     const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//     const handlePageChange = (page) => {
//         router.push(`/?page=${page}`);
//     };

//     return (
//         <div>
//             <h1>Пагинация в Next.js</h1>

//             <ul>
//                 {currentItems.map((item) => (
//                     <li key={item}>{item}</li>
//                 ))}
//             </ul>

//             <div>
//                 {Array.from({ length: totalPages }, (_, index) => {
//                     const page = index + 1;

//                     return (
//                         <button
//                             key={page}
//                             onClick={() => handlePageChange(page)}
//                             disabled={currentPage === page}
//                             style={{
//                                 margin: "0 5px",

//                                 padding: "8px",

//                                 backgroundColor:
//                                     currentPage === page ? "#0070f3" : "#fff",

//                                 color: currentPage === page ? "#fff" : "#000",

//                                 border: "1px solid #ccc",

//                                 borderRadius: "4px",
//                             }}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default PaginationPages;
