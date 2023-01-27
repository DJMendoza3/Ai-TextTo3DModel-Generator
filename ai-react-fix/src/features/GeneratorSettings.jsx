import { useDispatch } from "react-redux";
import { MODEL_DISPLAY_TOGGLE } from "redux/slices/homeSlice";

import FlexColumn from "layout/FlexColumn";
import Slider from "components/Slider";

import styles from 'pages/home/home.module.css';

/* ideas for setting that can be changed
    -num points quality (slider) (min 1024, max 4096)
    -model resolution (slider) (min 32, max 128)
    -model output file type (dropdown) (ply, obj, gltf, glb)
    -model display as point cloud of geometry (toggle)
*/

export default function GeneratorSettings() {
    const dispatch = useDispatch();


    return (
        <div id={styles["settings"]}>
                <FlexColumn gap={'10px'}>
                    <h1>Settings</h1>
                    <Slider min={1024} max={4096} steps={20} name={'density'} label={'Point Map Density'} description={'Nuber of points considered when plotting the model. (Higher numbers allows for the possibility of a higher detailed model but adds significant time increases to model generation time.)'}/>
                    <Slider min={32} max={128} steps={10} name={'resolution'} label={'Model Resolution'} description={'Effects the faces to points ratio used when generating a mesh from the point cloud.'}/>
                    <button onClick={() => dispatch(MODEL_DISPLAY_TOGGLE())}>Toggle Mesh</button>
                </FlexColumn>
        </div>
    );
}