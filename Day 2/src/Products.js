import react from "react";

const Products = () => {
    const list=['Oil','soap','Rice','Wheat'];

return( 
        <div>
            <h1>Products</h1>
            {
                list.map((product, index) => (
                    <div key={index}>
                        <li>{product}</li>
                    </div>
                )
                )
            }
        </div>
    )
}
export default Products;