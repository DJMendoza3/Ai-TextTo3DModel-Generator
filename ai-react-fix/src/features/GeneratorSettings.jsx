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
                    <Slider min={1024} max={4096} steps={20} name={'quality'} label={'Quality'}/>
                    <Slider min={32} max={128} steps={10} name={'resolution'} label={'Model Resolution'}/>
                </FlexColumn>
        </div>
    );
}