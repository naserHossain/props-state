import React from "react";

const products = [
    {
        id: "111222",
        productName: "Keyboard",
        stock: 10,
        price: 1500,
    },
    {
        id: "111223",
        productName: "Mouse",
        stock: 8,
        price: 1000,
    },
    {
        id: "111224",
        productName: "Headphone",
        stock: 7,
        price: 2500,
    },
];

const TableRow = ({ id, productName, stock, price, quantity, total }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{productName}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
                <button>+</button>
                <button>-</button>
            </td>
        </tr>
    );
};

const App = () => {
    return (
        <div>
            <h2> Product Lists</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => {
                        <TableRow key={item.id} {...item} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

// const taskLists = [
//     {
//         id: 1,
//         text: "Title - 01",
//         checked: true,
//     },
//     {
//         id: 2,
//         text: "Title - 02",
//         checked: true,
//     },
//     {
//         id: 3,
//         text: "Title - 03",
//         checked: false,
//     },
//     {
//         id: 4,
//         text: "Title - 04",
//         checked: false,
//     },
//     {
//         id: 5,
//         text: "Title - 05",
//         checked: false,
//     },
// ];

// const ListItem = (props) => {
//     console.log(props.children);
//     return (
//         <li
//             style={{
//                 listStyleType: "none",
//                 display: "flex",
//                 alignItems: "center",
//             }}
//         >
//             <input type="checkbox" checked={props.checked} />
//             <p>{props.title}</p>

//             <button style={{ padding: "7px 20px", marginLeft: "25px" }}>
//                 Delete
//             </button>
//         </li>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <h2> Hello World </h2>
//             <ul>
//                 {taskLists.map((item) => (
//                     <ListItem
//                         key={item.id}
//                         title={item.text}
//                         checked={item.checked}
//                     ></ListItem>
//                 ))}
//             </ul>
//         </div>
//     );
// };

/* const ProductListItem = ({ productName, stock }) => {
    const [count, setCount] = useState(0);

    let increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    let decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h2> Count: {count} </h2>
            <div>
                <p>{productName}</p>
                <p>
                    {count} / {stock}
                </p>
                <button
                    style={{ cursor: "pointer" }}
                    onClick={increment}
                    disabled={count === stock}
                >
                    Increment
                </button>
                <button
                    style={{ cursor: "pointer" }}
                    onClick={decrement}
                    disabled={count === 0}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
const App = () => {
    return (
        <div>
            <ProductListItem productName={"Keyboard"} stock={15} />
            <ProductListItem productName={"Mouse"} stock={12} />
            <ProductListItem productName={"Headphone"} stock={0} />
        </div>
    );
}; */

export default App;
