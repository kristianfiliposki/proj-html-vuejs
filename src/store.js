import { reactive } from 'vue'

export const store = reactive({
    chiave: "valore",
    srcf: [
        "/public/construction/images/project1-featured-294276386.jpg",
        "/public/construction/images/project2-featured-15013609.jpg",
        "/public/construction/images/project3-featured-189023420.jpg",
    ],
    cards: [
        {
            logo: `<i class="fa-solid fa-building"></i>`,
            name: "Buildings",
            p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
        },
        {
            logo: `<i class="fa-solid fa-building"></i>`,
            name: "Renovate",
            p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."

        },
        {
            logo: `<i class="fa-solid fa-building"></i>`,
            name: "Construct",
            p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."

        },
        {
            logo: `<i class="fa-solid fa-building"></i>`,
            name: "Exclusive",
            p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."

        },
    ],
    stats: [
        {
            logo: "",
            numero: "3534",
            name: "PLANNING APPLICATIONS",
        },
        {
            logo: "",
            numero: "896",
            name: "COMPLETED PROJECTS",
        },
        {
            logo: "",
            numero: "172",
            name: "TRAINED PROFESSIONALS",
        },
        {
            logo: "",
            numero: "19",
            name: "INTERNATIONAL OFFICES",
        },

    ],
    services:[
        {
            logo:"",
            title:"Great Services",
            paragraph:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia ",
        },
        {
            logo:"",
            title:"High standard",
            paragraph:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia ",
        },
        {
            logo:"",
            title:"Professional team",
            paragraph:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia ",
        },
        {
            logo:"",
            title:"Creative Solutions",
            paragraph:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "
        },

    ],

    img:"/public/construction/images/home-testimonial-84268399.jpg"
});