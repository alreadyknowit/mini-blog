import {Link} from "react-router-dom";

export default function NotFound(){
    return (
        <div>
            <h2>Where do you think you are going?</h2>
            <h3>I think you are in the wrong way. Go back solider</h3>
            <Link to ="/" >Back to Home</Link>
        </div>
    )
}