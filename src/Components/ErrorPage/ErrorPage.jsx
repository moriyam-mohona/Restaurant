import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/ErrorPng.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={errorImage} alt="Error" className="w-1/3" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/" className="hover:underline">
        Back To Home Page
      </Link>
    </div>
  );
}
