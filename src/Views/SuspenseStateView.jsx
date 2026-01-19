import "../global-style.css";
import "./SuspenseStateView.css";
import Paragraph from "./Paragraph";
import Callout from "./Callout";
export default function SuspenseStateView(props) {

    if (props.loading)
        return (
            <div className="suspense_state_view ">
                <Callout className="callout_h1" text={"David Giraldo"} />
                {/* <Paragraph text={"Loading Portfolio ..."} /> */}
                <p>
                    Loading Portfolio ...
                </p>
                <div className="gif_mask">
                    <iframe className="giphy-embed" frameBorder={0} src="https://giphy.com/embed/g7MiKRGMiXspHGXK2I"></iframe>
                </div>
                {/* <Paragraph text={"Loading..."} /> */}
            </div>)

    if (!props.loading)
        return (
            <div className="suspense_state_view"> 
                <h1>Förlåt (sorry)!</h1>
                <p>
                    Something went wrong, try to reload or checkout my other links
                </p>
                <br></br>
                <div className="gif_mask">
                    <iframe className="giphy-embed" frameBorder={0} src="https://giphy.com/embed/GRk3GLfzduq1NtfGt5"></iframe>
                </div>
                <br></br>
                <div className="row ">
                    <p className="m-right-s">
                        <a className="p-small" href="https://drive.google.com/file/d/1mIyPfHizKI9VjQAgBO859mQib68xUbZE" target="blank">
                            Resumé
                        </a>
                    </p>
                    <p className="m-right-s">
                        <a className="p-small" href="https://github.com/DavidGiraldoCode" target="blank">
                            GitHub
                        </a>
                    </p>
                    <p className="m-right-s">
                        <a className="p-small" href="https://www.linkedin.com/in/davidgiraldodesign/" target="blank">
                            LinkedIn
                        </a>
                    </p> 
                </div>
            </div>)
}