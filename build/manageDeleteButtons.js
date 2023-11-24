document.querySelectorAll(".deleteSchool").forEach((school)=>{
    school.addEventListener("click", async (event)=>{
        event.preventDefault();
        const url = `http://127.0.0.1:3000/api/v1/schools/${event.target.value}`;
        const result = await fetch(url, {method: "DELETE"});
        const resultJson = await result.json();
        window.alert(resultJson.message);
        location.replace(`http://127.0.0.1:3000/api/v1/schools`);
    })
})
;