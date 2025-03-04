const function1 = async (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

//   console.log(function1([1, 2, 3, 4, 5,6]));




const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Sample Data from API" });
      }, 2000); 
    });
  };
  const function2 = async()=>{
    try {
        const data =  await fetchData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
function2();

const fetching = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Simulated API call failed"));
      }, 1000);
    });
  };

  const await = async () => {
    try {
      const data = await fetching();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data. Please try again later.");
    }
  };

  await();


  const concurrentReq = async () => {
    try {
      const [result1, result2] = await Promise.all([fetchData(), fetchingData()]);
      console.log("Combined Results:");
      console.log("Result 1:", result1);
      console.log("Result 2:", result2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 concurrentReq();


 const fetchFromUrl = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  };

  const parallelCal = async (urls) => {
    try {
      const fetchPromises = urls.map(url => fetchFromUrl(url));
      const results = await Promise.all(fetchPromises);
      console.log("Responses from all URLs:", results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  parallelCal(urls);