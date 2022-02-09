import axios from "axios";

const useAxios = (list) => {
    const partnerAPI = '/api/partners';

    const addNewData = async (item, callback) => {
        const bodyFormData = new FormData();
        for (let i in item) {
            bodyFormData.append(i, item[i]);
        }

        try {
            let newData = await axios.post(partnerAPI, bodyFormData, {
                headers: {
                'Content-Type': 'multipart/form-data',
              }
            })
           callback(newData.data)
        } catch(error) {
            callback({error : true, data: {error_msg: error.response.data.response}})
            console.log(error.response.data.response)
          };
        
    }

    return [addNewData]
}

export default useAxios;