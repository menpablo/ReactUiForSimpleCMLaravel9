import axios from "axios";

export function list(callback){
    let url = import.meta.env.VITE_API_URL+'/posts';
    axios.get(url)
    .then(function (response) {
      callback(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export function getPostById(id,callback){
    let url = import.meta.env.VITE_API_URL+'/posts/'+id;
    axios.get(url)
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export function savePost(data,callback){
  let url = import.meta.env.VITE_API_URL+'/posts';
  axios.post(url,data)
  .then(function (response) {
    callback(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

export function addComment(id,comment,callback){
  let url = import.meta.env.VITE_API_URL+'/posts/'+id+'/comments';
  axios.post(url,{'comment':comment})
  .then(function (response) {
    callback(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}