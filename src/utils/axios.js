import axios from "axios";
import { Modal } from "antd";

export default class Axios {
    static ajax(options){
        let baseApi = `https://www.easy-mock.com/mock/5c499a552a7db370da887288/react17`
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'GET',
                baseURL:baseApi,
                timeout:5000,
                params:options.data ? options.data.params: ''
            }).then(res=>{
                if(res.status===200){
                    if(res.data.success){
                        resolve(res.data)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.data.msg
                        })
                    }
                }else{
                    reject(res.data)
                }
            })
        });
    }
};
