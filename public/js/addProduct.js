
import axios from 'axios'

export const addproduct=async (productId,name,price,featured,rating,createdAt,company)=>
 {
    try{
        const res=await axios({
            method:'POST',
            url:"/api/v1/products",
            data:{
                productID,
                name,
                price,
                featured,
                rating,
                createdAt,
                company
            }
        })
        if(res)
        {
            alert("successfully added");
            setTimeout(() => {
                location.assign('/home') //after successful addition of details, we get redirected to home page
            }, 1000);
        }
    }
    catch(err)
    {
       alert(err);
    }

}
 
