import { useRouter } from "next/router";
import React from "react";


const exampleData = [
    {
        id: 1,
        firstname: "Naran-Erdene",
        lastname: "Gankhuyag",
        school: "Nest",
        job: "Scientist",
        alive: "true",
        items: [
            { id: 10, name: "water bottle" },
            { id: 11, name: "glasses" }
        ],
        image: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYjxDXSt0uLzdMS91Z7jP-9KPiFfszx6uHw&s"
    },
    {
        id: 2,
        firstname: "Anand",
        lastname: "Altankhuyag",
        school: "Nest",
        job: "Basketballer",
        alive: "true",  
        items:[
            { id: 12, name: "Opium"},
            { id: 13, name: "Baggy jeans"}
        ],
        image:
        "https://a.wattpad.com/useravatar/swirlycats.256.212172.jpg"
    },
    {
        id: 3,
        firstname: "Aidaulet",
        lastname: "Nurbolsin",
        school: "Nest",
        job: "Biker, Huligaan",
        alive: "true",
        items:[
            { id: 14, name: "Surron"},
            { id: 15, name: "170cm"}
        ],
        image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/68/01/e9/6801e9f9-a7aa-177c-43fa-0cb9594a5d36/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/256x256bb.jpg"
    },
    {
        id: 4,
        firstname: "Anduul",
        lastname: "Altankhaich",
        school: "Nest",
        job: "Volleyballer",
        alive: "true",
        items:[
            { id: 16, name: "Burjgar"},
            { id: 17, name: "180cm"}
        ],
        image:
        "https://images.stockcake.com/public/5/c/0/5c0bc3b8-c95f-42fe-be4e-460ddddb00fc_medium/volleyball-joy-jump-stockcake.jpg"
    },
    {
        id: 5,
        firstname: "Chinguun",
        lastname: "Toivgoo",
        school: "Nest",
        job: "Good boy",
        alive: "true",
        items: [
            { id: 10, name: "A+" },
            { id: 11, name: "Bike" }
        ],
        image: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ReO1dft8tKZ56AslRXgokxIgEPtBKtPLFg&s"
    },
    {
        id: 6,
        firstname: "Erkhes",
        lastname: "Sanchir",
        school: "Nest",
        job: "Mathematica",
        alive: "true",
        items:[
            { id: 12, name: "FC"},
            { id: 13, name: "Long hair"}
        ],
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswb0ykVPoJ2StzrANmLK-safJYRMpGGU0iA&s"
    },
    {
        id: 7,
        firstname: "Batpurev",
        lastname: "Batmunkh",
        school: "Nest",
        job: "C++",
        alive: "true",
        items:[
            { id: 14, name: "Freaky"},
            { id: 15, name: "Smart"}
        ],
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsi6gvGtO0tBPk_m-HY_w1D8jz4cYOsfSvw&s"
    },
    {
        id: 8,
        firstname: "Khantushig",
        lastname: "Gankhuyag",
        school: "Nest",
        job: "History",
        alive: "true",
        items:[
            { id: 16, name: "Wooly shirt"},
            { id: 17, name: "phone"}
        ],
        image:
        "https://i.pinimg.com/474x/f2/4c/e0/f24ce09855f117cc3d462436f3e290db.jpg"
    },
    {
        id: 9,
        firstname: "Ayden-Anand",
        lastname: "Amarbold",
        school: "Nest",
        job: "Professional Dancer",
        alive: "true",
        items:[
            { id: 14, name: "Dancing skill"},
            { id: 15, name: "notebook"}
        ],
        image:
        "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/59319/square_thumb%402x.jpg"
    },
    {
        id: 10,
        firstname: "Soyombo",
        lastname: "Chingunjav",
        school: "Nest",
        job: "Creepy asf",
        alive: "true",
        items:[
            { id: 16, name: "Dangerous"},
            { id: 17, name: "Bad Boy"}
        ],
        image:
        "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/5a/9f/79/5a9f794f-1823-0096-8b1f-f5af06a5d13a/source/256x256bb.jpg"
    },
    


    

];

export default function lab4() {
    const router = useRouter();
    const a = exampleData;
    console.log("length ->", exampleData.length);
    const Back = () => {
        router.push("/");
      };
    return (
        <div className="p-10 space-y-6">
            <div className="flex justify-center mb-8">
            <button
                onClick={Back}
                 className="h-16 w-36 cursor-pointer bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all mb-6">Go Back</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {exampleData.map((element) => (
                    <div key={element.id} className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
                        <img 
                            src={element.image} 
                            alt={element.firstname}
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6 space-y-4">
                            <h2 className="text-3xl text-white font-bold text-center">{element.firstname} {element.lastname}</h2>
                            <p className="text-xl text-white text-center">{element.job}</p>
                            <p className="text-base text-white font-medium">School: <span className="text-yellow-300">{element.school}</span></p>
                            <div className="mt-2">
                                <p className="text-lg text-white font-semibold">Items:</p>
                                <ul className="list-disc ml-5 text-white space-y-1">
                                    {element.items.map((item) => (
                                        <li key={item.id} className="text-white">{item.name}</li>
                                    ))}
                                </ul>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}