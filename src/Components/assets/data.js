import berryyogurt from "./Dairy/berryyogurt.png"
import curd from "./Dairy/curd.png"
import milkcoconut from "./Dairy/milkcoconut.png"
import milkalmond from "./Dairy/milkalmond.png"

import apples from "./Fruits/apples.png"
import mosambi from "./Fruits/mosambi.png"
import watermelon from "./Fruits/watermelon.png"
import blueberry from "./Fruits/blueberry.png"

import frozencoconut from "./Frozen/frozencoconut.png"
import frozencorn from "./Frozen/frozencorn.png"
import frozenpeas from "./Frozen/frozenpeas.png"
import frozenvegies from "./Frozen/frozenvegies.png"

import bajra from "./Millets/bajra.png"
import wheat from "./Millets/BuckWheat.png"
import quinoa from "./Millets/quinoa.png"
import basmatirice from "./Millets/basmatirice.png"

import ahar from "./Pulses/ahar.png"
import chanakabuli from  "./Pulses/chanakabuli.png"
import chanakala from "./Pulses/chanakala.png"
import rajma from "./Pulses/rajma.png"

import brinjal from "./Vegies/brinjal.png"
import capsicum from "./Vegies/capsicum.png"
import cauliflower from "./Vegies/cauliflower.png"
import mushroom from "./Vegies/mushroom.png"
let full_data=[{
    name: "Almond Milk",
    image: milkalmond,
    price: 150,
    oldprice: 180,
    quantity: 0,
    id:1
},
{
    name: "Curd",
    image: curd,
    price: 100,
    oldprice: 120,
    quantity: 0,
    id:2
},
{
    name: "Berry Yogurt",
    image: berryyogurt,
    price: 120,
    oldprice: 150,
    quantity: 0,
    id:3
},
{
    name: "Coconut Milk",
    image: milkcoconut,
    price: 180,
    oldprice: 190,
    quantity: 0,
    id:4
},{
    name: "Apple",
    image: apples,
    price: 50,
    oldprice: 70,
    quantity: 0,
    id:5
},
{
    name: "Mosambi",
    image: mosambi,
    price: 40,
    oldprice: 65,
    quantity: 0,
    id:6
},
{
    name: "Watermelon",
    image: watermelon,
    price: 60,
    oldprice: 75,
    quantity: 0,
    id:7
},
{
    name: "Blue Berries",
    image: blueberry,
    price: 120,
    oldprice: 135,
    quantity: 0,
    id:8
},{
    name: "Frozen Coconut",
    image: frozencoconut,
    price: 200,
    oldprice: 210,
    quantity: 0,
    id:9
},
{
    name: "Fresho Frozen Corn",
    image: frozencorn,
    price: 180,
    oldprice: 195,
    quantity: 0,
    id:10
},
{
    name : "Fresho Frozen Peas",
    image: frozenpeas,
    price: 160,
    oldprice: 175,
    quantity: 0,
    id:11
},
{
    name: "Frozen Vegtables",
    image: frozenvegies,
    price: 120,
    oldprice: 140,
    quantity: 0,
    id:12
}, {
    name: "Whole Bajra: Peas Millet",
    image: bajra,
    price: 100,
    oldprice: 110,
    quantity: 0,
    id:13
},
{
    name: "Organic Basmati Rice",
    image: basmatirice,
    price: 130,
    oldprice: 140,
    quantity: 0,
    id:14
},
{
    name: "Buck Wheat Kuttu Seeds",
    image: wheat,
    price: 80,
    oldprice: 100,
    quantity: 0,
    id:15
},
{
    name: "White Quinoa Grains",
    image: quinoa,
    price: 110,
    oldprice: 125,
    quantity: 0,
    id:16
}, {
    name: "Capsicum",
    image: capsicum,
    price: 25,
    oldprice: 30,
    quantity: 0,
    id:17
},
{
    name: "Brinjal (Egg Plant)",
    image: brinjal,
    price: 30,
    oldprice: 40,
    quantity: 0,
    id:18
}, 
{
    name: "Cauliflower",
    image: cauliflower,
    price: 20,
    oldprice: 30,
    quantity: 0,
    id:19
},
{
    name: "Mushrooms",
    image: mushroom,
    price: 40,
    oldprice: 50,
    quantity: 0,
    id:20
}]
let dairy_data = [
    {
        name: "Almond Milk",
        image: milkalmond,
        price: 150,
        oldprice: 180,
        quantity: 0,
        id:1
    },
    {
        name: "Curd",
        image: curd,
        price: 100,
        oldprice: 120,
        quantity: 0,
        id:2
    },
    {
        name: "Berry Yogurt",
        image: berryyogurt,
        price: 120,
        oldprice: 150,
        quantity: 0,
        id:3
    },
    {
        name: "Coconut Milk",
        image: milkcoconut,
        price: 180,
        oldprice: 190,
        quantity: 0,
        id:4
    }, {
        name: "Organic Ahar (Tur) Dal",
        image: ahar,
        price: 60,
        oldprice: 75,
        quantity: 0,
        id:5
    },
    {
        name: "Organic Kala Chana Dal",
        image: chanakala,
        price: 50,
        oldprice: 65,
        quantity: 0,
        id:6
    },
    {
        name: "Organic Kabuli Chana Dal",
        image: chanakabuli,
        price: 55,
        oldprice: 80,
        quantity: 0,
        id:7
    },
    {
        name: "Organic Red Rajma",
        image: rajma,
        price: 45,
        oldprice: 60,
        quantity: 0,
        id:8
    }
]
let fruits_data = [
    {
        name: "Apple",
        image: apples,
        price: 50,
        oldprice: 70,
        quantity: 0,
        id:9
    },
    {
        name: "Mosambi",
        image: mosambi,
        price: 40,
        oldprice: 65,
        quantity: 0,
        id:10
    },
    {
        name: "Watermelon",
        image: watermelon,
        price: 60,
        oldprice: 75,
        quantity: 0,
        id:11
    },
    {
        name: "Blue Berries",
        image: blueberry,
        price: 120,
        oldprice: 135,
        quantity: 0,
        id:12
    }
]
let frozen_data = [
    {
        name: "Frozen Coconut",
        image: frozencoconut,
        price: 200,
        oldprice: 210,
        quantity: 0,
        id:13
    },
    {
        name: "Fresho Frozen Corn",
        image: frozencorn,
        price: 180,
        oldprice: 195,
        quantity: 0,
        id:14
    },
    {
        name : "Fresho Frozen Peas",
        image: frozenpeas,
        price: 160,
        oldprice: 175,
        quantity: 0,
        id:15
    },
    {
        name: "Frozen Vegtables",
        image: frozenvegies,
        price: 120,
        oldprice: 140,
        quantity: 0,
        id:16
    }
]
let millet_data = [
    {
        name: "Whole Bajra: Peas Millet",
        image: bajra,
        price: 100,
        oldprice: 110,
        quantity: 0,
        id:17
    },
    {
        name: "Organic Basmati Rice",
        image: basmatirice,
        price: 130,
        oldprice: 140,
        quantity: 0,
        id:18
    },
    {
        name: "Buck Wheat Kuttu Seeds",
        image: wheat,
        price: 80,
        oldprice: 100,
        quantity: 0,
        id:19
    },
    {
        name: "White Quinoa Grains",
        image: quinoa,
        price: 110,
        oldprice: 125,
        quantity: 0,
        id:20
    }
]
let pulses_data = [
    {
        name: "Organic Ahar (Tur) Dal",
        image: ahar,
        price: 60,
        oldprice: 75,
        quantity: 0,
        id:21
    },
    {
        name: "Organic Kala Chana Dal",
        image: chanakala,
        price: 50,
        oldprice: 65,
        quantity: 0,
        id:22
    },
    {
        name: "Organic Kabuli Chana Dal",
        image: chanakabuli,
        price: 55,
        oldprice: 80,
        quantity: 0,
        id:23
    },
    {
        name: "Organic Red Rajma",
        image: rajma,
        price: 45,
        oldprice: 60,
        quantity: 0,
        id:24
    }
]
let vegies_data = [
    {
        name: "Capsicum",
        image: capsicum,
        price: 25,
        oldprice: 30,
        quantity: 0,
        id:25
    },
    {
        name: "Brinjal (Egg Plant)",
        image: brinjal,
        price: 30,
        oldprice: 40,
        quantity: 0,
        id:26
    }, 
    {
        name: "Cauliflower",
        image: cauliflower,
        price: 20,
        oldprice: 30,
        quantity: 0,
        id:27
    },
    {
        name: "Mushrooms",
        image: mushroom,
        price: 40,
        oldprice: 50,
        quantity: 0,
        id:28
    }

]
export { full_data, dairy_data , fruits_data , frozen_data , millet_data ,pulses_data , vegies_data}