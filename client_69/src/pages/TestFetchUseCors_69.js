import axios from "axios";
import { useEffect } from "react";

const TestFetchUseCors_69 = () => {
    const fetchData1 = async () => {
        const response = await fetch('http://localhost:5001');
        const data1 = await response.json();
        console.log('fetch data1', data1);
    };

    const fetchData2 = async () => {
        const data2 = await axios.get('http://localhost:5001');
        console.log('axios data2', data2.data);
    };

    const fetchData3 = async () => {
        const currentUser = {
            name: "YanBoLin15",
            email: "20941076915@gms.tku.edu.tw",
            password: "password15"
        };

        try {
            const { data } = await axios.post('http://localhost:5001/api/v1/auth_69/register_69', currentUser);
            console.log('register data', data);
        } catch (err) {
            console.log(err);
        }
    };

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

export default TestFetchUseCors_69;