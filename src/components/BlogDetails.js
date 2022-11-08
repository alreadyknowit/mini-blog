import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch"
import PageSpinner from "./PageSpinner";

export default function BlogDetails({blog}) {
    let {id} = useParams()
    const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, isLoaded, error} = id != null ? useFetch("http://localhost:8000/blogs/" + id) : {};

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id,
            {
                method: 'DELETE'
            }
        ).then(()=>{
                navigate('/')
        }).then()
    }

    return (
        <div>
            {
                blog == null ?
                    isLoaded ? <div className="blog-details" key={data.id}>
                            <article>
                                <h1>{data.title}</h1>
                                <h5>{data.body}</h5>
                                <h3 className="author">{data.author}</h3>
                                <button onClick={() => handleDelete()}>Delete</button>
                            </article>

                        </div>
                        : <PageSpinner/>

                    :
                    <div className="blog-details" key={blog.id}>
                        <article>
                            <h1>{blog.title}</h1>
                            <h5>{blog.body}</h5>
                        </article>

                    </div>
            }
        </div>

    );
}