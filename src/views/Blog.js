import useFetch from './customize/fetch.js';
import './Blog.scss'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import AddNewBlog from './AddNewBlog.js';
const Blog = () => {
    const [newData, setnewData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const { users: dataBlog, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    //let newData = [];
    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newDatas = dataBlog.slice(0, 9);
            setnewData(newDatas);
            // console.log('----', newData);
        }
    }, [dataBlog]);
    const handleAddNew = (blog) => {
        //navigate("/add-new-blog");

        let data = newData;
        data.unshift(blog);
        setShow(false);
        setnewData(data);
        //console.log(newData)
    }
    const deletePost = (id) => {
        // alert('dasda');
        let data = newData;
        data = data.filter(item => item.id !== id);
        setnewData(data);
    }

    return (
        <div>

            <Button variant="primary" className='my-3' onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>

            </Modal>


            <div className='blog-container'>
                {loading === false && newData && newData.length > 0 && newData.map((item, index) => {
                    return (
                        <div className='single-blog' key={index}>
                            <div className='title'>
                                <span>{item.title} </span>
                                <span className='delete' onClick={() => deletePost(item.id)}>X</span>
                            </div>
                            <div className='content'>{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View detail</Link>
                            </button>
                        </div>
                    )
                })}
                {loading === true && <div style={{ textAlign: 'center !important', width: '100%' }}>loading data....</div>}
            </div>
        </div>

    );
}
export default Blog;