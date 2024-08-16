async function fetchData() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/157336?api_key=a7068ed44eb33ca910b091f8659bb581"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Ok");
    // console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
