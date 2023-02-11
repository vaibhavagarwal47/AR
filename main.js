var el = document.querySelector('#plane');




AFRAME.registerComponent('plane', {
    update: function () {
      this.el.setObject3D('camera', new THREE.PerspectiveCamera());
    }
  });