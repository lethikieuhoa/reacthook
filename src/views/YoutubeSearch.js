import './Blog.scss';
import axios from 'axios';
import moment from 'moment'
import { useState, useEffect } from 'react';
const YoutubeSearch = () => {
    const [video, setVideo] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {

    }, []);
    const handleSearchYoutube = async () => {
        if (query !== '') {
            let res = await axios({
                "method": "GET",
                "url": 'https://www.googleapis.com/youtube/v3/search',
                "params": {
                    part: 'snippet',
                    maxResults: 20,
                    key: 'AIzaSyAYQy1KHY8Zv7JpNnFNlbrGPVEPhaoxnu4',
                    type: 'video',
                    q: query
                }
            });
            if (res && res.data.items && res.data.items) {
                let raw = res.data.items;
                let result = []; //console.log('check raw', raw);
                if (raw && raw.length > 0) {
                    raw.map((item, index) => {
                        let ob = {};
                        ob.id = item.id.videoId;
                        ob.title = item.snippet.title;
                        ob.createAt = item.snippet.publishedAt;
                        ob.des = item.snippet.description;
                        ob.author = item.snippet.channelTitle;
                        result.push(ob);
                        //console.log('check ob', ob);
                    })
                }
                setVideo(result);
            }
        }
        else {
            alert('Please input in to you need search')
        }

        //console.log(video);
    }
    return (
        <div className="youtuble-search-container">
            <div className="yt-search">
                <input type="text" placeholder='Search'
                    value={query} onChange={(event) => setQuery(event.target.value)} />
                <button type="button" onClick={handleSearchYoutube}>Search</button>
            </div>
            {video && video.length > 0 && video.map((item, index) => {
                return (
                    <div className='yt-result' key={item.id}>
                        <div className='left'>
                            <iframe className='iframe'

                                src={`https://www.youtube.com/embed/${item.id}`}
                                title="Youtube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className='right'>
                            <div className='title'>
                                {item.title}
                            </div>
                            <div className='created-at'>
                                Created At: {moment(item.createAt).format('DD-MM-YYYY HH:mm:ss')}
                            </div>
                            <div className='author'>
                                Author: {item.author}
                            </div>
                            <div className='description'>
                                {item.des}
                            </div>
                        </div>

                    </div>
                )
            })}


        </div>
    )
}
export default YoutubeSearch;