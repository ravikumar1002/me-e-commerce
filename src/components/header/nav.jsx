import "./nav.css"
import "../../css/main.css"
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <>
      <header className="flex-space-around p-2 nav-bg-primary nav-wrapper">
        <div className="inline-centre">
          <h2>
            <Link to="/" className="nav-text-primary text-decoration-none">
              Store
            </Link>
          </h2>
        </div>
        <div>
          <span className="input-search nav-input-width">
            <span className="fas fa-search input-search-icon"></span>
            <input
              type="search"
              className="input-search-input"
              placeholder="Search"
            />
          </span>
        </div>
        <nav className="nav-action-btns">
          <ul className="horizontal-align-centre nav-text-primary">
            <li className="list-style-none">
              <button>
                <Link to="#" className="btn btn-secondary btn-sm border-squre">
                  Login
                </Link>
              </button>
            </li>
            <li className="list-style-none">
              <button>
                <Link
                  to="wishlist"
                  className="nav-btn-primary nav-text-primary btn-sm"
                >
                  <span className="badge-container">
                    <i className="fas fa-heart fs-md"></i>
                    <span className="badge-number-round-x-sm badge-end-top nav-badge-primary">
                      1
                    </span>
                  </span>
                </Link>
              </button>
            </li>
            <li className="list-style-none">
              <button>
                <Link
                  to="cart"
                  className="inline-centre nav-text-primary btn-icon-text-left btn-sm nav-btn-primary"
                >
                  <span className="badge-container">
                    <i className="fas fa-shopping-cart fs-md"></i>
                    <span className="badge-number-round-x-sm badge-end-top nav-badge-primary">
                      1
                    </span>
                  </span>
                </Link>
              </button>
            </li>
            <li className="list-style-none">
              <button>
                <Link
                  to="profile"
                  className="inline-centre nav-text-primary btn-icon-text-left btn-sm nav-btn-primary"
                >
                  <span className="badge-container">
                    <i className="fas fa-user fs-md"></i>
                  </span>
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Nav };
