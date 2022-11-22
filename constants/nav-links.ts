interface SubMenuTypes {
    name: string;
    path: string;
    active?: string;
}

export interface MenuTypes {
    name: string;
    path: string;
    active?: string;
    subMenu?: SubMenuTypes[]
}


interface NavigationLinksTypes {
    name: string;
    path: string;
    active?: string;
    subMenu?: MenuTypes[]
}

const navigationLinks: NavigationLinksTypes[] = [
    {
        name: 'Divan Beds',
        path: '/divan-Beds',
        subMenu: [
            {
                name: 'House Fabric Divan Beds',
                path: '/beds/divan-beds/house-fabric-divan-beds/'
            },
            {
                name: 'House Fabric Divan Beds',
                path: '/house-fabric-divan-beds'
            },
            {
                name: 'House Fabric Divan Beds',
                path: '/house-fabric-divan-beds'
            },

        ]
    },
    {
        name: 'All Beds',
        path: '/all-beds',
        subMenu: [
            {
                name: 'Ottobeds',
                path: '/',
                subMenu: [
                    {
                        name: 'Storage',
                        path: ''
                    }
                ]
            }
        ]
    }

]

export default navigationLinks;