import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
import md5 from './md5Min';

function ApiStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const publicKey = '35472315005b4d942563dd11aa18e8d8';
    const privateKey = '859597e0620e90aa38096b4e62c7ff9d69790531';
    // https://developer.marvel.com/documentation/authorization
    // https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0

    const time = Number(new Date());
    const toBeHashed = time + privateKey + publicKey;
    const hashMarvel = md5(toBeHashed);
    
    const url = `http://gateway.marvel.com/v1/public/stories?ts=${time}&apikey=${publicKey}&hash=${hashMarvel}`;
    console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then((json) => {
        console.log("Json: ", json.data.results);
        if (json.erro) console.log(json.erro);
        else {
          setStories(json.data.results);
        }
    })
    .catch(err => console.log(err));
  }, []);

  return (
      <View 
        style={{flex: 1,backgroundColor: '#0A0430'}}
      >
        
        <View 
          style={{alignItems: 'center',justifyContent: 'center',}}
        >
                     
            {stories.map( storie => (
              <View 
                style={{alignItems: 'center',justifyContent: 'center',marginTop: 10, marginBottom: 10,}}
              >
                <TouchableOpacity
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  activeOpacity={0.5}
                  onPress={() => navigate('MovieDescription')}
                >
                  <Image
                    //style={{ width: 130, height: 180}}
                    //source={{
                      //uri:`${storie.thumbnail.path}.${storie.thumbnail.extension}` 
                    //}}
                  />
    
                  <Text 
                    style={{alignItems:'center', justifyContent:'center',color:'#DAD8D8', fontSize:15, fontFamily:'monospace',fontStyle:'normal',}}
                  >
                    {storie.title}
                  </Text>
    
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </View>
  );
}

export default ApiStories;