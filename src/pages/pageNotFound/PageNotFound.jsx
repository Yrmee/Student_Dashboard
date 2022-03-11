import './pageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="pageNotFound">
            <div className="pageNotFoundContainer">
                <h3 className="pageNotFoundTitle">
                    Oops! Something went wrong..
                </h3>
                <Link to="/">
                    <button className="studentAddButton"> Go Back </button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound;