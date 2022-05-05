import { useEffect } from "react";
import { MyDropdown } from "./components/MyDropdown";

export const App = () => {
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="text-center">
      <MyDropdown />
    </div>
  );
};
