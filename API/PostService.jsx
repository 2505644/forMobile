import axios from "axios";
export default class PostService {
  static async getAll(){
    const response = await axios.get('https://backend.cyberia.studio/api/v1/projects')
    return response.data.items
  }
  static async getById(id){
    const response = await axios.get('https://backend.cyberia.studio/api/v1/projects/' + id)
    return response
}
}