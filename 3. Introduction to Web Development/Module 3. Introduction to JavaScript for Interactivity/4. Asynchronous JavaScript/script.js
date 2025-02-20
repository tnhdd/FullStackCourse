function fetchDataWithCallback(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback("Error fetching data", null);
    }
  };
  xhr.send();
}

// Test the callback function
// fetchDataWithCallback((error, data) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// });

function fetchDataWithPromises() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject("Error fetching data");
      }
    };
    xhr.send();
  });
}

// fetchDataWithPromises()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function fetchDataAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Status: ${response.json}`);
    }
    const container = document.getElementById("data-container");
    container.innerHTML = data
      .map((user) => `<p>${user.name} - ${user.email}</p>`) // Display user data
      .join("");
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
// Add event listener to button
document.getElementById("fetch-data").addEventListener('click', fetchDataAsync)
