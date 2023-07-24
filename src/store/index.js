import { proxy } from 'valtio'

const state = proxy({
    intro: true, // are we currently in home page or not
    color: '#EFBD48', //default color
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state
