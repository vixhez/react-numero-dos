import axios from "./axios";

// axios.get("/articles").then(({data}) => console.log(data.data));

// axios.post("/articles", {
//     title: "Gorillas and chimps",
//     content: "Not only clever and interesting, but in general fantastic!",
//     tags: ["mammalian", "adorable", "marvellous"],
// }).then(({data}) => {
//     console.log(data.data.id);
// })

// axios.get("/articles/31").then(({data}) => {
//     console.log(data.data);
// })

// axios.patch("/articles/31", {
//     tags: ["covered in chilli flakes"],
// }).then(({data}) => {
//     console.log(data.data.tags);
// })

axios.delete("/articles/75").then(() => {
    console.log("Deleted");
})