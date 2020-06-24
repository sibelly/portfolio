import axios from 'axios'

const api = axios.create({
  baseUrl: 'http://192.168.0.16:3333'
})

export default api

/**
 * iOS com Emulador: localhost
 * iOS com dispositivo físico: IP da máquina
 * Android com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com dispositivo físico: IP da máquina
 */