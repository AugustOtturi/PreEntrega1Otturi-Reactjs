import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductNotFound = () => {
    const timeout = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        timeout.current = setTimeout(() => {
            navigate('/');
        }, 2000);

        return () => {
            clearTimeout(timeout.current);
        };
    }, []);

    return (
        <div className="productNotFound d-flex justify-content-center align-items-center h-100">
            <h1 className="text-center display-4">
                El producto no se encuentra
            </h1>
        </div>
    );
};

export default ProductNotFound;
