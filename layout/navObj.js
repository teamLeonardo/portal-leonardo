const obj = [
    {
        path: "/portafolio",
        exact: true,
        sidebar: "Portafolio",
    },
    {
        path: "/blog",
        exact: true,
        sidebar: "Blog",
    },
    {
        path: "/historial-laboral",
        exact: true,
        sidebar: "Historial Laboral",
    },
    {
        path: "/estudios",
        exact: true,
        sidebar: "Estudios",
    },
    {
        path: "/contacto",
        exact: true,
        sidebar: "contacto",
    }
];

export const navObj = obj.reduce((pv, cv) => {
    return { ...pv, [cv.sidebar]: cv };
}, {});
