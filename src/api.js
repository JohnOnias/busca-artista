const BASE_URL = import.meta.env.VITE_AUDIO_DB_BASE_URL;
const API_KEY = import.meta.env.VITE_AUDIO_DB_API_KEY;

export async function searchArtists(artistName) {
  try {
    // Constrói a URL com o termo de busca
    const url = `${BASE_URL}/${API_KEY}/search.php?s=${encodeURIComponent(artistName)}`;
    
    // Faz a requisição
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    // Processa a resposta e mapeia os dados
    const data = await response.json();
    
    if (!data.artists) {
      return [];
    }
    
    return data.artists.map((artist) => ({
      id: artist.idArtist,
      name: artist.strArtist,
      thumb: artist.strArtistThumb,
      // ... outros campos
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}


  