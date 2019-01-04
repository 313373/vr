import AFRAME from 'aframe';

AFRAME.registerComponent('floor-collider', {
    schema: {},
    init() {
        this.scene = this.el.sceneEl;
        this.collide = this.collide.bind(this);
        this.el.addEventListener('collide', this.collide);
    },

    collide(e) {
        const trash = e.detail.body.el;
        if(!trash || trash.isSounded) {
            return false;
        }
        const type = trash.getAttribute('trash').type;
        trash.isSounded = true;
        this.el.setAttribute('sound', {src: `#${type}Hit`});
        this.el.emit('floor-collided');
        setTimeout(() => {
            trash.isSounded = false;
        }, 500);
    }
});
