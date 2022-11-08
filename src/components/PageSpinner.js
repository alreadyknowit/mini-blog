import {Rings} from "react-loader-spinner";


export default function PageSpinner(){

    return (
        <Rings
            height="80"
            width="80"
            color="#f1356d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
        />
    )
}