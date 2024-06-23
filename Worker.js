addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  const text = `
wireguard://yKDSNFf%2BTxD4UbMiw0Uk2%2BJyozED44wotB1H%2FoWD9lY%3D@188.114.99.40:942?address=172.16.0.2%2F32%2C2606%3A4700%3A110%3A8332%3Abbef%3A2f2e%3Af46d%3Ab883%2F128&reserved=109%2C236%2C136&publickey=bmXOC%2BF1FxEMF9dyiK2H5%2F1SUtzH0JuVo51h2wPfgyo%3D&mtu=1280#Warp+1+-+%40FreeV2rng
wireguard://yKDSNFf%2BTxD4UbMiw0Uk2%2BJyozED44wotB1H%2FoWD9lY%3D@162.159.192.111:7103?address=172.16.0.2%2F32%2C2606%3A4700%3A110%3A8332%3Abbef%3A2f2e%3Af46d%3Ab883%2F128&reserved=109%2C236%2C136&publickey=bmXOC%2BF1FxEMF9dyiK2H5%2F1SUtzH0JuVo51h2wPfgyo%3D&mtu=1280#Warp+2+-+%40FreeV2rng
`;
  
  return new Response(text, {
    headers: { "content-type": "text/plain" },
  });
}
