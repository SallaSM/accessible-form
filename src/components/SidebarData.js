export const SidebarData = [
    {
        title: 'Etusivu',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Saavutettava lomake',
        path: '/yleista_tietoa',
        cName: 'nav-text'
    },
    {
        title: 'Lomake komponentit',
        path: '/lomake_komponentit',
        cName: 'nav-text',
        submenu: [
            {
                title: 'Painikkeet',
                path: '/lomake_komponentit/painikkeet',
                cName: 'nav-text',
                submenu: [
                    {
                        title: 'Painike / Button',
                        path: '/lomake_komponentit/painikkeet/painike',
                        cName: 'nav-text',
                    },
                    {
                        title: 'Radiopainike',
                        path: '/lomake_komponentit/painikkeet/radiopainike',
                        cName: 'nav-text',
                    },
                    {
                        title: 'Valintaruutu',
                        path: '/lomake_komponentit/painikkeet/valintaruutu',
                        cName: 'nav-text',
                    },
                ]
            },
            {
                title: 'Syöttökentät',
                path: '/lomake_komponentit/syottokentat',
                cName: 'nav-text',
                submenu: [
                    {
                        title: 'Syötteen validointi',
                        path: '/lomake_komponentit/syottokentat/syotteen_validointi',
                        cName: 'nav-text',
                    },
                    {
                        title: 'Automaattinen täydennys / autocomplete',
                        path: '/lomake_komponentit/syottokentat/automaattinen_taydennys',
                        cName: 'nav-text',
                    },
                ]
            },

        ]
    },
    {
        title: 'Muuttuva näkymä',
        path: '/muuttuva_nakyma',
        cName: 'nav-text'
    },
    ]



