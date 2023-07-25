import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./customize/fetch";
import './Blog.scss';
const DetailBlog = () => {

    let { id } = useParams();
    const navigate = useNavigate();
    const { users: dataBlogDetail, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    console.log(dataBlogDetail);
    const handleBack = () => {
        navigate("/blog");
    }
    return (
        <div>
            <div><span style={{ cursor: 'pointer' }} onClick={handleBack}>&lt;-- Back</span></div>
            <div className="blog-detail">
                {loading === false && dataBlogDetail &&
                    <div>
                        <div className="title">Blod ID: {id} --- {dataBlogDetail.title}</div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </div>
                }
                {loading === true && <div style={{ textAlign: 'center !important', width: '100%' }}>loading data....</div>}
            </div>
        </div >

    )
}
export default DetailBlog;