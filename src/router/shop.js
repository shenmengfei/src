


    import shop from "@/components/shop"

    const shoping = [
        //注册页面的路由
        {
            path: "/shop/:id",
            name: "shop",
         
            component: shop,
        }
    ];
    
    //抛出shop对象
    export default shoping;