var initialState = [
    {
        id: 1,
        name: "Iphone",
        img: "https://images-na.ssl-images-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg",
        desc: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista.",
        price: 32000000,
        inventory: 0
    },
    {
        id: 2,
        name: "SamSung",
        img: "https://images.samsung.com/is/image/samsung/assets/pk/smartphones/galaxy-note20/buy/001-note20series-productimage-mo-720.jpg",
        desc: "Samsung, South Korean company that is one of the world's largest producers of electronic devices. Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips, and integrated systems.",
        price: 12000000,
        inventory: 10
    },
    {
        id: 3,
        name: "Oppo",
        img: "https://cdn.nguyenkimmall.com/images/detailed/708/10048305-dien-thoai-oppo-a15-trang-1.jpg",
        desc: "OPPO Electronics Corp. is an electronics manufacturer based in Guangdong, China. Known for its smartphones, the company also makes MP3 players, portable media players, LCD-TVs, and DVD/Blu-ray players. It was founded in 2004. The company is also a smartphone maker",
        price: 7000000,
        inventory: 2
    },
    {
        id: 4,
        name: "Vivo",
        img: "https://cdn.tgdd.vn/Products/Images/42/230630/vivo-y12s-den-new-600x600-200x200.jpg",
        desc: "Vivo is a Chinese multinational manufacturer of smartphones headquartered in Dongguan, Guangdong province, China. Founded in 1995, vivo entered the telecommunication and consumer electronics industry with landline phones and wireless phones. ... Vivo is now among the top five most profitable smartphone brands in China.",
        price: 5000000,
        inventory: 20
    }
]


export const products = (state = initialState, action) => {
    switch(action.type){
        default: return state
    }
}