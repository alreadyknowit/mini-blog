import useFetch from "../hooks/useFetch";
import Blog from "../model/Blog";
import BlogList from "./BlogList";
import PageSpinner from "./PageSpinner";
export default function Home() {
  
  const {
    data: blogs,
    isLoaded,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const mapDataToBlog = () => {
    return blogs.map(
      (blog) => new Blog(blog.id, blog.title, blog.body, blog.author)
    );
  };
  return (
    <div className="home">
      {error != null ? (
        <div>{error}</div>
      ) : !isLoaded ? (
        <PageSpinner/>
      ) : (
        <BlogList blogs={mapDataToBlog()} title="Blogs"></BlogList>
      )}
    </div>
  );
}
/*

 new Blog(
      1,
      "What is Lorem Ipsum?",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Rani Pomponius"
    ),
    new Blog(
      2,
      "The standard Lorem Ipsum passage, used since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Rani Pomponius"
    ),
    new Blog(
      3,
      "1914 translation by H. Rackham",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Rani Pomponius"
    ),
  
*/
