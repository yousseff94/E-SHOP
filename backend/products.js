const products= [
    {
        id:1,
        name: "Msi Notebook Titan Gt77",
        desc: ["CPU:12th Gen Intel® Core™ i9-12900HX Processor/","GRAPHICS:NVIDIA® GeForce RTX™ 3080 Ti Laptop GPU 16GB GDDR6"],
        price: 5999,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515693/onlineshop/msi-notebook-titan-gt77_iqv9l7.jpg"
        
    },
    {
        id:2,
        name: "Msi 13 intel Core i7",
        desc: ["CPU:Raptor Lake I7-1360P Processor/" ,"GRAPHICS:Iris Xe Graphics"],
        price: 2500,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515663/onlineshop/msi-13-intel-core-i7_b5n6qu.png"
        
    },
    {
        id:3,
        name: "Microsoft Laptop Studio Core i7",
        desc: ["CPU: Intel Core i7-11370H/","GRAPHICS:RTX 3050Ti"],
        price: 1879,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515656/onlineshop/microsoft-laptop-studio-corei7-16gb_ym4riz.jpg"
        
    },
    {
        id:4,
        name: "Pc Specialist Gaming Defiance",
        desc: ["CPU:Intel® Core™ i7-12700H 14-core processor/","GRAPHICS:GeForce RTX 3060 / 3070 Ti / 3080 Ti"],
        price: 1633,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515725/onlineshop/pc-specialist-ultra-gaming-defiance_jge8ae.jpg"
        
    },
    {
        id:5,
        name: "iphone 14 Pro",
        desc: ["CPU:Hexa-core 2x3.46 GHz Everest + 4x2.02 GHz Sawtooth/","MEMORY:128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM"],
        price: 1319,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515650/onlineshop/iphone14-pro_vd9vqu.png"
        
    },
    {
        id:6,
        name: "iphone 14",
        desc: ["CPU:Hexa-core 2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard/","MEMORY:128GB 6GB RAM, 256GB 6GB RAM"],
        price: 820,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515645/onlineshop/iphone14_ur5w8b.jpg"
        
    },
    {
        id:7,
        name: "iphone 13 Pro",
        desc: ["CPU:Hexa-core 2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard/","MEMORY:128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM"],
        price: 850,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515640/onlineshop/iphone13-pro_jk36ee.png"
        

    },
    {
        id:8,
        name: "iphone 13",
        desc: ["CPU:Hexa-core 2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard/","MEMORY:	128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM"],
        price: 999,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515632/onlineshop/apple-iphone-13_mvx1sg.jpg"
        

    },
    {
        id:9,
        name: "Oppo Find N2",
        desc: ["CPU:Octa-core 1x3.0 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x2.0 GHz Cortex-A510/","MEMORY:256GB 12GB RAM, 512GB 16GB RAM"],
        price: 1227,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515701/onlineshop/oppo-findn2_d7vpvm.jpg"
        

    },
    {
        id:10,
        name: "Oppo Find X5 Pro Black",
        desc: ["CPU:Octa-core 1x3.00 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510/","MEMORY:256GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM"],
        price: 1658,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515710/onlineshop/oppo-findx5-pro-black_lwuepu.png"
        

    },
    {
        id:11,
        name: "Oppo Reno 8 Pro Gold",
        desc: ["CPU:Octa-core 4x2.85 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55/","MEMORY:256GB 8GB RAM, 256GB 12GB RAM"],
        price: 688,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515717/onlineshop/oppo-reno8-gold_p7quyq.png"
        

    },
    {
        id:12,
        name: "Galaxy s22 Ultra",
        desc: ["CPU:Octa-core 1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510/","MEMORY:128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM"],
        price: 899,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1674515732/onlineshop/samsung-galaxy-s22-_jzkwbd.png"
        

    },
    {
        id:13,
        name: "iPhone 12 Pro",
        desc: ["CPU:Hexa-core 2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm/","MEMORY:128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM"],
        price: 696,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1669142508/onlineshop/iphone12pro_rs6d14.jpg"


    },
    {
        id:14,
        name: "iPhone 12",
        desc: ["CPU:Hexa-core 2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm/","MEMORY:64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM"],
        price: 482,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1669142494/onlineshop/iphone12_i8x14h.jpg"


    },
    {
        id:15,
        name: "Galaxy S23",
        desc: ["CPU:Octa-core 1x3.36 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510/","MEMORY:256GB 8GB RAM, 512GB 8GB RAM"],
        price: 399,
        image:"https://res.cloudinary.com/dbgfefjco/image/upload/v1669142482/onlineshop/galaxyS_tieqe7.png"


    }
]

module.exports= products ;