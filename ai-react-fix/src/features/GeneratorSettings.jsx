import FlexColumn from "layout/FlexColumn";
import Slider from "components/Slider";

import styles from 'pages/home/home.module.css';

/* ideas for setting that can be changed
    -num points quality (slider) (min 1024, max 4096)
    -model resolution (slider) (min 32, max 128)
    -model output file type (dropdown) (ply, obj, gltf, glb)
*/

export default function GeneratorSettings() {
    return (
        <div id={styles["settings"]}>
                <FlexColumn>
                    <h1>Settings</h1>
                    <Slider min={0} max={400} steps={12} name={'quality'}/>
                </FlexColumn>
        </div>
    );
}