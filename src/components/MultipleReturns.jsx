import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users/1";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState("Default Value");

//   useEffect(() => {
//     fetch(url)
//       .then((response) => {
//         if (response.status >= 200 && response.status <= 299) {
//           return response.json();
//         } else {
//           setLoading(false);
//           setError(true);
//         }
//       })
//       .then((data) => {
//         const { name } = data;
//         console.log(name);
//         setData(name);
//         setLoading(false);
//       })
//       .catch((error) => console.log(error));
//   }, []);
    
    //   useEffect(() => {
    //     async function fetchData() {
    //       try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //           throw new Error("404 Error");
    //         }
    //         const { name } = await response.json();
    //         setData(name);
    //       } catch (error) {
    //         setError(error.message);
    //       } finally {
    //         setLoading(false);
    //       }
    //     }
    //     fetchData();
    //   }, []);

    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data.name);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [url]);


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

export default MultipleReturns;
