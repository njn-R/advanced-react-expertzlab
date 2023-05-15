import useFetchPerson from "./useFetchPerson";

const FetchData = () => {
  const {loading, error, data} = useFetchPerson()

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>Multiple Returns</h1>
      <h3>{data}</h3>
    </>
  );
};

export default FetchData
