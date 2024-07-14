import * as BABYLON from '@babylonjs/core'; // imported babylon.js directory 
import "@babylonjs/loaders";

var camera; // i define camera variable

const canvas = document.getElementById('renderCanvas'); // created canvas 
const engine = new BABYLON.Engine(canvas, true); // created engine 
// create scene function
var createScene = function () {
  // create simple scene
  var scene = new BABYLON.Scene(engine);

  // create camera and to determine possition 
  camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(-40, 0, 0), scene);
  camera.ellipsoid = new BABYLON.Vector3(1, 2.3, 1);  // create camera elipsoid for camera collision
  camera.ellipsoidOffset = new BABYLON.Vector3(0, 0.9, 0);  // i determine elipsoid position. (camera mid)
  camera.checkCollisions = true; // i turned on camera collisions
  camera.applyGravity = true; // i turned on gravity
  camera.attachControl(true);
  camera.speed = 0.5;
  scene.activeCamera = camera;

  // Enable mouse wheel inputs.
  camera.inputs.addMouseWheel();

  // targets the camera to scene middle
  camera.setTarget(BABYLON.Vector3.Zero());

  // attaches the camera to the canvas
  camera.attachControl(true);

  // created a lights
  var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;			
	
  BABYLON.SceneLoader.ImportMesh("", "assets/", "house1.glb", scene, function (meshes) {
    var house = meshes[0]; // define the gun
    meshes.forEach(function (mesh) {
      meshes.forEach(function (mesh) {
        mesh.checkCollisions = true;
      });
    });
  });
  BABYLON.SceneLoader.ImportMesh("", "assets/", "roof.glb", scene, function (meshes) {
    var roof = meshes[0]; // define the gun
    meshes.forEach(function (mesh) {
      meshes.forEach(function (mesh) {
        mesh.checkCollisions = true;
      });
    });
  });


  BABYLON.SceneLoader.ImportMesh("", "assets/", "floor.glb", scene, function (meshes) {
    var floor = meshes[0]; // define the gun
    meshes.forEach(function (mesh) {
      meshes.forEach(function (mesh) {
        mesh.checkCollisions = true;
      });
    });
  });
	    
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "nightstand.glb", scene, function (meshes) {
//     var nightstand = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "wardrobe.glb", scene, function (meshes) {
//     var wardrobe = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "couch2s.glb", scene, function (meshes) {
//     var couch2s = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "diningtable.glb", scene, function (meshes) {
//     var diningtable = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });

//   BABYLON.SceneLoader.ImportMesh("", "assets/", "bed.glb", scene, function (meshes) {
//     var bed = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "kitchenset.glb", scene, function (meshes) {
//     var kitchenset = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "couch3s.glb", scene, function (meshes) {
//     var couch3s = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "luva.glb", scene, function (meshes) {
//     var luva = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "shower.glb", scene, function (meshes) {
//     var shower = meshes[0]; // define the gun
//     shower.position = new BABYLON.Vector3(0, -4.9, 0);
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "toilet.glb", scene, function (meshes) {
//     var toilet = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });
//   BABYLON.SceneLoader.ImportMesh("", "assets/", "tvset.glb", scene, function (meshes) {
//     var tvset = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });

//   BABYLON.SceneLoader.ImportMesh("", "assets/", "garage.glb", scene, function (meshes) {
//     var garage = meshes[0]; // define the gun
//     meshes.forEach(function (mesh) {
//       meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//       });
//     });
//   });

//   BABYLON.SceneLoader.ImportMesh("", "assets/", "garageDoor.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
//     var garageDoor = meshes[0];
//     const garageDoor1 = animationGroups.find(group => group.name === "openGarage");
//     meshes.forEach(function (mesh) {
//         mesh.checkCollisions = true;
//         mesh.actionManager = new BABYLON.ActionManager(scene);
//         mesh.actionManager.registerAction(
//             new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
//               garageDoor1.start(false, 1.0, garageDoor1.from, garageDoor1.to, false);
//             })
//         );
//     });
//   }); 

// BABYLON.SceneLoader.ImportMesh("", "assets/", "doorLivingAnim.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
//   var window = meshes[0];
//   const openRight1 = animationGroups.find(group => group.name === "openAnim");
//   meshes.forEach(function (mesh) {
//       mesh.checkCollisions = true;
//       mesh.actionManager = new BABYLON.ActionManager(scene);
//       mesh.actionManager.registerAction(
//           new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
//             openRight1.start(false, 1.0, openRight1.from, openRight1.to, false);
//           })
//       );
//   });
// });
// BABYLON.SceneLoader.ImportMesh("", "assets/", "doorLivingAnim.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
//   var kitchen = meshes[0];
//   kitchen.position = new BABYLON.Vector3(-13, 0, 0);
//   kitchen.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD)
//   const openRight1 = animationGroups.find(group => group.name === "openAnim");
//   meshes.forEach(function (mesh) {
//       mesh.checkCollisions = true;
//       mesh.actionManager = new BABYLON.ActionManager(scene);
//       mesh.actionManager.registerAction(
//           new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
//             openRight1.start(false, 1.0, openRight1.from, openRight1.to, false);
//           })
//       );
//   });
// });
// BABYLON.SceneLoader.ImportMesh("", "assets/", "doorLivingAnim.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
//   var bathroom = meshes[0];
//   bathroom.position = new BABYLON.Vector3(-9, 0, 0);
//   bathroom.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD)
//   const openRight1 = animationGroups.find(group => group.name === "openAnim");
//   meshes.forEach(function (mesh) {
//       mesh.checkCollisions = true;
//       mesh.actionManager = new BABYLON.ActionManager(scene);
//       mesh.actionManager.registerAction(
//           new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
//             openRight1.start(false, 1.0, openRight1.from, openRight1.to, false);
//           })
//       );
//   });
// });

// BABYLON.SceneLoader.ImportMesh("", "assets/", "doorLivingAnim.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
//   var bedroom = meshes[0];
//   bedroom.position = new BABYLON.Vector3(-5.1, 0, 4.7);
//   bedroom.rotate(BABYLON.Axis.Y, -Math.PI/2, BABYLON.Space.WORLD)
//   const openRight1 = animationGroups.find(group => group.name === "openAnim");
//   meshes.forEach(function (mesh) {
//       mesh.checkCollisions = true;
//       mesh.actionManager = new BABYLON.ActionManager(scene);
//       mesh.actionManager.registerAction(
//           new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
//             openRight1.start(false, 1.0, openRight1.from, openRight1.to, false);
//           })
//       );
//   });
// });

  return scene;
};


// create scene
const scene = createScene();

const divFps = document.getElementById('fps');
// render loop
engine.runRenderLoop(() => {
  divFps.innerHTML = engine.getFps().toFixed() + " fps";
  scene.render();
});

// resize the web page 
window.addEventListener('resize', () => {
  engine.resize();
});
