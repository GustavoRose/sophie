exports.handler = async (event, context) => {
  const referer = event.headers.referer || '';

  // Se houver referer E ele não for do seu próprio domínio
  if (referer && !referer.includes('seusite.com')) {
    return {
      statusCode: 301,
      headers: {
        Location: 'https://cheiroderosa.com.br/',
      },
    };
  }

  // Se for acesso direto ou do seu site, não redireciona
  return {
    
  };
};
