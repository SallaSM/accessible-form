export const SidebarData = [
    {
        title: 'Etusivu',
        path: '/',
        cName: 'nav-text',
        breadcrumb:"Etusivu"
    },
    {
        title: 'Yleistä tietoa',
        path: '/yleista_tietoa',
        cName: 'nav-text',
        breadcrumb:"Yleistä tietoa"
    },
    {
        title: 'Lomake komponentit',
        path: '/lomake_komponentit',
        cName: 'nav-text',
        breadcrumb: "Lomake komponentit",
        submenu: [
            {
                title: 'Painikkeet',
                path: '/lomake_komponentit/painikkeet',
                cName: 'nav-text',
                breadcrumb: "Painikkeet",
                submenu: [
                    {
                        title: 'Painike',
                        path: '/lomake_komponentit/painikkeet/painike',
                        cName: 'nav-text',
                        breadcrumb:"Painike"
                    },
                    {
                        title: 'Radiopainike',
                        path: '/lomake_komponentit/painikkeet/radiopainike',
                        cName: 'nav-text',
                        breadcrumb:"Radiopainike"
                    },
                    {
                        title: 'Valintaruutu',
                        path: '/lomake_komponentit/painikkeet/valintaruutu',
                        cName: 'nav-text',
                        breadcrumb: "Valintaruutu"
                    },
                ]
            },
            {
                title: 'Syöttökentät',
                path: '/lomake_komponentit/syottokentat',
                cName: 'nav-text',
                breadcrumb:"Syöttökentät",
                submenu: [
                    {
                        title: 'Syötteen validointi',
                        path: '/lomake_komponentit/syottokentat/syotteen_validointi',
                        cName: 'nav-text',
                        breadcrumb:"Syötteen validointi"
                    },
                    {
                        title: 'Automaattinen täydennys',
                        path: '/lomake_komponentit/syottokentat/automaattinen_taydennys',
                        cName: 'nav-text',
                        breadcrumb:"Automaatitnen täydennyt"
                    },
                    {
                        title: 'Pudotusvalikko',
                        path: '/lomake_komponentit/syottokentat/pudotusvalikko',
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



