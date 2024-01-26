export const SidebarData = [
    {
        title: 'Etusivu',
        path: '/',
        cName: 'nav-text',
        breadcrumb:"Etusivu"
    },

    {
        title: 'Yleistä saavutettavuudesta',
        path: '/yleista_saavutettavuudesta',
        cName: 'nav-text',
        breadcrumb:"Yleistä saavutettavuudesta"
    },
    {
        title: 'Lomake-elementti',
        path: '/lomake-elementti',
        cName: 'nav-text',
        breadcrumb: "Lomake-elementti",
        submenu: [
            {
                title: 'Painikkeet',
                path: '/lomake-elementti/painikkeet',
                cName: 'nav-text',
                breadcrumb: "Painikkeet",
                submenu: [
                    {
                        title: 'Kerran painettavat painikkeet',
                        path: '/lomake-elementti/painikkeet/painike',
                        cName: 'nav-text',
                        breadcrumb:"Painike"
                    },
                    {
                        title: 'Valintapainike',
                        path: '/lomake-elementti/painikkeet/valintapainike',
                        cName: 'nav-text',
                        breadcrumb:"Valintapainike"
                    },
                    {
                        title: 'Radiopainike',
                        path: '/lomake-elementti/painikkeet/radiopainike',
                        cName: 'nav-text',
                        breadcrumb:"Radiopainike"
                    },
                    {
                        title: 'Valintaruutu',
                        path: '/lomake-elementti/painikkeet/valintaruutu',
                        cName: 'nav-text',
                        breadcrumb: "Valintaruutu"
                    },
                ]
            },
            {
                title: 'Syöttökentät',
                path: '/lomake-elementti/syottokentat',
                cName: 'nav-text',
                breadcrumb:"Syöttökentät",
                submenu: [
                    {
                        title: 'Syötteen validointi',
                        path: '/lomake-elementti/syottokentat/syotteen_validointi',
                        cName: 'nav-text',
                        breadcrumb:"Syötteen validointi"
                    },
                    {
                        title: 'Automaattinen täydennys',
                        path: '/lomake-elementti/syottokentat/automaattinen_taydennys',
                        cName: 'nav-text',
                        breadcrumb:"Automaatitnen täydennyt"
                    },
                    {
                        title: 'Pudotusvalikko',
                        path: '/lomake-elementti/syottokentat/pudotusvalikko',
                        cName: 'nav-text',
                        breadcrumb:"Pudotusvalikko"
                    },
                ]
            },

        ]
    },
    {
        title: 'Muuttuva näkymä',
        path: '/muuttuva_nakyma',
        cName: 'nav-text',
        breadcrumb:"Muuttuva näkymä"
    },
    ]



