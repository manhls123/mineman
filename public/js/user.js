var userApp = new Vue({
    el: '#user',
    data: {
        username: 'GiangMine',
        vpsName : 'Main',
        fbid : 'fb.com/giang.m95',
        ram : '4GB',
        chip : '2.4Ghz 1 Core',
        pubIP : '1.1.1.1',
        locIP : '192.168.1.0',
        ports : [
            {
                local : 22,
                public : 22,
                name : 'ssh'
            },
            {

                local : 25565,
                public : 25565,
                name : 'minecraft'
            },
            {

                local :8080,
                public :80,
                name : 'www'
            }

        ],
    trans: [
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        },
        {
            date : "1/1/11",
            ammount : 200,
            type : "viettel"
        }






    ]
    

    }
})
