import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Canvas
        flat // this lets us use the exact colors we used on blender for our model because Blender already uses tone mapping for colors but Three.js does the same which is usually accepted but not on this case since Blender already did it, so this prop fixes the issue
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, 2, 6],
        }}
    >
        <Experience />
    </Canvas>
);
