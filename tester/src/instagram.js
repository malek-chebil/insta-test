import React from 'react';
import axios from 'axios';

class Instagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instaData: [],
        };
    }
    

    async componentDidMount ()  {

        let data = [];

        const options = {
            method: 'GET',
            url: 'https://instagram40.p.rapidapi.com/account-medias',
            params: {
              userid: '449749418',
              first: '10',
              after: 'QVFDOGV6dGFtQnJXdnZ0a1FuMkFLSjRHYjdWMEdTTFltMkZpd1FvcUxuQXZ6bDJFVnpKRzFYU3RMSUoyNXluOXFZUVZ3dG1YM3NSTEJqMVI3TTBKM0ZTNg=='
            },
            headers: {
              'x-rapidapi-key': '770aaff551msh500964d81f3b65ep139de3jsn5614fa85d687',
              'x-rapidapi-host': 'instagram40.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
          const convertedJsonObj = JSON.parse(options)
        console.log(convertedJsonObj, "JSON OBJECTS")
        // const mediaArr =
        // convertedJsonObj.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges

        // mediaArr.map(el =>{
        //     const node = el.node
        //     data.push(node)
        // })
        this.setState({ instaData : data })


        // console.log("called")       
        //  let data=[]
//         var test=await fetch("https://www.instagram.com/malek1203/channel/?__a=1",{},{
//     Authorization: 'Bearer ' + varToken
//   })
//         var toJson=test.json()
        // const pictures = toJson
        // console.log(pictures)
        // const url = 'https://www.instagram.com/teslamotors/?hl=fr'
        // const instaSource = await axios.get('https://www.instagram.com/malek1203/channel/?__a=1').then((data)=>{
        //     console.log(data)
        // })

        // const instaObj = instaSource.data
        // .match(
        //     /<script type="text\/javascript">window\._sharedData = {.*}<\/script>/
        // )[1]
        // .slice(0, -1)

        // const convertedJsonObj = JSON.parse(instaObj)
        // console.log(convertedJsonObj, "JSON OBJECTS")
        // const mediaArr =
        // convertedJsonObj.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges

        // mediaArr.map(el =>{
        //     const node = el.node
        //     data.push(node)
        // })
        // this.setState({ instaData : data })
    }

    renderInstaPics = () =>{
        return this.state.instaData.map((media,index) =>{
            return(
                <div style={{display : "inline"}} key={index} >
                    <img
                    src={media.thumbnail_src}
                    alt="insta"
                    style={{width :"200px"}}
                    />

                </div>
            )
        })
    }

    render() {
        return(
            <div>
                {this.state.instaData ? this.renderInstaPics() : ""}
            </div>
        )
    }
}

export default Instagram;