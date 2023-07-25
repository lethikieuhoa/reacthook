import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url, islocal) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        setLoading(false);
        async function fetchData() {
            try {
                let response = await axios.get(url, {
                    cancelToken: source.token
                });
                let data = null;
                if (islocal) {
                    data = response && response.data.users ? response.data.users : [];
                }
                else {
                    data = response && response.data ? response.data : [];
                    //console.log('---------------------', islocal)
                }
                setUsers(data);
                //console.log(data)
                // console.log(data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                }
                else {
                    setLoading(false);
                }
                // console.log(error);
            }


        }
        // setTimeout(() => {
        //     fetchData();
        // }, 3000)
        fetchData();
        return () => {
            source.cancel('Operation cancel by the user.')
        }
    }, []);
    return { users, loading };
}
export default useFetch;