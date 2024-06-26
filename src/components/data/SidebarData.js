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
                title: 'Painikkeet / Buttons',
                path: '/lomake-elementti/painikkeet',
                cName: 'nav-text',
                breadcrumb: "Painikkeet / Buttons",
                submenu: [
                    {
                        title: 'Valintapainike / Toggle Button',
                        path: '/lomake-elementti/painikkeet/valintapainike',
                        cName: 'nav-text',
                        breadcrumb:"Valintapainike / Toggle Button"
                    },
                    {
                        title: 'Kerran painettavat painikkeet',
                        path: '/lomake-elementti/painikkeet/painike',
                        cName: 'nav-text',
                        breadcrumb:"Kerran painettava painike"
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
                title: 'Syötekentät',
                path: '/lomake-elementti/syotekentat',
                cName: 'nav-text',
                breadcrumb:"Syötekentät",
                submenu: [
                    {
                        title: 'Syötteen validointi',
                        path: '/lomake-elementti/syotekentat/syotteen_validointi',
                        cName: 'nav-text',
                        breadcrumb:"Syötteen validointi"
                    },
                    {
                        title: 'Automaattinen täydennys',
                        path: '/lomake-elementti/syotekentat/automaattinen_taydennys',
                        cName: 'nav-text',
                        breadcrumb:"Automaatitnen täydennyt"
                    },
                    {
                        title: 'Pudotusvalikko',
                        path: '/lomake-elementti/syotekentat/pudotusvalikko',
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



