import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      // const {data:{user},error} = await supabase.auth.getUser();
      // if (error) {
      //   toast.error("Please Login first.");
      //   navigate("/login");
      // }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logOutHandler = async () => {
    try {
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <div className="card border rounded-sm text-2xl p-5 w-1/2">
          <div className="mb-2">
            <h1>
              Name:
              {/* {user.user_metadata.full_name} */}
            </h1>
          </div>
          <div className="mb-2">
            <h1>
              Email:
              {/* {user.email} */}
            </h1>
          </div>
          <div className="mb-3">
            <button
              onClick={logOutHandler}
              className="px-5 py-2 text-sm bg-indigo-500 rounded-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
