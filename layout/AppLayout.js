import { Toggle } from "components/toggle/toggle";
import { useTheme } from "context/theme";
import { navObj } from "layout/navObj";
import bp from "assets/ico-p.png";
import bb from "assets/ico-b.png";
import { useRouter } from "next/router";
import { ISSERVER } from "utils/windows";
import Image from "next/image";
import Head from "next/head";
import { Profile } from "components/profile/profile";

export const Layout = ({ children, dataUser }) => {
    const { theme, setTheme } = useTheme();
    const { push, pathname } = useRouter();
    !ISSERVER && window.scrollTo(0, 0);
    return (
        <>
            <Head>
                <title>{pathname}</title>
            </Head>
            <div className="container-main" data-bg={theme}>
                <div className="main-container">

                    <header>

                        <div className="option-header">
                            <div className="select select-theme">
                                <Toggle
                                    size="smal"
                                    initState={theme === "dark" && true}
                                    icons={{
                                        ico1: <i className="fas fa-moon"></i>,
                                        ico2: <i className="fas fa-sun"></i>
                                    }}
                                    onToggle={(res) => {
                                        setTheme(res === true ? "dark" : "light");
                                    }}
                                />
                                {/* <div className="option-select">claro</div>
                <div className="option-select">oscuro</div> */}
                            </div>
                            <div className="select select-language">
                                <Toggle
                                    size="smal"
                                    initState={theme === "dark" && true}
                                    icons={{
                                        ico1: <Image src={bp} alt={"ico-p"} />,
                                        ico2: <Image src={bb} alt={"ico-b"} />
                                    }}
                                    onToggle={(res) => {
                                        setTheme(res === true ? "dark" : "light");
                                    }}
                                />
                                {/* <div className="option-select">español</div>
              <div className="option-select">ingles</div> */}
                            </div>
                        </div>
                        <div className="list-header">

                            <div className="barrita"></div>
                            <nav>
                                {Object.values(navObj)
                                    .filter((d) => d.sidebar)
                                    .map((d, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className={`cont-item ${pathname.indexOf(d.path) > -1 && "active"
                                                    }`}
                                            >
                                                <p onClick={() => push(d.path)} className="item">
                                                    {d.sidebar}
                                                </p>
                                                <div className="triangle-float"></div>
                                            </div>
                                        );
                                    })}
                            </nav>
                        </div>
                    </header>

                    <Profile {...{ dataUser }} />

                    <main>{children}</main>
                </div>
            </div>
        </>
    );
};


// export async function getServerSideProps() {
//     // Fetch data from external API
//     // const post = await service.portafolio.getQueryParrilla()
//     const datasw = await service.profile.getUser()
//     // Pass data to the page via props
//     console.log({ datasw });
//     return { props: { datasw } }
// }
