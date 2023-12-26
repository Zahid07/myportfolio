import * as THREE from 'three';

function Particles() {


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 500 );
    const light_blue_color = new THREE.Color( 0x1c1f1f );
    scene.background = light_blue_color



    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // create enum iwth 4 directions, right, left, up, down
    const directions = {
      right: 0,
      left: 1,
      up: 2,
      down: 3,
      bottom_right: 4,
      bottom_left: 5,
      top_right: 6,
      top_left: 7

    };

    camera.position.z = 15;

     // add dots around the sphere
     const dotGeometry = new THREE.SphereGeometry( 0.02, 32, 32 );
     const purple_color = new THREE.Color( 0x800080 );
     const dotMaterial = new THREE.MeshBasicMaterial( { color: purple_color } );
    
     const DOT_COUNT = 3000;
      const dots:any = [];
      const dots_directions:any = [];
      const surrounding_dots:any = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        const dot = new THREE.Mesh( dotGeometry, dotMaterial );
        dot.position.x = Math.random() * 200 - 100;
        dot.position.y = Math.random() * 20 - 10;
        dot.position.z = Math.random() * 10 - 5;
        const dir = Math.floor(Math.random() * 8);

        // surround the sphere with dots
        const dot1 = new THREE.Mesh( dotGeometry, dotMaterial );
        dot1.position.x = dot.position.x + 0.1;
        dot1.position.y = dot.position.y + 0.1;
        scene.add( dot1 );
        scene.add( dot );
        dots.push( dot );
        dots_directions.push( dir );
        surrounding_dots.push( dot1 );
      }

    function animate() {
      requestAnimationFrame( animate );

      for (let i = 0; i < DOT_COUNT; i++) {

        // get the direction of the dot
        const dir = dots_directions[i];
        // move the dot in the direction
        if (dir === directions.right) {
          dots[i].position.x += 0.02;
        } else if (dir === directions.left) {
          dots[i].position.x -= 0.02;
        } else if (dir === directions.up) {
          dots[i].position.y += 0.02;
        } else if (dir === directions.down) {
          dots[i].position.y -= 0.02;
        }
        else if (dir === directions.bottom_right) {
          dots[i].position.x += 0.02;
          dots[i].position.y -= 0.02;
        }
        else if (dir === directions.bottom_left) {
          dots[i].position.x -= 0.02;
          dots[i].position.y -= 0.02;
        }
        else if (dir === directions.top_right) {
          dots[i].position.x += 0.02;
          dots[i].position.y += 0.02;
        }
        else if (dir === directions.top_left) {
          dots[i].position.x -= 0.02;
          dots[i].position.y += 0.02;
        }

       
        if (dots[i].position.x > 100) {
          dots[i].position.x = -100;
        } else if (dots[i].position.x < -100) {
          dots[i].position.x = 100;
        } else if (dots[i].position.y > 10) {
          dots[i].position.y = -10;
        } else if (dots[i].position.y < -10) {
          dots[i].position.y = 10;
        }
        
        if (Math.random() < 0.001) {
          dots_directions[i] = Math.floor(Math.random() * 4);
        }
        surrounding_dots[i].position.x = dots[i].position.x + 0.1;
        surrounding_dots[i].position.y = dots[i].position.y + 0.1;      
      }
       


      renderer.render( scene, camera );
    }

    animate();

}

export default Particles;
