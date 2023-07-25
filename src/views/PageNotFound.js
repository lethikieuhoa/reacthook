import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
    return (
        <div>
            <p>404 Page not found</p>
            <button className="btn btn-primary" onClick={handleBack}>Go to HomePage</button>
        </div>
    )
}
export default PageNotFound;