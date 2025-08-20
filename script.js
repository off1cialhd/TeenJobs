// Sample UK jobs
const jobs = [
  {title: "Pot Washer", employer: "Local Cafe", pay: "£9/hr", location: "London"},
  {title: "Dog Walker", employer: "Mrs. Smith", pay: "£10/hr", location: "Manchester"},
  {title: "Paper Round", employer: "Daily News", pay: "£8/hr", location: "Birmingham"}
];

const jobList = document.getElementById("job-list");

jobs.forEach(job => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${job.title}</strong> - ${job.employer} - ${job.pay} - ${job.location} <button>Apply</button>`;
  jobList.appendChild(li);
});
