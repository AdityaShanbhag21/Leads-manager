let myLeads = [];
const inputEl = document.getElementById("input-field");
const inputBtn = document.getElementById("input-button");
const ulEl = document.getElementById("ul-elements");
const delAll = document.getElementById("deleteAll");
const saTab = document.getElementById("saveTab");

function render(leads) {
    ulEl.innerHTML = "";
    leads.forEach((lead, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = lead;
        a.textContent = lead;
        a.target = "_blank";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";
        delBtn.addEventListener("click", () => {
            myLeads.splice(index, 1);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        });

        li.appendChild(a);
        li.appendChild(delBtn);
        ulEl.appendChild(li);
    });
}


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function addLead(lead) {
    if (lead && !myLeads.includes(lead)) {
        myLeads.push(lead);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
}

inputBtn.addEventListener("click", () => {
    addLead(inputEl.value);
    inputEl.value = ""; 
    console.log("ADDED INPUT")
});

delAll.addEventListener("click", () => {
    localStorage.removeItem("myLeads");
    myLeads = [];
    render(myLeads);
    console.log("DELETED ALL");
});

saTab.addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "getTab" }, (response) => {
    if (response && response.url) {
      addLead(response.url);
      console.log("TAB SAVED");
    }
  });
});


const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            myLeads.splice(index, 1);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
            console.log("item deleted");
        });
});
