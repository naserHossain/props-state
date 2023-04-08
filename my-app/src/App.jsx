import { useState } from "react";
const productList = [
    {
        id: "111222",
        productName: "Keyboard",
        stock: 10,
        price: 2000,
    },
    {
        id: "111223",
        productName: "Mouse",
        stock: 8,
        price: 1500,
    },
    {
        id: "111224",
        productName: "Headphone",
        stock: 5,
        price: 3000,
    },
];

const TableRow = ({
    id,
    productName,
    stock,
    price,
    quantity,
    total,
    increment,
    decrement,
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{productName}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
                <button
                    disabled={quantity === stock}
                    onClick={() => increment(id)}
                >
                    +
                </button>
                <button disabled={quantity === 0} onClick={() => decrement(id)}>
                    -
                </button>
            </td>
        </tr>
    );
};

const App = () => {
    const [products, setProducts] = useState(
        productList.map((item) => ({
            ...item,
            quantity: 0,
            total: 0,
        }))
    );

    const incrementQuantity = (id) => {
        setProducts(
            products.map((product) => {
                if (id === product.id && product.stock > product.quantity) {
                    product.quantity++;
                    product.total = product.quantity * product.price;
                }

                return product;
            })
        );
    };
    const decrementQuantity = (id) => {
        setProducts(
            products.map((product) => {
                if (id === product.id && product.quantity > 0) {
                    product.quantity--;
                    product.total = product.quantity * product.price;
                }

                return product;
            })
        );
    };

    const total = products.reduce((acc, cur) => acc + cur.total, 0);

    return (
        <div>
            <h2> Products Lists </h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <TableRow
                            key={product.id}
                            {...product}
                            increment={incrementQuantity}
                            decrement={decrementQuantity}
                        />
                    ))}
                </tbody>
            </table>
            {total > 0 && <p> Total: {total} BDT</p>}
        </div>
    );
};

export default App;
