import AFRAME from 'aframe';
import './button';

AFRAME.registerTemplate('start-screen', `
    <a-sub-assets>
        <a-asset-item id="text" src="/assets/models/text.gltf"></a-asset-item>
    </a-sub-assets>
    <a-entity
            id="text"
            gltf-model="#text"
            position="2.1 0.4 -4"
    ></a-entity>
    
    <a-template name="button" options="text: START; position: -0.15 1.2 -4; event: start-game; color: #5e9696"></a-template>
    <a-template name="button" options="text: HOW TO PLAY; position: -0.15 0.5 -4; event: how-to-play; color: #5e9696; width: 1.6"></a-template>
`);
