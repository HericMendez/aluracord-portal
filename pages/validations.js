export default function validUsername(user){
    if(user.length <3){
      return {
        valid:false,
        username: "user",
        
      }
    } else{
      return {
        valid:true,
        username: user,


      }
    }
  }