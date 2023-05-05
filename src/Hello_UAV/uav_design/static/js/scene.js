// 获取要显示场景的容器元素
const sceneContainer = document.getElementById('scene-container');

// 创建一个场景
const scene = new THREE.Scene();

// 创建一个相机
const camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 200);

// 创建一个渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
sceneContainer.appendChild(renderer.domElement);

// 创建一个网格
const gridHelper = new THREE.GridHelper(100, 10);
scene.add(gridHelper);

// 渲染场景
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
