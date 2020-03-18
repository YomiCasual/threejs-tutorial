import React, { Component } from 'react';
import { render } from 'react-dom';
import * as THREE from "three";

class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer( {antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1,1,1);

    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var texture = new THREE.TextureLoader().load( 'textures/land_ocean_ice_cloud_2048.jpg' );

     // immediately use the texture for material creation
    var material = new THREE.MeshBasicMaterial( { map: texture } );


    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;

    let speedX = 0.1
    let speedY = 0.1

    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );

      cube.position.x += speedX
      cube.position.y += speedY

      if (cube.position.x > window.innerWidth/200) {
        speedX = -0.1
           }
      if (cube.position.x < - (window.innerWidth/200)) {
        speedX = 0.1
      }

      if (cube.position.y > window.innerHeight/250) {
        speedY = -0.1      
      }

      if (cube.position.y < -(window.innerHeight/250)) {
        speedY = 0.1
      }
    };
    animate();

    window.addEventListener('resize', () => {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix()
     renderer.setSize( window.innerWidth, window.innerHeight );
    })
  }

  resizeHandler = () => {

  }
  render() {
    return (
      <div />
    )
  }
}
render(<App />, document.getElementById('root'));
