import { Center, OrbitControls, useGLTF, useTexture } from "@react-three/drei";

export default function Experience() {
    const { nodes } = useGLTF("./model/portal.glb");

    const bakedTexture = useTexture("./model/baked.jpg");
    bakedTexture.flipY = false; // fixes the flipped texture

    return (
        <>
            <color args={["#030202"]} attach="background" />

            <OrbitControls makeDefault />

            <Center>
                <mesh geometry={nodes.baked.geometry}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </Center>
        </>
    );
}
