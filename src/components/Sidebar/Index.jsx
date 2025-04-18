import { Link, useLocation } from "react-router-dom"
import styles from "./styles.module.css"

export default function Sidebar() {

    const { pathname } = useLocation();
    // console.log(pathname);

    let selectedTheme = localStorage.getItem('ppads-temaSelecionado');
    selectedTheme = JSON.parse(selectedTheme);
    console.log(`selectedTheme ${selectedTheme}`);
    
    return (
        <aside className={styles.sidebar} style={{ backgroundColor: selectedTheme === 'light' ? "#fff" : "#262626"}}>
            <div className={styles.ppLogo}>
                <Link to="/"><img src="/./src/assets/monitoramentoescolarLogo.svg" alt=""/></Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link 
                            to="/" 
                            className={`${pathname === "/" ? styles.activated : ""}`}
                        >
                            <img 
                                src={`${pathname === "/" ? "/./src/assets/homeActivated.png" : "/./src/assets/home.png"}`} 
                                alt="Home"
                            />
                                Home
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/turmas" 
                            className={`${pathname.startsWith("/turmas") ? styles.activated : ""}`}
                        >
                            <img 
                                src={`${pathname.startsWith("/turmas") ? "/./src/assets/turmasActivated.png" : "/./src/assets/turmas.png"}`} 
                                alt="Turmas"
                            />
                                Turmas
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/configuracoes" 
                            className={`${pathname === "/configuracoes" ? styles.activated : ""}`}
                        >
                            <img 
                                src={`${pathname === "/configuracoes" ? "/./src/assets/settingsActivated.png" : "/./src/assets/settings.png"}`} 
                                alt="Configuracoes"
                            />
                                Configurações
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.exit}>
                <Link to="https://google.com"><img src="/./src/assets/exit.png" alt="Exit"/>Sair</Link>
            </div>
      </aside>
    )
}