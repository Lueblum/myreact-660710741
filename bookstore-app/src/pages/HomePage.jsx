import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div>Welcome to the HomePage</div>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to = "/books">Go to Book List</Link>
        </div>
    )
}

export default HomePage;