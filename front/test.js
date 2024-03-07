console.log("running test.js");

const login = async () => {
    const response = await fetch('https://aasolutionsdevs.online/restaurant/login/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({phone: "+994553858536", password: "fazil"})
    });
    const data = await response.json();
    console.log("result", data);
}

console.log("calling login()");
login();
