import * as THREE from 'three';

function WarpLines() {

  var scene:any, camera:any, renderer:any;

  let LINE_COUNT = 1000;
  let geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6* LINE_COUNT), 3));
  geom.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2 * LINE_COUNT), 1));
  let pos = geom.getAttribute("position");
  let pa = pos.array;
  let vel = geom.getAttribute("velocity");
  let va = vel.array;

  function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 500);
    camera.position.z = 200;

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    for (let i = 0; i < LINE_COUNT; i++){
      let x = Math.random() * 400 - 200;
      let y = Math.random() * 200 - 100;
      let z = Math.random() * 500 - 100;
      let xx = x
      let yy = y
      let zz = z

      pa[i * 6] = x;
      pa[i * 6 + 1] = y;
      pa[i * 6 + 2] = z;
      
      pa[i * 6 + 3] = xx;
      pa[i * 6 + 4] = yy;
      pa[i * 6 + 5] = zz;
      

      va[i * 2] = va[i * 2] = 1;
    }

    let mat = new THREE.LineBasicMaterial({color: 0xffffff});
    let lines = new THREE.LineSegments(geom, mat);
    lines.rotateY(-0.5);
    lines.rotateX(0.2);
    
    scene.add(lines);

    window.addEventListener('resize', onWindowResize, false);
    animate();

  }


  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate(){
    for (let i = 0; i < LINE_COUNT; i++){
      va[2*i] +=0.03
      va[2*i + 1] += 0.025

      

      pa[6*i+2] += va[2*i];
      pa[6*i+5] += va[2*i+1];

      if (pa[6*i+5] > 200){
        var z = Math.random() * 200 + 100;
        pa[6*i+2] = z;
        pa[6*i+5] = z;

        va[2*i] = 0;
        va[2*i+1] = 0;
      }
    }
    pos.needsUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  init();


}

export default WarpLines;
