import { ScaleLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <ScaleLoader color="yellow" />
        </div>
    )
}

export default Loading
