import { useQuery } from "react-query";

export const Customers = () => {
  const { data, isLoading } = useQuery("customers", fetch("/customers"));
  console.log(data);

  return (
    <div>
      <h1>Customers</h1>
      <button onClick={() => console.log(data)}>Customers</button>
    </div>
  );
};
