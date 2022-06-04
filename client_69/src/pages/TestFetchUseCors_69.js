import axios from "axios";

const TestFetchUseCors_69 = async () => {
    const response = await fetch('http://localhost:5001');
    const data1 = await response.json();
    console.log('fetch data1', data1);

    const data2 = await axios.get('http://localhost:5001');
    console.log('axios data2', data2.data);

    const currentUser = {
        name: "YanBoLin1",
        email: "2094107691@gms.tku.edu.tw",
        password: "password1"
    };

    try {
        const { data } = await axios.post('http://localhost:5001/api/v1/auth_69/register_69', currentUser);
        console.log('register data', data);
    } catch (err) {
        console.log(err);
    }
};
export default TestFetchUseCors_69