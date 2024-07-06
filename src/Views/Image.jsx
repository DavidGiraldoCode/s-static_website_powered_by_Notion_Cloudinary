import "../global-style.css";
import "./Image.css";
export default function Image(props) {
    const urlArray = props.url.split('/'); //Trim the url [.., "800_overview_gg9ehj.png"]
    const imageSize = Number.parseInt(urlArray[urlArray.length-1].split('_')[0]); // Trim the image name ["800", "overview", ...]
    const sizeConfig = {
        width: `${imageSize}px`
    };
    console.log(imageSize);
    return (
        <div className="image container m-top-s m-bottom-m">
            <div className="image_column container">
                <img style={sizeConfig} src={props.url} />
            </div>
        </div>
    )
};