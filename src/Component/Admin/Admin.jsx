import { useSearchParams } from "react-router-dom"


const Admin = () =>{
   const [searchParams, setsearchParams] = useSearchParams();
   const sortBy = searchParams.get("sortBy");
   const sortByViews = searchParams.get("sortByViews");
   const category = searchParams.get("category");

   const handleViews = () =>{
    setsearchParams({
        sortByViews: "views",
        category,
    })
   }
    return<>
        <h2>Admin Pannel</h2>
        <p>SortBy: {sortBy ?? sortByViews} Category: {category}</p>
        <button onClick={handleViews}>Sort By Views</button>
    </>
}

export default Admin