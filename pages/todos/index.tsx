import axios from "axios";
import Link from 'next/link';
import Error from 'next/error';

const Home = ({ todos, error }) => {
  if (error) {
    return <Error title={error.errorMessage} statusCode={error.statusCode} />
  }
  return (
    <div className="container">
      <h1>Todos..</h1>
      {
        todos?.map((td, key) => {
          return (
            <ul key={key}>
              <Link href="todos/[userId]" as={`/todos/${td.id}`}>
                <a>
                  <li>Id : {td.id} </li>
                  <li><span> Title : </span>{td.title}</li>
                  <li><span> completed : </span>{td.completed ? 'true' : 'false'}</li>
                </a>
              </Link>
            </ul>
          )
        })
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return {
      props: { todos: result.data }
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

export default Home
