import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageService = {
  /**
   * Salva um objeto em AsyncStorage.
   * @param {string} tag - A chave onde o objeto será salvo.
   * @param {Object} data - O objeto que será salvo.
   * @returns {Promise<void>}
   */
  async post(tag, data) {
    try {
      const stringifiedData = JSON.stringify(data);
      await AsyncStorage.setItem(tag, stringifiedData);
      console.log(`Objeto salvo com sucesso na tag: ${tag}`);
    } catch (error) {
      console.error(`Erro ao salvar objeto na tag: ${tag}`, error);
      throw error;
    }
  },

  /**
   * Retorna o objeto salvo em AsyncStorage com a tag especificada.
   * @param {string} tag - A chave a ser buscada.
   * @returns {Promise<Object|null>} - O objeto salvo ou `null` se não encontrado.
   */
  async get(tag) {
    try {
      const stringifiedData = await AsyncStorage.getItem(tag);
      if (stringifiedData) {
        const parsedData = JSON.parse(stringifiedData);
        console.log(`Dados encontrados na tag: ${tag}`, parsedData);
        return parsedData;
      }
      console.log(`Nenhum dado encontrado na tag: ${tag}`);
      return null;
    } catch (error) {
      console.error(`Erro ao buscar dados na tag: ${tag}`, error);
      throw error;
    }
  },

  /**
   * Atualiza um objeto existente em AsyncStorage.
   * @param {string} tag - A chave onde o objeto está salvo.
   * @param {Object} newData - O novo objeto que substituirá o existente.
   * @returns {Promise<void>}
   */
  async put(tag, newData) {
    try {
      const existingData = await AsyncStorage.getItem(tag);
      if (!existingData) {
        throw new Error(`Nenhum dado encontrado na tag: ${tag} para atualizar.`);
      }
      const updatedData = JSON.stringify(newData);
      await AsyncStorage.setItem(tag, updatedData);
      console.log(`Dados atualizados com sucesso na tag: ${tag}`);
    } catch (error) {
      console.error(`Erro ao atualizar dados na tag: ${tag}`, error);
      throw error;
    }
  },

  /**
   * Remove um objeto de AsyncStorage.
   * @param {string} tag - A chave a ser removida.
   * @returns {Promise<void>}
   */
  async delete(tag) {
    try {
      await AsyncStorage.removeItem(tag);
      console.log(`Dados removidos com sucesso da tag: ${tag}`);
    } catch (error) {
      console.error(`Erro ao remover dados na tag: ${tag}`, error);
      throw error;
    }
  },
};

export default AsyncStorageService;
