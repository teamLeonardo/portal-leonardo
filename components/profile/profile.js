import { navObj } from "layout/navObj";
import { useRouter } from "next/router";

export const Profile = ({ dataUser: user  }) => {
    const { push } = useRouter();

    if (!user) {
        return <section className="profile">
            cargando
        </section>
    }
    const img = user["avatar"] ? { backgroundImage: `url(${user.avatar["url"]})` } : {}
    return <section className="profile">
        <div className="img-profile">
            <div className="img" style={{ ...img }}></div>
        </div>
        <br />
        <div className="names-profile">
            <span>{user.firstName}{" "}{user.lastName}</span>
        </div>
        <div className="position-jobs-profile">
            <span>{user.description}</span>
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
}