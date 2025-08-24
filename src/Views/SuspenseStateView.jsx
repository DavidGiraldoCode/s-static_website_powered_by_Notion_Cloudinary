import "../global-style.css";
import "./SuspenseStateView.css";
import Paragraph from "./Paragraph";
import Callout from "./Callout";
export default function SuspenseStateView(props) {

    if (props.loading)
        return (
            <div className="suspense_state_view ">
                <Callout className="callout_h1" text={"David Giraldo"} />
                <Paragraph text={"Loading Portfolio 2025 ..."} />
                <div className="gif_mask">
                    <iframe className="giphy-embed" frameBorder={0} src="https://giphy.com/embed/g7MiKRGMiXspHGXK2I"></iframe>
                </div>
                {/* <Paragraph text={"Loading..."} /> */}
            </div>)

    if (!props.loading)
        return <div className="suspense_state_view"> <h1>💩 Ups!</h1> </div>
}