import { Link } from "react-router-dom";


export const SignUp = () => {
  return (
    <div>
      <form action="">
        <div>
          <input type="text" placeholder="Name" />
          <p></p>
        </div>
        <div>
          <input type="text" placeholder="Email" />
          <p></p>
        </div>
        <div>
          <input type="text" placeholder="Password" />
          <p></p>
        </div>
        <div>
          <input type="text" placeholder="Confirm Password" />
          <p></p>
        </div>
        <button>Sign Up</button>
        <div>
          <span>
            Or Login <Link to="/login">here</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
