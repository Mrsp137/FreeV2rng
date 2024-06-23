addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  const text = `
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.16.233.155:2053?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h3,h2,http/1.1&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=chrome&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+1
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:2053?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h3,h2&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=safari&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+2
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.27.5.195:8443?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h3,h2,http/1.1&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=chrome&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+3
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.22.25.85:2083?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h3,h2&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=chrome&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+4
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@162.159.195.212:443?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h2&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=firefox&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+5
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@temp-mail.org:2053?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h2&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=chrome&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+6
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.19.10.118:2096?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=http/1.1&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=randomized&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+7
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.67.245.156:2087?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h2&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=chrome&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+8
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.19.38.103:443?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D2560&security=tls&encryption=none&alpn=h3,h2,http/1.1&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=firefox&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+9
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@check-host.net:443?path=%2Fkanal--@FREEV2RNG--@FREEV2RNG--%3D%3Fed%3D2560&security=tls&encryption=none&alpn=h3,h2,http/1.1&host=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev&fp=randomized&type=ws&sni=gU-2r-E35m-eO-2rTT-3f-b-CDq-2G4t-t5-Hdr4-6Yvd-35gH-dwE64-w.pAGes.Dev#🇳🇱 ALL - @FREEV2RN -+10
`;
  
  return new Response(text, {
    headers: { "content-type": "text/plain" },
  });
}
