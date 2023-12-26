import * as THREE from 'three'

export const shootingStar = () => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 500 );
    const light_blue_color = new THREE.Color( 0x1c1f1f );
    scene.background = light_blue_color



    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.z = 15;

     const dotGeometry = new THREE.SphereGeometry( 0.02, 32, 32 );
     const purple_color = new THREE.Color( 0x800080 );
     const dotMaterial = new THREE.MeshBasicMaterial( { color: purple_color } );
     const dot = new THREE.Mesh( dotGeometry, dotMaterial );
     scene.add( dot );

     const surrounding_dots:any = [];
     const SURROUND_DOTS_COUNT = 10;
        for (let i = 0; i < SURROUND_DOTS_COUNT; i++) {
            // set the dots behind the main dot and make them up and down
            const dot1 = new THREE.Mesh( dotGeometry, dotMaterial );
            dot1.position.x = dot.position.x - 0.1;
            dot1.position.y = dot.position.y - 0.1;
            dot1.position.z = dot.position.z - 0.1;
            scene.add( dot1 );
            surrounding_dots.push( dot1 );
          }
    
    

    function animate() {
      requestAnimationFrame( animate );

      dot.position.x += 0.1;
      if (dot.position.x > 10){
        dot.position.x = 0;

        for (let i = 0; i < SURROUND_DOTS_COUNT; i++){
            surrounding_dots[i].position.x = dot.position.x - 0.1;
            surrounding_dots[i].position.y = dot.position.y - 0.1;
        }
      }

        for (let i = 0; i < SURROUND_DOTS_COUNT; i++){
            surrounding_dots[i].position.x = dot.position.x -0.2;
            surrounding_dots[i].position.y = dot.position.y - 0.1;
            

        }




      renderer.render( scene, camera );
    }

    animate();
  
}
