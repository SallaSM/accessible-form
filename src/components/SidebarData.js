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
        title: 'Lomake-komponentit',
        path: '/lomakekomponentit',
        cName: 'nav-text',
        breadcrumb: "Lomake komponentit",
        submenu: [
            {
                title: 'Painikkeet',
                path: '/lomakekomponentit/painikkeet',
                cName: 'nav-text',
                breadcrumb: "Painikkeet",
                submenu: [
                    {
                        title: 'Painike',
                        path: '/lomakekomponentit/painikkeet/painike',
                        cName: 'nav-text',
                        breadcrumb:"Painike"
                    },
                    {
                        title: 'Valintapainike',
                        path: '/lomakekomponentit/painikkeet/valintapainike',
                        cName: 'nav-text',
                        breadcrumb:"Valintapainike"
                    },
                    {
                        title: 'Radiopainike',
                        path: '/lomakekomponentit/painikkeet/radiopainike',
                        cName: 'nav-text',
                        breadcrumb:"Radiopainike"
                    },
                    {
                        title: 'Valintaruutu',
                        path: '/lomakekomponentit/painikkeet/valintaruutu',
                        cName: 'nav-text',
                        breadcrumb: "Valintaruutu"
                    },
                ]
            },
            {
                title: 'Syöttökentät',
                path: '/lomakekomponentit/syottokentat',
                cName: 'nav-text',
                breadcrumb:"Syöttökentät",
                submenu: [
                    {
                        title: 'Syötteen validointi',
                        path: '/lomakekomponentit/syottokentat/syotteen_validointi',
                        cName: 'nav-text',
                        breadcrumb:"Syötteen validointi"
                    },
                    {
                        title: 'Automaattinen täydennys',
                        path: '/lomakekomponentit/syottokentat/automaattinen_taydennys',
                        cName: 'nav-text',
                        breadcrumb:"Automaatitnen täydennyt"
                    },
                    {
                        title: 'Pudotusvalikko',
                        path: '/lomakekomponentit/syottokentat/pudotusvalikko',
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



