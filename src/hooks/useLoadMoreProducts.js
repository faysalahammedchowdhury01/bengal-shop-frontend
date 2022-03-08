import { useEffect, useState } from 'react';

const useLoadMoreProducts = (products = [], initialShowProductQuantity = 4) => {
    const [displayProductQuantity, setDisplayProductQuantity] = useState(
        initialShowProductQuantity
    );
    const [displayProducts, setDisplayProducts] = useState(
        products.slice(0, displayProductQuantity)
    );

    useEffect(() => {
        setDisplayProducts(products.slice(0, displayProductQuantity));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayProductQuantity]);

    const isAvailableProducts = displayProductQuantity !== products.length;

    return {
        setDisplayProductQuantity,
        displayProducts,
        isAvailableProducts,
    };
};

export default useLoadMoreProducts;
