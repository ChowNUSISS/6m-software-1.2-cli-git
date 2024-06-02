document.getElementById("first-name").textContent = "Kok Peng";
document.getElementById("last-name").textContent = "Chow";
document.getElementById("github-url").href = "https://github.com/ChowNUSISS";
document.getElementById("location").textContent = "Singapore";
document.getElementById("country-flag").src =""
document.getElementById("about-me").textContent = "I am a aspiring data scientist with background in AI and analytics. I enjoy exploring new technologies and applying machine learning techniques to solve complex problems.";

const hobbies = ["Running ", "Music"];
const hobbiesList = document.getElementById("hobbies-list");

hobbies.forEach(hobby => {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});
