const title = document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container = document.querySelector(".container");
const date=document.getElementById("date");


const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
showAllTasks();
function showAllTasks(){
    tasks.forEach((value, index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
         
        const innerdiv=document.createElement("div");
        // div.setAttribute("class","")
        div.append(innerdiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);
         
        const dt=document.createElement("p");
          dt.innerText=value.date;
          innerdiv.append(dt);

        const span = document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deletebutton");
        // btn.innerText("-");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            removetask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTasks();
        })
        



        div.append(btn);

        container.append(div);

    })
}
// for removing occuring values of tasks
function removetask(){
    tasks.forEach((value)=>{
        const div=document.querySelector(".task");
         div.remove();
    })
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetask();
    tasks.push({
        title:title.value,
        date:date.value,
        description:description.value,
    });
    console.log(tasks);
    // alert("submitted");

    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
})