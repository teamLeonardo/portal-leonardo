import { Toggle } from "components/toggle/toggle";
import { useTheme } from "context/theme";
import { navObj } from "layout/navObj";
import bp from "assets/ico-p.png";
import bb from "assets/ico-b.png";
import { useRouter } from "next/router";
import { ISSERVER } from "utils/windows";
import Image from "next/image";

export const Layout = ({ children }) => {
    const { theme, setTheme } = useTheme();
    const { push, pathname } = useRouter();
    !ISSERVER && window.scrollTo(0, 0);
    return (
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
                                            className={`cont-item ${pathname === d.path && "active"
                                                }`}
                                        >
                                            <spam onClick={() => push(d.path)} className="item">
                                                {d.sidebar}
                                            </spam>
                                            <div className="triangle-float"></div>
                                        </div>
                                    );
                                })}
                        </nav>
                    </div>
                </header>
                <section className="profile">
                    <div className="img-profile">
                        <div className="img"></div>
                    </div>
                    <br />
                    <div className="names-profile">
                        <span>leonardo sifuente mozombite</span>
                    </div>
                    <div className="position-jobs-profile">
                        <span>Desarollador Web</span>
                    </div>
                    <br />
                    <div
                        className="profile-section contact-profile"
                        onClick={() => {
                            navObj["contacto"] && push(navObj["contacto"].path);
                        }}
                    >
                        <div className="sub-title">
                            contacto
                            <span style={{ float: "right" }}>
                                <i className="fas fa-external-link-alt"></i>
                            </span>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <i className="fab fa-instagram"></i>
                                    leonardo
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i className="fab fa-facebook-square"></i>
                                    leonardo sifuentes
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i className="fas fa-at"></i>
                                    leonardosm3.14@gmail.com
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i className="fab fa-whatsapp"></i>
                                    (+51) 924 426 169
                                </div>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div
                        className="profile-section work-experience-profile"
                        onClick={() => {
                            navObj["Historial Laboral"] && push(navObj["Historial Laboral"].path);
                        }}
                    >
                        <div className="sub-title">
                            Experiencia laboral
                            <span style={{ float: "right" }}>
                                <i className="fas fa-external-link-alt"></i>
                            </span>
                        </div>
                        <div className="last-job">
                            <div className="line-time">
                                <div className="title-last-job">ultimo empleo</div>
                                <div className="circle-time"></div>
                                <div className="name-last-job">
                                    Desarrollador frontEnd react
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div
                        className="profile-section education-profile"
                        onClick={() => {
                            navObj["Estudios"] && push(navObj["Estudios"].path);
                        }}
                    >
                        <div className="sub-title">
                            Estudios & certificados
                            <span style={{ float: "right" }}>
                                <i className="fas fa-external-link-alt"></i>
                            </span>
                        </div>
                        <div className="list">
                            <ul>
                                <li>• senati</li>
                                <li>• certificado 1</li>
                                <li>• certificado 2</li>
                                <li>• certificado 2</li>
                                <li>• certificado 2</li>
                                <li>• certificado 2</li>
                                <li>• certificado 2</li>
                                <li>• certificado 2</li>
                            </ul>
                            <div className="fade"></div>
                        </div>
                    </div>
                </section>
                <main>{children}</main>
            </div>
        </div>
    );
};
