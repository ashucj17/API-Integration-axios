import { useSearchParams } from "react-router-dom"
import './article.css'

const dummyArticles = [
  {
    id: 1,
    title: "laptop views",
    views: 250,
    category: "electronics"
  },
  {
    id: 2,
    title: "smartphone reviews",
    views: 420,
    category: "electronics"
  },
  {
    id: 3,
    title: "healthy cooking tips",
    views: 180,
    category: "food"
  },
  {
    id: 4,
    title: "travel destinations 2025",
    views: 380,
    category: "travel"
  },
  {
    id: 5,
    title: "fitness workout routines",
    views: 320,
    category: "health"
  },
  {
    id: 6,
    title: "programming best practices",
    views: 540,
    category: "technology"
  },
  {
    id: 7,
    title: "home decoration ideas",
    views: 290,
    category: "lifestyle"
  },
  {
    id: 8,
    title: "digital marketing strategies",
    views: 450,
    category: "business"
  },
  {
    id: 9,
    title: "car maintenance guide",
    views: 210,
    category: "automotive"
  },
  {
    id: 10,
    title: "photography techniques",
    views: 360,
    category: "photography"
  }
];

const Articles = () => {
    const [searchParams, setsearchParams] = useSearchParams();
   const sortBy = searchParams.get("sortBy");
   const sortByViews = searchParams.get("sortByViews");
   const category = searchParams.get("category");

   let filterArticle = dummyArticles;

   const handleViews = () =>{
    setsearchParams({
        sortByViews: "true",
        category: "electronics"
    })
   }

   if(category) {
    filterArticle = filterArticle.filter((article)=> article.category === category)
   }
   if(sortByViews === "true") {
       filterArticle = [...filterArticle].sort((a, b)=> a.views - b.views)
   }

    return<>
        <h2>Admin Pannel</h2>
        <p>SortBy: {sortBy ?? (sortByViews === 'true' ? "views" : "none")} Category: {category ?? "All"}</p>
        <button onClick={handleViews}>Sort By Views</button>
        <div>
        <ul className="filter">
            {filterArticle.map((article)=>(
                <li key={article.id}>{article.title} - {article.views} views - {article.category} </li>
            ))}
        </ul>
        </div>
    </>
}

export default Articles