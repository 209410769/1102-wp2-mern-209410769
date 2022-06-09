import axios from "axios";
import { useEffect } from "react";

const TestFetchUseProxy_69 = () => {

    const fetchDataLocal = async () => {
        const resp = await fetch('/api/data.json');
        const data_local_json = await resp.json();
        console.log('local json data', data_local_json);
    }

    const fetchData1 = async () => {
        const response = await fetch('/api/v1');
        const data1 = await response.json();
        console.log('fetch data1', data1);
    };

    const fetchData2 = async () => {
        const data2 = await axios.get('/api/v1');
        console.log('axios data2', data2.data);
    };

    const fetchData3 = async () => {
        const currentUser = {
            name: "YBL",
            email: "209@gms.tku.edu.tw",
            password: "123qwe"
        };

        try {
            const { data } = await axios.post('/api/v1/auth_69/register_69', currentUser);
            console.log('register data', data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchDataLocal();
    }, []);
    useEffect(() => {
        fetchData1();
    }, []);
    useEffect(() => {
        fetchData2();
    }, []);
    useEffect(() => {
        fetchData3();
    }, []);
    return (
        <></>
    );

};
export default TestFetchUseProxy_69;