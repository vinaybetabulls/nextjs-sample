import axios from "axios";
import Error from 'next/error';

const User = ({ user = {}, error }) => {
    if (error) {
        return <Error title={error.errorMessage} statusCode={error.statusCode} />
    }
    return (
        <div>user id page..
            {JSON.stringify(user)}
        </div>
    )
}

export default User;


export const getServerSideProps = async ({ query }) => {
    const { userId } = query;
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`);
        return {
            props: {
                user: result.data
            }
        }
    } catch (error) {
        return {
            props: {
                error: {
                    errorMessage: error.response?.statusText ? error.response?.statusText : 'There is an error',
                    statusCode: error.response?.status ? error.response?.status : 500
                }
            }
        }
    }

}