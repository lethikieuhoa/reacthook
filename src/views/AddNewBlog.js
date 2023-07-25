import { useState } from 'react';
import axios from 'axios';
import './Blog.scss'
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitButton = async () => {
        if (!title) {
            alert('empty title'); return;
        }
        if (!content) {
            alert('empty content'); return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlogs = res.data;
            props.handleAddNew(newBlogs);
            console.log('check res data', newBlogs)
        }

    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">Add new blog</div>
            <div className='input-data'>
                <label>Title:</label>
                <input type="text" value={title} name='title' onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className='input-data'>
                <label>Content:</label>
                <input type="text" value={content} name='content' onChange={(event) => setContent(event.target.value)} />
            </div>
            <button className='btn-add-new' onClick={handleSubmitButton}>Submit</button>
        </div>
    )
}
export default AddNewBlog;