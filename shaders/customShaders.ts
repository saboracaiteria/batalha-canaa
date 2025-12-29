import * as THREE from 'three';

export const createSkyShader = () => {
    return new THREE.ShaderMaterial({
        uniforms: {
            topColor: { value: new THREE.Color(0x0077ff) },
            bottomColor: { value: new THREE.Color(0xffffff) },
            offset: { value: 33 },
            exponent: { value: 0.6 },
            time: { value: 0 }
        },
        vertexShader: `
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      uniform float time;
      
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      
      // Simple noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        float mixValue = max(pow(max(h, 0.0), exponent), 0.0);
        
        // Add animated clouds
        vec2 cloudUV = vUv * 8.0 + vec2(time * 0.02, 0.0);
        float cloud = noise(cloudUV) * 0.5 + noise(cloudUV * 2.0) * 0.25;
        cloud = smoothstep(0.4, 0.6, cloud);
        
        vec3 skyColor = mix(bottomColor, topColor, mixValue);
        vec3 cloudColor = vec3(1.0);
        
        // Mix clouds only in middle region
        float cloudMask = smoothstep(0.2, 0.4, h) * smoothstep(0.8, 0.6, h);
        vec3 finalColor = mix(skyColor, cloudColor, cloud * cloudMask * 0.6);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
        side: THREE.BackSide
    });
};

export const createGrassShader = () => {
    return new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color(0x4a7c3a) }
        },
        vertexShader: `
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        // Wind effect on grass tips
        float wind = sin(time + position.x * 0.5) * cos(time * 0.7 + position.z * 0.3);
        pos.x += wind * uv.y * 0.3;
        pos.z += wind * uv.y * 0.2;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
        fragmentShader: `
      uniform vec3 color;
      varying vec2 vUv;
      
      void main() {
        // Gradient from dark at bottom to bright at top
        vec3 finalColor = color * (0.6 + vUv.y * 0.4);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
        side: THREE.DoubleSide
    });
};

export const createExplosionShader = () => {
    return new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            intensity: { value: 1.0 }
        },
        vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform float time;
      uniform float intensity;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
        
        vec3 color1 = vec3(1.0, 0.8, 0.0); // Yellow-orange
        vec3 color2 = vec3(1.0, 0.2, 0.0); // Red-orange
        
        float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
        vec3 color = mix(color1, color2, noise);
        
        float alpha = (1.0 - time) * intensity * fresnel;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
        transparent: true,
        blending: THREE.AdditiveBlending
    });
};
