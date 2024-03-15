import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import { useEffect } from "react";
import { useState } from "react";
import { UserInterface } from "./types/Userinterface";
import { fetchData } from "./utils/api";
function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAndHandleErrors();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1 className="my-3">Controlled Form</h1>
          <ControlledForm />
        </div>
        <div className="col-5">
          <h2 className="my-3">Uncontrolled Form</h2>
          <UncontrolledForm />
        </div>
        <div className="col-2">
          <h3 className="my-3">Users list</h3>
          {isLoading && <h4>Loading....</h4>}
          {error &&
            <p>
              {error}
            </p>}
          <ol>
            {users.map((user: UserInterface) =>
              <li key={user.id}>
                {user.name}
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
