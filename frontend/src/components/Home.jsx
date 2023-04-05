import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import image from "../img/blue-background-image.jpg";

const Home = () => {
    const { data, error, isloading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    return (
        <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"repeat" }}>
        <div className="home-container">
            {isloading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured...</p>
            ) : (
                <>
                <div className="title">
                    <h2>New Arrivals</h2>
                    </div>
                    <div className="products">
                    
                        {data?.map((product) => (
                            <div key={product.id} className="product">
                                <h3>{product.name}</h3>
                                <img src={product.image} alt={product.name} />
                                <div className="details">
                                    <span className="description">{product.desc}</span>
                                    <span className="price">${product.price}</span>
                                </div>
                                <button onClick={() => handleAddToCart(product)}>
                                    Add To Cart
                                </button>
                            </div>
                            
                        ))}
                    </div>
                    
                </>
            )}
        </div>
        </div>
        
    );
};
export default Home;